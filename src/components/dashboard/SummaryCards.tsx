
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, CalendarClock, Users } from "@/components/icons/DashboardIcons";
import { supabase } from "@/integrations/supabase/client";

interface SummaryCardsProps {
  totalExpenses?: number;
  recurringExpenses?: number;
  teamMemberCount?: number;
}

const SummaryCards = ({ 
  totalExpenses: initialTotalExpenses, 
  recurringExpenses: initialRecurringExpenses, 
  teamMemberCount: initialTeamMemberCount 
}: SummaryCardsProps) => {
  const [totalExpenses, setTotalExpenses] = useState(initialTotalExpenses || 0);
  const [recurringExpenses, setRecurringExpenses] = useState(initialRecurringExpenses || 0);
  const [teamMemberCount, setTeamMemberCount] = useState(initialTeamMemberCount || 0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        setIsLoading(true);
        
        // Get current year and month
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        
        // Fetch total expenses for current month
        if (!initialTotalExpenses) {
          const { data: monthlyExpenses, error: expensesError } = await supabase
            .rpc('get_monthly_expenses', { year_param: year, month_param: month });
          
          if (expensesError) throw expensesError;
          if (monthlyExpenses && monthlyExpenses.length > 0) {
            setTotalExpenses(Number(monthlyExpenses[0].total_amount));
          }
        }
        
        // Fetch recurring expenses total
        if (!initialRecurringExpenses) {
          const { data: recurringTotal, error: recurringError } = await supabase
            .rpc('get_monthly_recurring_total');
          
          if (recurringError) throw recurringError;
          if (recurringTotal) {
            setRecurringExpenses(Number(recurringTotal));
          }
        }
        
        // Fetch team member count
        if (!initialTeamMemberCount) {
          const { count, error: teamError } = await supabase
            .from('team_members')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', (await supabase.auth.getUser()).data.user?.id);
          
          if (teamError) throw teamError;
          if (count !== null) {
            setTeamMemberCount(count);
          }
        }
      } catch (error) {
        console.error('Error fetching summary data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if initial values weren't provided
    if (!initialTotalExpenses || !initialRecurringExpenses || !initialTeamMemberCount) {
      fetchSummaryData();
    }
  }, [initialTotalExpenses, initialRecurringExpenses, initialTeamMemberCount]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Expenses
          </CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isLoading ? 
              <div className="h-7 w-24 bg-muted animate-pulse rounded"></div> : 
              `₹${totalExpenses.toLocaleString()}`
            }
          </div>
          <p className="text-xs text-muted-foreground">
            Current month expenses
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Recurring Expenses
          </CardTitle>
          <CalendarClock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isLoading ? 
              <div className="h-7 w-24 bg-muted animate-pulse rounded"></div> : 
              `₹${recurringExpenses.toLocaleString()}`
            }
          </div>
          <p className="text-xs text-muted-foreground">
            Monthly subscription costs
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Team Members
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isLoading ? 
              <div className="h-7 w-12 bg-muted animate-pulse rounded"></div> : 
              teamMemberCount
            }
          </div>
          <p className="text-xs text-muted-foreground">
            People sharing expenses
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
