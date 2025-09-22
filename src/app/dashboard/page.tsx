import { StatsCards } from '@/components/app/dashboard/stats-cards';
import { AttendanceChart } from '@/components/app/dashboard/attendance-chart';
import { GradeDistributionChart } from '@/components/app/dashboard/grade-distribution-chart';
import { AtRiskStudents } from '@/components/app/dashboard/at-risk-students';

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="flex flex-1 rounded-lg shadow-sm" >
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 w-full">
          <StatsCards />
        </div>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <AtRiskStudents />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <AttendanceChart />
            <GradeDistributionChart />
          </div>
        </div>
      </div>
    </>
  );
}