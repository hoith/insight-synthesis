import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { DollarSign } from "lucide-react";

const data = [
  { name: "Stocks", value: 45 },
  { name: "Bonds", value: 25 },
  { name: "Cash", value: 15 },
  { name: "Real Estate", value: 15 },
];

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444"];

const PortfolioSummary = () => {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Portfolio Allocation</h2>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioSummary;