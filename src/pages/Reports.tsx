
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for the reports
const monthlyData = [
  { month: 'Jan', expenses: 45000, income: 75000 },
  { month: 'Feb', expenses: 52000, income: 75000 },
  { month: 'Mar', expenses: 49000, income: 75000 },
  { month: 'Apr', expenses: 63000, income: 75000 },
  { month: 'May', expenses: 51000, income: 75000 },
  { month: 'Jun', expenses: 58000, income: 75000 },
];

const Reports = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Analyze your spending patterns and trends.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Summary</CardTitle>
            <CardDescription>
              Overview of your spending for the current month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`₹${value}`, 'Amount']} 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                    }}
                  />
                  <Bar dataKey="expenses" name="Expenses" fill="#9013FE" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="income" name="Income" fill="#54C7FC" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Yearly Trends</CardTitle>
            <CardDescription>
              Track your spending over the past year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-muted-foreground">Yearly reports will be available soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
