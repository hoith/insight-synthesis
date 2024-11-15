import { useEffect, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const useWebSocket = (url: string, onMessage: (data: any) => void) => {
  const ws = useRef<WebSocket | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Connect to local WebSocket server
    const wsUrl = 'ws://localhost:8080';
    ws.current = new WebSocket(wsUrl);

    ws.current.onopen = () => {
      toast({
        title: "Connected to real-time feed",
        description: "You're now receiving live updates",
      });
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      // Route data to appropriate handler based on type
      if (url.includes('stocks') && data.type === 'stock') {
        onMessage(data);
      } else if (url.includes('news') && data.type === 'news') {
        onMessage(data);
      }
    };

    ws.current.onerror = () => {
      toast({
        variant: "destructive",
        title: "Connection error",
        description: "Failed to connect to real-time feed",
      });
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [url, onMessage, toast]);

  return ws.current;
};