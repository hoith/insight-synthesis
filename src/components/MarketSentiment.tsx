import { TrendingUp, TrendingDown } from "lucide-react";

interface SentimentIndicator {
  market: string;
  sentiment: "bullish" | "bearish";
  strength: number;
}

const indicators: SentimentIndicator[] = [
  { market: "US Equities", sentiment: "bullish", strength: 75 },
  { market: "European Markets", sentiment: "bearish", strength: 65 },
  { market: "Asian Markets", sentiment: "bullish", strength: 55 },
];

const MarketSentiment = () => {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Market Sentiment</h2>
      <div className="space-y-4">
        {indicators.map((indicator, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              {indicator.sentiment === "bullish" ? (
                <TrendingUp className="w-5 h-5 text-success" />
              ) : (
                <TrendingDown className="w-5 h-5 text-danger" />
              )}
              <span className="font-medium">{indicator.market}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    indicator.sentiment === "bullish" ? "bg-success" : "bg-danger"
                  }`}
                  style={{ width: `${indicator.strength}%` }}
                />
              </div>
              <span className="text-sm text-neutral-500">{indicator.strength}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketSentiment;