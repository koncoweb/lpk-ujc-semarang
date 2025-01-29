import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Download } from "lucide-react";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
}

export function ChartCard({
  title,
  children,
  isLoading = false,
}: ChartCardProps) {
  return (
    <Card className="overflow-hidden bg-white/60 backdrop-blur-xl border-white/50">
      <div className="flex items-center justify-between p-6 pb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-gray-900"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-gray-900"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {isLoading ? (
        <div className="flex h-[300px] items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
            <p className="text-sm text-gray-600">Loading chart data...</p>
          </div>
        </div>
      ) : (
        children
      )}
    </Card>
  );
}
