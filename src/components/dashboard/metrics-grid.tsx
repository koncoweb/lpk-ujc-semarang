import {
  Users,
  UserPlus,
  GraduationCap,
  Briefcase,
  Building2,
} from "lucide-react";
import { MetricCard } from "./metric-card";

const metrics = [
  { title: "Active Students", value: 245, icon: Users, trend: 12 },
  { title: "Recruitment", value: 54, icon: UserPlus, trend: -2 },
  { title: "Graduates", value: 189, icon: GraduationCap, trend: 8 },
  { title: "Job Orders", value: 32, icon: Briefcase, trend: 15 },
  { title: "LPK Partners", value: 12, icon: Building2, trend: 0 },
];

export function MetricsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {metrics.map((metric, index) => (
        <MetricCard key={metric.title} {...metric} delay={index * 0.1} />
      ))}
    </div>
  );
}
