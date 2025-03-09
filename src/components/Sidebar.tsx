
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3,
  CalendarClock,
  CreditCard,
  Home,
  PieChart,
  Settings,
  Users
} from 'lucide-react';
import { 
  Sidebar as SidebarComponent, 
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const links = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Expenses', href: '/expenses', icon: CreditCard },
    { name: 'Recurring', href: '/recurring', icon: CalendarClock },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
    { name: 'Categories', href: '/categories', icon: PieChart },
    { name: 'Family', href: '/family', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <SidebarComponent>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M12 6V18M6 12H18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-lg">Spendwise</div>
            <div className="text-xs text-muted-foreground">Expense Tracker</div>
          </div>
        </div>
        <SidebarTrigger 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute right-2 top-2" 
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton asChild>
                <Link 
                  to={link.href}
                  className={cn(
                    "flex items-center gap-2",
                    location.pathname === link.href ? "font-medium" : ""
                  )}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <div className="rounded-lg bg-accent p-4">
            <h4 className="font-medium">Need Help?</h4>
            <p className="text-sm text-muted-foreground">
              Check our documentation for tips and guides.
            </p>
          </div>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
