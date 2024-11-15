import { useQuery } from '@tanstack/react-query';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { fetchStockData } from '@/services/stockApi';

interface MarketCardProps {
  title: string;
  symbol: string;
}

const MarketCard = ({ title, symbol }: MarketCardProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['stock', symbol],
    queryFn: () => fetchStockData(symbol),
    refetchInterval: 60000, // Refresh every minute
  });

  if (isLoading) {
    return (
      <div className="glass-card rounded-xl p-6 animate-pulse">
        <div className="h-6 bg-neutral-200 rounded w-1/2 mb-4"></div>
        <div className="h-8 bg-neutral-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-neutral-200 rounded w-1/4"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-danger">Error loading data</p>
      </div>
    );
  }

  const trend = data?.change >= 0 ? 'up' : 'down';

  return (
    <div className="glass-card rounded-xl p-6 hover-scale">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="text-2xl font-bold mb-2">
        ${data?.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
      <div className={`flex items-center ${trend === 'up' ? 'text-success' : 'text-danger'}`}>
        {trend === 'up' ? (
          <ArrowUpRight className="w-4 h-4 mr-1" />
        ) : (
          <ArrowDownRight className="w-4 h-4 mr-1" />
        )}
        <span className="font-medium">
          {Math.abs(data?.changePercent || 0).toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default MarketCard;