
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Family = () => {
  // Sample family members data
  const familyMembers = [
    { id: 1, name: 'John Doe', role: 'Admin', joinedDate: '2023-01-15', avatar: '' },
    { id: 2, name: 'Jane Doe', role: 'Member', joinedDate: '2023-01-20', avatar: '' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Family</h1>
        <p className="text-muted-foreground">
          Manage your family members and shared expenses.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Family Members</CardTitle>
          <CardDescription>
            People who share expenses with you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {familyMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 rounded-lg border">
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
                <Badge variant={member.role === 'Admin' ? 'default' : 'outline'}>
                  {member.role}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shared Expenses</CardTitle>
          <CardDescription>
            Overview of expenses shared among family members
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-60 flex items-center justify-center bg-muted/20 rounded-md">
            <p className="text-muted-foreground">Shared expenses feature will be available soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Family;
