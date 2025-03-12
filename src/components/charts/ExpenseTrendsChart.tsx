
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
} from "recharts";

interface ExpenseTrendsChartProps {
  data: Array<{
    name: string;
    amount: number;
  }>;
}

const ExpenseTrendsChart = ({ data }: ExpenseTrendsChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <RechartsTooltip 
          formatter={(value) => [`₹${value}`, 'Amount']} 
          labelStyle={{ color: 'black' }}
          contentStyle={{ 
            backgroundColor: 'white', 
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
          }}
        />
        <Bar 
          dataKey="amount" 
          fill="#9b87f5"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseTrendsChart;
