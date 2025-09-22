'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { range: '90-100', students: 18, fill: 'var(--color-chart-2)' },
  { range: '80-89', students: 25, fill: 'var(--color-chart-1)' },
  { range: '70-79', students: 30, fill: 'var(--color-chart-3)' },
  { range: '60-69', students: 15, fill: 'var(--color-chart-4)' },
  { range: '<60', students: 5, fill: 'var(--color-chart-5)' },
];

export function GradeDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grade Distribution</CardTitle>
        <CardDescription>Distribution of grades across all courses.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="range"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Students', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' }, fontSize: 12, fill:"#888888" }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Bar dataKey="students" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}