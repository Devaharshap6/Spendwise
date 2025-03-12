import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { RecentTransactions } from "@/components/RecentTransactions";
import ExpenseTrendsChart from "@/components/charts/ExpenseTrendsChart";
import CategoryPieChart from "@/components/charts/CategoryPieChart";
import SummaryCards from "@/components/dashboard/SummaryCards";
import { CreditCard, CalendarClock, Users } from "@/components/icons/DashboardIcons";

// Import the data from other sections to keep it synchronized
import { expensesData } from "@/data/expensesData";
import { recurringExpensesData } from "@/data/recurringExpensesData";
import { categoryData } from "@/data/categoryData";
import { teams, teamMembers } from "@/data/sharedData";

const Dashboard = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [recurringExpenses, setRecurringExpenses] = useState(0);
  const [teamMemberCount, setTeamMemberCount] = useState(0);
  const [monthlyExpenseData, setMonthlyExpenseData] = useState<any[]>([]);

  useEffect(() => {
    // Calculate total expenses from expense data
    const total = expensesData.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalExpenses(total);

    // Calculate recurring expenses
    const recurring = recurringExpensesData.reduce((sum, expense) => sum + expense.amount, 0);
    setRecurringExpenses(recurring);

    // Get team member count
    setTeamMemberCount(teamMembers.length);

    // Generate monthly expense data from expenses
    const now = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(now.getMonth() - 5);

    // Create monthly aggregated data
    const monthlyData = [];
    for (let i = 0; i < 6; i++) {
      const month = new Date(sixMonthsAgo);
      month.setMonth(sixMonthsAgo.getMonth() + i);
      const monthName = month.toLocaleString('default', { month: 'short' });
      
      // In a real app, this would filter expenses by month
      // For demo, we'll use the existing expense data with some variance
      const baseAmount = 75000 + Math.random() * 50000;
      monthlyData.push({
        name: monthName,
        amount: Math.round(baseAmount)
      });
    }
    setMonthlyExpenseData(monthlyData);
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            An overview of your finances.
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Expense
        </Button>
      </div>

      {/* Summary Cards */}
      <SummaryCards 
        totalExpenses={totalExpenses}
        recurringExpenses={recurringExpenses}
        teamMemberCount={teamMemberCount}
      />

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Expense Trends</CardTitle>
            <CardDescription>
              Your expenses over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ExpenseTrendsChart data={monthlyExpenseData} />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
            <CardDescription>
              How your expenses are distributed
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <CategoryPieChart data={categoryData} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Your most recent expenses
          </CardDescription>
        </CardHeader>
        <RecentTransactions />
      </Card>
    </div>
  );
};

export default Dashboard;
