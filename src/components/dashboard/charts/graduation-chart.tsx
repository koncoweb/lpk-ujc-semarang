import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", graduates: 32 },
  { month: "Feb", graduates: 28 },
  { month: "Mar", graduates: 35 },
  { month: "Apr", graduates: 42 },
  { month: "May", graduates: 38 },
  { month: "Jun", graduates: 45 },
];

import { ChartCard } from "./chart-card";
import { ChartLegend } from "./chart-legend";

export function GraduationChart() {
  return (
    <ChartCard title="Graduation Trends">
      <ChartLegend
        items={[{ label: "Graduates", color: "rgba(99, 102, 241, 0.7)" }]}
      />
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
              contentStyle={{
                background: "white",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                color: "#1f2937",
              }}
            />
            <Bar
              dataKey="graduates"
              fill="rgba(99, 102, 241, 0.7)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
