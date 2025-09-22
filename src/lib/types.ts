export type Student = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  predictedGrade: number;
};

export type Course = {
  id: string;
  name: string;
  description: string;
  instructor: string;
  credits: number;
  imageUrl: string;
  imageHint: string;
};

export type Enrollment = {
  studentId: string;
  courseId: string;
};

export type Grade = {
  studentId: string;
  courseId: string;
  assignment: string;
  score: number;
};

export type Attendance = {
  studentId: string;
  courseId: string;
  date: string;
  status: 'present' | 'absent' | 'late';
};

export type AnalysisResult = {
  studentId: string;
  needsIntervention: boolean;
  reasons: string;
};
