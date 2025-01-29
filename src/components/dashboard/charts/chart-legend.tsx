interface ChartLegendProps {
  items: Array<{
    label: string;
    color: string;
  }>;
}

export function ChartLegend({ items }: ChartLegendProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 px-6 pb-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-sm text-gray-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
