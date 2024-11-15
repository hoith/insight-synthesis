import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { useWebSocket } from "@/hooks/useWebSocket";

interface StockData {
  date: string;
  value: number;
}

const StockChart = () => {
  const [data, setData] = useState<StockData[]>([
    { date: new Date().toLocaleTimeString(), value: 4000 },
    { date: new Date(Date.now() - 1000).toLocaleTimeString(), value: 3000 },
    { date: new Date(Date.now() - 2000).toLocaleTimeString(), value: 5000 },
    { date: new Date(Date.now() - 3000).toLocaleTimeString(), value: 4500 },
    { date: new Date(Date.now() - 4000).toLocaleTimeString(), value: 6000 },
    { date: new Date(Date.now() - 5000).toLocaleTimeString(), value: 5500 },
  ]);

  useWebSocket("wss://your-websocket-url/stocks", (newData) => {
    setData((prevData) => [...prevData.slice(1), { 
      date: newData.date,
      value: newData.value 
    }]);
  });

  return (
    <div className="glass-card rounded-xl p-6 h-[400px] animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Stock Performance</h2>
        <div className="flex items-center gap-2">
          <span className="animate-pulse w-2 h-2 rounded-full bg-success"></span>
          <span className="text-xs text-success">Live</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #E2E8F0",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366F1"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;