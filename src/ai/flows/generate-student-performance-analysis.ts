'use server';
/**
 * @fileOverview AI-powered student performance analysis flow.
 *
 * - generateStudentPerformanceAnalysis - Analyzes student data and identifies areas for intervention.
 * - GenerateStudentPerformanceAnalysisInput - Input type for the analysis.
 * - GenerateStudentPerformanceAnalysisOutput - Output type containing the analysis results.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StudentPerformanceDataSchema = z.object({
  studentId: z.string().describe('Unique identifier for the student.'),
  name: z.string().describe('Name of the student.'),
  courseName: z.string().describe('Name of the course.'),
  grades: z.array(z.number()).describe('List of grades for the student in the course.'),
  attendanceRate: z.number().describe('Student attendance rate in percentage.'),
  predictedGrade: z.number().describe('Predicted grade of the student in this course.'),
});

export type StudentPerformanceData = z.infer<typeof StudentPerformanceDataSchema>;

const GenerateStudentPerformanceAnalysisInputSchema = z.object({
  studentData: z.array(StudentPerformanceDataSchema).describe('Array of student performance data.'),
});
export type GenerateStudentPerformanceAnalysisInput = z.infer<typeof GenerateStudentPerformanceAnalysisInputSchema>;

const GenerateStudentPerformanceAnalysisOutputSchema = z.object({
  analysisResults: z.array(
    z.object({
      studentId: z.string().describe('Unique identifier for the student.'),
      needsIntervention: z.boolean().describe('Whether the student needs intervention.'),
      reasons: z.string().describe('Reasons for needing intervention, based on grades, attendance and predicted performance.'),
    })
  ).describe('Analysis results for each student, flagging those who need intervention.'),
});
export type GenerateStudentPerformanceAnalysisOutput = z.infer<typeof GenerateStudentPerformanceAnalysisOutputSchema>;

export async function generateStudentPerformanceAnalysis(
  input: GenerateStudentPerformanceAnalysisInput
): Promise<GenerateStudentPerformanceAnalysisOutput> {
  return generateStudentPerformanceAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'studentPerformanceAnalysisPrompt',
  input: {schema: GenerateStudentPerformanceAnalysisInputSchema},
  output: {schema: GenerateStudentPerformanceAnalysisOutputSchema},
  prompt: `You are an AI assistant that analyzes student performance data to identify students who may need intervention.

  For each student, determine if their current performance (grades and attendance) is significantly lower than their predicted grade. If it is, flag them for intervention and provide reasons based on their grades, attendance, and predicted performance.

  Consider a student to need intervention if their overall mark in the current class is lower than their predicted performance using all their previous results.

  Here is the student data:
  {{#each studentData}}
  Student ID: {{studentId}}
  Name: {{name}}
  Course: {{courseName}}
  Grades: {{grades}}
  Attendance Rate: {{attendanceRate}}%
  Predicted Grade: {{predictedGrade}}
  \n
  {{/each}}

  Output the analysis results in JSON format.
  Ensure that the analysisResults array contains an object for each student, indicating whether they need intervention and the reasons why.
  `,
});

const generateStudentPerformanceAnalysisFlow = ai.defineFlow(
  {
    name: 'generateStudentPerformanceAnalysisFlow',
    inputSchema: GenerateStudentPerformanceAnalysisInputSchema,
    outputSchema: GenerateStudentPerformanceAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
