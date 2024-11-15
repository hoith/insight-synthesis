import MarketCard from "@/components/MarketCard";
import StockChart from "@/components/StockChart";
import NewsFeed from "@/components/NewsFeed";
import KPIMetric from "@/components/KPIMetric";
import PortfolioSummary from "@/components/PortfolioSummary";
import MarketSentiment from "@/components/MarketSentiment";
import PortfolioAnalytics from "@/components/PortfolioAnalytics";
import RiskAnalytics from "@/components/RiskAnalytics";
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
            <h1 className="text-3xl font-bold text-brand-dark">Institutional Asset Management</h1>
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

          <PortfolioAnalytics />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PortfolioSummary />
            <RiskAnalytics />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <MarketSentiment />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <KPIMetric label="AUM" value="$8.92B" subValue="+2.5% MoM" />
              <KPIMetric label="YTD Return" value="12.5%" subValue="+150bps vs benchmark" />
              <KPIMetric label="Active Risk" value="3.2%" subValue="Within target range" />
              <KPIMetric label="Information Ratio" value="1.85" subValue="Above target" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;