
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus, Share2, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Shared = () => {
  const [activeTab, setActiveTab] = useState("teams");

  // Sample team members data
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Admin', joinedDate: '2023-01-15', avatar: '', type: 'Business Partner' },
    { id: 2, name: 'Jane Smith', role: 'Member', joinedDate: '2023-01-20', avatar: '', type: 'Team Member' },
    { id: 3, name: 'Alex Johnson', role: 'Member', joinedDate: '2023-02-05', avatar: '', type: 'Family' },
    { id: 4, name: 'Maria Garcia', role: 'Member', joinedDate: '2023-03-10', avatar: '', type: 'Business Partner' }
  ];

  // Sample teams/groups data
  const teams = [
    { id: 1, name: 'Marketing Team', members: 4, createdDate: '2023-01-10', type: 'Team' },
    { id: 2, name: 'Family', members: 3, createdDate: '2023-01-05', type: 'Family' },
    { id: 3, name: 'Roommates', members: 2, createdDate: '2023-02-15', type: 'Shared Living' },
    { id: 4, name: 'Startup Co-founders', members: 3, createdDate: '2023-03-20', type: 'Business' }
  ];

  // Sample shared expenses
  const sharedExpenses = [
    { id: 1, description: 'Office Supplies', amount: 156.50, date: '2023-04-12', team: 'Marketing Team', paidBy: 'John Doe', status: 'Settled' },
    { id: 2, description: 'Team Lunch', amount: 89.75, date: '2023-04-15', team: 'Marketing Team', paidBy: 'Jane Smith', status: 'Pending' },
    { id: 3, description: 'Monthly Rent', amount: 1200, date: '2023-04-01', team: 'Roommates', paidBy: 'Alex Johnson', status: 'Settled' },
    { id: 4, description: 'Software Subscription', amount: 49.99, date: '2023-04-05', team: 'Startup Co-founders', paidBy: 'Maria Garcia', status: 'Pending' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shared Expenses</h1>
          <p className="text-muted-foreground">
            Collaborate on expenses with teams, family, and business partners
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Group
        </Button>
      </div>

      <Tabs defaultValue="teams" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="teams">Groups & Teams</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="expenses">Shared Expenses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="teams" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            {teams.map((team) => (
              <Card key={team.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>{team.name}</CardTitle>
                    <Badge variant="outline">{team.type}</Badge>
                  </div>
                  <CardDescription>
                    Created on {new Date(team.createdDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{team.members} members</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 flex justify-between pt-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            <Card className="flex flex-col items-center justify-center p-6 h-[167px] border-dashed">
              <Button variant="outline" className="h-auto p-4 rounded-full mb-2">
                <PlusCircle className="h-6 w-6" />
              </Button>
              <p className="text-sm font-medium">Create New Group</p>
              <p className="text-xs text-muted-foreground">Add a team, family or other group</p>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="people" className="mt-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Collaborators</CardTitle>
                <Button size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Invite People
                </Button>
              </div>
              <CardDescription>
                People who share expenses with you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Joined on {new Date(member.joinedDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="mr-2">
                        {member.type}
                      </Badge>
                      <Badge variant={member.role === 'Admin' ? 'default' : 'outline'}>
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expenses" className="mt-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Shared Expenses</CardTitle>
                <Button size="sm">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Expense
                </Button>
              </div>
              <CardDescription>
                Expenses shared among teams and collaborators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="text-xs uppercase bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">Description</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Group</th>
                      <th className="px-4 py-3">Paid By</th>
                      <th className="px-4 py-3 rounded-tr-lg">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sharedExpenses.map((expense) => (
                      <tr key={expense.id} className="border-b hover:bg-muted/20">
                        <td className="px-4 py-3">{expense.description}</td>
                        <td className="px-4 py-3 font-medium">${expense.amount.toFixed(2)}</td>
                        <td className="px-4 py-3">{new Date(expense.date).toLocaleDateString()}</td>
                        <td className="px-4 py-3">{expense.team}</td>
                        <td className="px-4 py-3">{expense.paidBy}</td>
                        <td className="px-4 py-3">
                          <Badge variant={expense.status === 'Settled' ? 'outline' : 'default'}>
                            {expense.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Shared;
