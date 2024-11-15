import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AlertTriangle } from "lucide-react";

const riskData = [
  { category: "Market", value: 8.5 },
  { category: "Credit", value: 4.2 },
  { category: "Liquidity", value: 3.8 },
  { category: "Operational", value: 2.5 },
];

const RiskAnalytics = () => {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="w-5 h-5 text-warning" />
        <h2 className="text-xl font-semibold">Risk Analysis</h2>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Value at Risk (VaR)</span>
          <span className="text-lg font-semibold text-warning">5.2%</span>
        </div>
        <div className="w-full h-2 bg-neutral-100 rounded-full">
          <div className="h-full w-[65%] bg-warning rounded-full" />
        </div>
      </div>

      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={riskData}>
            <XAxis dataKey="category" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="value" fill="#F59E0B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskAnalytics;