import { MetricsGrid } from "./metrics-grid";
import { RecruitmentChart } from "./charts/recruitment-chart";
import { GraduationChart } from "./charts/graduation-chart";
import { DashboardHeader } from "./header";

export default function Dashboard() {
  return (
    <div>
      <div className="p-8">
        <DashboardHeader />
        <MetricsGrid />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <RecruitmentChart />
          <GraduationChart />
        </div>
      </div>
    </div>
  );
}
