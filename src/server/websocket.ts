import { WebSocketServer } from 'ws';
import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Store connected clients
const clients = new Set();

// Function to broadcast data to all connected clients
const broadcast = (data: any) => {
  clients.forEach(client => {
    if (client.readyState === 1) { // WebSocket.OPEN
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('Client connected');

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Client disconnected');
  });
});

// Simulate real market data updates
setInterval(() => {
  const stockData = {
    type: 'stock',
    date: new Date().toLocaleTimeString(),
    value: 4000 + Math.random() * 2000
  };
  broadcast(stockData);
}, 2000);

// Simulate real news updates
setInterval(() => {
  const newsItems = [
    "Federal Reserve Announces Policy Changes",
    "Tech Sector Shows Strong Growth",
    "Global Markets React to Economic Data",
    "Cryptocurrency Markets See Volatility",
    "Major Merger Announced in Finance Sector"
  ];

  const newsData = {
    type: 'news',
    title: newsItems[Math.floor(Math.random() * newsItems.length)],
    time: "Just now",
    source: "Financial Times"
  };
  broadcast(newsData);
}, 5000);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});

export default server;