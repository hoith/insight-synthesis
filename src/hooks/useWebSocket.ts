import { useEffect, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const useWebSocket = (url: string, onMessage: (data: any) => void) => {
  const ws = useRef<WebSocket | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      toast({
        title: "Connected to real-time feed",
        description: "You're now receiving live updates",
      });
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    ws.current.onerror = () => {
      toast({
        variant: "destructive",
        title: "Connection error",
        description: "Failed to connect to real-time feed",
      });
    };

    return () => {
      ws.current?.close();
    };
  }, [url, onMessage, toast]);

  return ws.current;
};