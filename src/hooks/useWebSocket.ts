import { useEffect, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const useWebSocket = (url: string, onMessage: (data: any) => void) => {
  const ws = useRef<WebSocket | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // For demo purposes, we'll simulate WebSocket data since we don't have a real WebSocket server
    const interval = setInterval(() => {
      // Simulate stock data updates
      if (url.includes('stocks')) {
        const randomValue = 4000 + Math.random() * 2000;
        const currentDate = new Date();
        onMessage({
          date: currentDate.toLocaleTimeString(),
          value: randomValue
        });
      }
      
      // Simulate news updates
      if (url.includes('news')) {
        const newsItems = [
          "Federal Reserve Announces Policy Changes",
          "Tech Sector Shows Strong Growth",
          "Global Markets React to Economic Data",
          "Cryptocurrency Markets See Volatility",
          "Major Merger Announced in Finance Sector"
        ];
        
        onMessage({
          title: newsItems[Math.floor(Math.random() * newsItems.length)],
          time: "Just now",
          source: "Financial Times"
        });
      }
    }, 5000); // Update every 5 seconds

    // Simulate connection success
    toast({
      title: "Connected to real-time feed",
      description: "You're now receiving live updates",
    });

    return () => clearInterval(interval);
  }, [url, onMessage, toast]);

  return ws.current;
};