import Image from 'next/image';
import Link from 'next/link';
import { PlusCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { courses, enrollments } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function CoursesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Courses</h1>
          <p className="text-muted-foreground">Browse and manage available courses.</p>
        </div>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Course</span>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => {
          const studentCount = enrollments.filter((e) => e.courseId === course.id).length;
          return (
            <Card key={course.id} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={course.imageUrl}
                    alt={course.name}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={course.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="mb-2">{course.name}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Instructor</p>
                    <p className="text-sm font-semibold">{course.instructor}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-semibold">{studentCount}</span>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
