import type { Student, Course, Enrollment, Grade, Attendance } from './types';

export const students: Student[] = [
  {
    id: 's1',
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    avatar: 'https://i.pravatar.cc/150?u=s1',
    predictedGrade: 88,
  },
  {
    id: 's2',
    name: 'Maria Garcia',
    email: 'maria.g@example.com',
    avatar: 'https://i.pravatar.cc/150?u=s2',
    predictedGrade: 92,
  },
  {
    id: 's3',
    name: 'James Smith',
    email: 'james.s@example.com',
    avatar: 'https://i.pravatar.cc/150?u=s3',
    predictedGrade: 75,
  },
  {
    id: 's4',
    name: 'Priya Patel',
    email: 'priya.p@example.com',
    avatar: 'https://i.pravatar.cc/150?u=s4',
    predictedGrade: 95,
  },
  {
    id: 's5',
    name: 'Chen Wang',
    email: 'chen.w@example.com',
    avatar: 'https://i.pravatar.cc/150?u=s5',
    predictedGrade: 82,
  },
  {
    id: 's6',
    name: 'Fatima Al-Fassi',
    email: 'fatima.a@example.com',
    avatar: 'https://i.pravatar.cc/150?u=s6',
    predictedGrade: 89,
  },
  {
    id: 's7',
    name: 'David Miller',
    email: 'david.m@example.com',
    avatar: 'https://i.pravatar.cc/150?u=s7',
    predictedGrade: 68,
  },
  {
    id: 's8',
    name: 'Yuki Tanaka',
    email: 'yuki.t@example.com',
    avatar: 'https://i.pravatar.cc/150?u=s8',
    predictedGrade: 91,
  },
];

export const courses: Course[] = [
  {
    id: 'c1',
    name: 'Introduction to Computer Science',
    description: 'A foundational course on programming and computer science principles.',
    instructor: 'Dr. Evelyn Reed',
    credits: 3,
    imageUrl: 'https://picsum.photos/seed/c1/600/400',
    imageHint: 'computer code',
  },
  {
    id: 'c2',
    name: 'Calculus I',
    description: 'An introductory course on differential calculus.',
    instructor: 'Dr. Alan Grant',
    credits: 4,
    imageUrl: 'https://picsum.photos/seed/c2/600/400',
    imageHint: 'math equation',
  },
  {
    id: 'c3',
    name: 'World History: Ancient Civilizations',
    description: 'A survey of major world civilizations from prehistory to 500 CE.',
    instructor: 'Prof. Eleanor Vance',
    credits: 3,
    imageUrl: 'https://picsum.photos/seed/c3/600/400',
    imageHint: 'ancient ruins',
  },
  {
    id: 'c4',
    name: 'Principles of Physics',
    description: 'Exploring the fundamental principles of classical mechanics and electromagnetism.',
    instructor: 'Dr. Ben Carter',
    credits: 4,
    imageUrl: 'https://picsum.photos/seed/c4/600/400',
    imageHint: 'physics experiment',
  },
];

export const enrollments: Enrollment[] = [
  { studentId: 's1', courseId: 'c1' },
  { studentId: 's1', courseId: 'c2' },
  { studentId: 's2', courseId: 'c1' },
  { studentId: 's2', courseId: 'c3' },
  { studentId: 's3', courseId: 'c1' },
  { studentId: 's3', courseId: 'c4' },
  { studentId: 's4', courseId: 'c2' },
  { studentId: 's4', courseId: 'c3' },
  { studentId: 's5', courseId: 'c1' },
  { studentId: 's5', courseId: 'c2' },
  { studentId: 's6', courseId: 'c3' },
  { studentId: 's6', courseId: 'c4' },
  { studentId: 's7', courseId: 'c4' },
  { studentId: 's7', courseId: 'c1' },
  { studentId: 's8', courseId: 'c2' },
  { studentId: 's8', courseId: 'c3' },
];

export const grades: Grade[] = [
  // Student 1
  { studentId: 's1', courseId: 'c1', assignment: 'Homework 1', score: 85 },
  { studentId: 's1', courseId: 'c1', assignment: 'Midterm', score: 78 },
  { studentId: 's1', courseId: 'c1', assignment: 'Final', score: 90 },
  // Student 2
  { studentId: 's2', courseId: 'c1', assignment: 'Homework 1', score: 95 },
  { studentId: 's2', courseId: 'c1', assignment: 'Midterm', score: 92 },
  { studentId: 's2', courseId: 'c1', assignment: 'Final', score: 94 },
  // Student 3 (At risk)
  { studentId: 's3', courseId: 'c1', assignment: 'Homework 1', score: 65 },
  { studentId: 's3', courseId: 'c1', assignment: 'Midterm', score: 50 },
  { studentId: 's3', courseId: 'c1', assignment: 'Final', score: 58 },
  // Student 4
  { studentId: 's4', courseId: 'c2', assignment: 'Quiz 1', score: 98 },
  { studentId: 's4', courseId: 'c2', assignment: 'Test 1', score: 95 },
  // Student 7 (At risk)
  { studentId: 's7', courseId: 'c4', assignment: 'Lab 1', score: 70 },
  { studentId: 's7', courseId: 'c4', assignment: 'Lab 2', score: 55 },
  { studentId: 's7', courseId: 'c4', assignment: 'Midterm', score: 45 },
];

export const attendance: Attendance[] = [
  // Student 1, Course 1: 90%
  { studentId: 's1', courseId: 'c1', date: '2024-01-10', status: 'present' },
  { studentId: 's1', courseId: 'c1', date: '2024-01-12', status: 'present' },
  { studentId: 's1', courseId: 'c1', date: '2024-01-17', status: 'present' },
  { studentId: 's1', courseId: 'c1', date: '2024-01-19', status: 'present' },
  { studentId: 's1', courseId: 'c1', date: '2024-01-24', status: 'absent' },
  { studentId: 's1', courseId: 'c1', date: '2024-01-26', status: 'present' },
  { studentId: 's1', courseId: 'c1', date: '2024-01-31', status: 'present' },
  { studentId: 's1', courseId: 'c1', date: '2024-02-02', status: 'present' },
  { studentId: 's1', courseId: 'c1', date: '2024-02-07', status: 'present' },
  { studentId: 's1', courseId: 'c1', date: '2024-02-09', status: 'present' },
  // Student 3, Course 1: 60%
  { studentId: 's3', courseId: 'c1', date: '2024-01-10', status: 'present' },
  { studentId: 's3', courseId: 'c1', date: '2024-01-12', status: 'absent' },
  { studentId: 's3', courseId: 'c1', date: '2024-01-17', status: 'present' },
  { studentId: 's3', courseId: 'c1', date: '2024-01-19', status: 'absent' },
  { studentId: 's3', courseId: 'c1', date: '2024-01-24', status: 'absent' },
  { studentId: 's3', courseId: 'c1', date: '2024-01-26', status: 'present' },
  { studentId: 's3', courseId: 'c1', date: '2024-01-31', status: 'present' },
  { studentId: 's3', courseId: 'c1', date: '2024-02-02', status: 'present' },
  { studentId: 's3', courseId: 'c1', date: '2024-02-07', status: 'absent' },
  { studentId: 's3', courseId: 'c1', date: '2024-02-09', status: 'present' },
  // Everyone else 100% for simplicity
  ...['s2', 's4', 's5', 's6', 's7', 's8'].flatMap(studentId =>
    enrollments
      .filter(e => e.studentId === studentId)
      .flatMap(e =>
        ['2024-01-10', '2024-01-12', '2024-01-17', '2024-01-19', '2024-01-24'].map(date => ({
          studentId,
          courseId: e.courseId,
          date,
          status: 'present' as 'present',
        }))
      )
  ),
];