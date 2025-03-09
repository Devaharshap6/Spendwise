
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

// Sample data
const categoryData = [
  { name: 'Food', value: 400, color: '#FEF7CD' },
  { name: 'Rent', value: 800, color: '#F2FCE2' },
  { name: 'Utilities', value: 200, color: '#D3E4FD' },
  { name: 'Entertainment', value: 150, color: '#FFDEE2' },
  { name: 'Transportation', value: 250, color: '#FEC6A1' },
  { name: 'Other', value: 100, color: '#F1F0FB' },
];

const Categories = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <p className="text-muted-foreground">
          Manage and view your expense categories.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
            <CardDescription>
              How your expenses are distributed by category
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`₹${value}`, 'Amount']} 
                  labelStyle={{ color: 'black' }}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Category Management</CardTitle>
            <CardDescription>
              Create and manage your expense categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-muted-foreground">Category management will be available soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Categories;
