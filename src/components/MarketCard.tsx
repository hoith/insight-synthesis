import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MarketCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
}

const MarketCard = ({ title, value, change, trend }: MarketCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover-scale animate-fade-in">
      <h3 className="text-sm font-medium text-neutral-500 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        <div className={`flex items-center ${trend === "up" ? "text-success" : "text-danger"}`}>
          {trend === "up" ? (
            <ArrowUpIcon className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 mr-1" />
          )}
          <span className="font-medium">{change}%</span>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;