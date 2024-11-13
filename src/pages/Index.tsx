import MarketCard from "@/components/MarketCard";
import StockChart from "@/components/StockChart";
import NewsFeed from "@/components/NewsFeed";
import KPIMetric from "@/components/KPIMetric";
import PortfolioSummary from "@/components/PortfolioSummary";
import MarketSentiment from "@/components/MarketSentiment";
import HoithLogo from "@/components/HoithLogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-light">
      <nav className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <HoithLogo />
        </div>
      </nav>
      
      <div className="p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <header className="mb-12">
            <h1 className="text-3xl font-bold text-brand-dark">Market Dashboard</h1>
            <p className="text-brand-purple mt-2">Hoith Group Financial Analytics Platform</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MarketCard title="S&P 500" value="4,783.45" change={1.23} trend="up" />
            <MarketCard title="NASDAQ" value="14,532.23" change={0.89} trend="up" />
            <MarketCard title="DOW JONES" value="37,221.78" change={0.45} trend="down" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <StockChart />
            </div>
            <div>
              <NewsFeed />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PortfolioSummary />
            <MarketSentiment />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPIMetric label="Trading Volume" value="2.3M" subValue="+12.5% vs last week" />
            <KPIMetric label="Market Cap" value="$892.4B" subValue="Technology Sector" />
            <KPIMetric label="P/E Ratio" value="24.5" subValue="Industry avg: 22.3" />
            <KPIMetric label="Dividend Yield" value="2.15%" subValue="Annual yield" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;