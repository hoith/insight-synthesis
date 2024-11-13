import MarketCard from "@/components/MarketCard";
import StockChart from "@/components/StockChart";
import NewsFeed from "@/components/NewsFeed";
import KPIMetric from "@/components/KPIMetric";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="mb-12">
          <h1 className="text-3xl font-bold">Market Dashboard</h1>
          <p className="text-neutral-500 mt-2">Real-time market insights and analysis</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MarketCard
            title="S&P 500"
            value="4,783.45"
            change={1.23}
            trend="up"
          />
          <MarketCard
            title="NASDAQ"
            value="14,532.23"
            change={0.89}
            trend="up"
          />
          <MarketCard
            title="DOW JONES"
            value="37,221.78"
            change={0.45}
            trend="down"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StockChart />
          </div>
          <div>
            <NewsFeed />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPIMetric
            label="Trading Volume"
            value="2.3M"
            subValue="+12.5% vs last week"
          />
          <KPIMetric
            label="Market Cap"
            value="$892.4B"
            subValue="Technology Sector"
          />
          <KPIMetric
            label="P/E Ratio"
            value="24.5"
            subValue="Industry avg: 22.3"
          />
          <KPIMetric
            label="Dividend Yield"
            value="2.15%"
            subValue="Annual yield"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;