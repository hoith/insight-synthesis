import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface PerformanceMetric {
  label: string;
  value: number;
  change: number;
}

const metrics: PerformanceMetric[] = [
  { label: "Sharpe Ratio", value: 1.23, change: 0.05 },
  { label: "Alpha", value: 0.45, change: -0.02 },
  { label: "Beta", value: 1.05, change: 0.01 },
  { label: "Tracking Error", value: 2.34, change: -0.15 },
];

const performanceData = [
  { date: "Jan", value: 100 },
  { date: "Feb", value: 105 },
  { date: "Mar", value: 102 },
  { date: "Apr", value: 108 },
  { date: "May", value: 106 },
  { date: "Jun", value: 110 },
];

const PortfolioAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="glass-card rounded-xl p-4">
            <h3 className="text-sm font-medium text-neutral-500 mb-2">{metric.label}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-semibold">{metric.value.toFixed(2)}</span>
              <div className={`flex items-center ${metric.change >= 0 ? "text-success" : "text-danger"}`}>
                {metric.change >= 0 ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                )}
                <span className="text-sm font-medium">{Math.abs(metric.change).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl p-6 h-[300px]">
        <h2 className="text-xl font-semibold mb-6">Portfolio Performance</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <XAxis dataKey="date" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#7E69AB"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioAnalytics;