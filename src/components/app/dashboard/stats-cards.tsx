import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BarChart, GraduationCap, AlertCircle } from 'lucide-react';
import { students, attendance, grades } from '@/lib/data';

export function StatsCards() {
  const totalStudents = students.length;

  const totalAttendanceRecords = attendance.length;
  const presentCount = attendance.filter((a) => a.status === 'present' || a.status === 'late').length;
  const averageAttendance = totalAttendanceRecords > 0 ? Math.round((presentCount / totalAttendanceRecords) * 100) : 0;

  const totalGrades = grades.length;
  const gradeSum = grades.reduce((sum, g) => sum + g.score, 0);
  const averageGrade = totalGrades > 0 ? Math.round(gradeSum / totalGrades) : 0;

  const atRiskStudents = 2;

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalStudents}</div>
          <p className="text-xs text-muted-foreground">+2 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Attendance</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageAttendance}%</div>
          <p className="text-xs text-muted-foreground">-1.2% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Grade</CardTitle>
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageGrade}%</div>
          <p className="text-xs text-muted-foreground">+3.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Students at Risk</CardTitle>
          <AlertCircle className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{atRiskStudents}</div>
          <p className="text-xs text-muted-foreground">Identified by AI analysis</p>
        </CardContent>
      </Card>
    </>
  );
}