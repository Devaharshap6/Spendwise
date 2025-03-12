
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, CalendarClock, Users } from "@/components/icons/DashboardIcons";

interface SummaryCardsProps {
  totalExpenses: number;
  recurringExpenses: number;
  teamMemberCount: number;
}

const SummaryCards = ({ totalExpenses, recurringExpenses, teamMemberCount }: SummaryCardsProps) => {
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
          <div className="text-2xl font-bold">₹{totalExpenses.toLocaleString()}</div>
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
          <div className="text-2xl font-bold">₹{recurringExpenses.toLocaleString()}</div>
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
          <div className="text-2xl font-bold">{teamMemberCount}</div>
          <p className="text-xs text-muted-foreground">
            People sharing expenses
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
