import { Clock } from "lucide-react";
import { useState } from "react";
import { useWebSocket } from "@/hooks/useWebSocket";

interface NewsItem {
  title: string;
  time: string;
  source: string;
}

const NewsFeed = () => {
  const [news, setNews] = useState<NewsItem[]>([
    {
      title: "Federal Reserve Maintains Interest Rates",
      time: "2h ago",
      source: "Financial Times",
    },
    {
      title: "Tech Stocks Rally Amid Positive Earnings",
      time: "4h ago",
      source: "Bloomberg",
    },
    {
      title: "Global Markets React to Economic Data",
      time: "5h ago",
      source: "Reuters",
    },
  ]);

  useWebSocket("wss://your-websocket-url/news", (data) => {
    setNews((prevNews) => [data, ...prevNews.slice(0, 9)]);
  });

  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Latest News</h2>
        <div className="flex items-center gap-2">
          <span className="animate-pulse w-2 h-2 rounded-full bg-success"></span>
          <span className="text-xs text-success">Live</span>
        </div>
      </div>
      <div className="space-y-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="hover-scale cursor-pointer border-b border-neutral-100 last:border-0 pb-4 last:pb-0"
          >
            <h3 className="font-medium mb-2">{item.title}</h3>
            <div className="flex items-center text-sm text-neutral-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>{item.time}</span>
              <span className="mx-2">•</span>
              <span>{item.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;