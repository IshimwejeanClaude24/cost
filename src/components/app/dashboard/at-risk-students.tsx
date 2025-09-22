import { generateStudentPerformanceAnalysis, type StudentPerformanceData } from '@/ai/flows/generate-student-performance-analysis';
import { students, courses, grades, attendance, enrollments } from '@/lib/data';
import type { AnalysisResult } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle } from 'lucide-react';
import Image from 'next/image';

function prepareAnalysisData(): StudentPerformanceData[] {
  return enrollments.map(enrollment => {
    const student = students.find(s => s.id === enrollment.studentId)!;
    const course = courses.find(c => c.id === enrollment.courseId)!;
    
    const studentGrades = grades
      .filter(g => g.studentId === student.id && g.courseId === course.id)
      .map(g => g.score);
      
    const studentAttendance = attendance.filter(a => a.studentId === student.id && a.courseId === course.id);
    const presentCount = studentAttendance.filter(a => a.status === 'present' || a.status === 'late').length;
    const attendanceRate = studentAttendance.length > 0 ? (presentCount / studentAttendance.length) * 100 : 100;

    return {
      studentId: student.id,
      name: student.name,
      courseName: course.name,
      grades: studentGrades,
      attendanceRate: Math.round(attendanceRate),
      predictedGrade: student.predictedGrade,
    };
  }).filter(s => s.grades.length > 0);
}


export async function AtRiskStudents() {
  const analysisInput = { studentData: prepareAnalysisData() };
  let analysisResults: AnalysisResult[] = [];
  
  try {
    const result = await generateStudentPerformanceAnalysis(analysisInput);
    analysisResults = result.analysisResults;
  } catch (error) {
    console.error("AI analysis failed:", error);
    // Return empty results or a specific error state
  }
  
  const atRisk = analysisResults.filter(r => r.needsIntervention);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            AI-Powered Insights: At-Risk Students
          </CardTitle>
          <CardDescription>Students flagged for potential intervention based on performance data.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead className="hidden sm:table-cell">Reason</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {atRisk.length > 0 ? (
              atRisk.map(result => {
                const student = students.find(s => s.id === result.studentId);
                if (!student) return null;
                return (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Image
                          src={student.avatar}
                          alt={student.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {student.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{result.reasons}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge className="text-xs" variant="destructive">
                        Needs Intervention
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  No students currently identified as at-risk.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
