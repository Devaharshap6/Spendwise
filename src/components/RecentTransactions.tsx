
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Sample data for recent transactions
const transactions = [
  {
    id: "1",
    date: "2023-06-10",
    description: "Grocery Store",
    amount: 89.99,
    category: "Food"
  },
  {
    id: "2",
    date: "2023-06-08",
    description: "Rent Payment",
    amount: 1200.00,
    category: "Rent"
  },
  {
    id: "3",
    date: "2023-06-07",
    description: "Internet Bill",
    amount: 79.99,
    category: "Utilities"
  },
  {
    id: "4",
    date: "2023-06-05",
    description: "Gasoline",
    amount: 45.75,
    category: "Transportation"
  },
  {
    id: "5",
    date: "2023-06-03",
    description: "Movie Tickets",
    amount: 24.00,
    category: "Entertainment"
  }
];

export function RecentTransactions() {
  // Map category to appropriate styling
  const getCategoryClass = (category: string) => {
    const categories: Record<string, string> = {
      "Food": "category-pill-food",
      "Rent": "category-pill-rent",
      "Utilities": "category-pill-utilities",
      "Transportation": "category-pill-transportation",
      "Entertainment": "category-pill-entertainment"
    };
    
    return categories[category] || "category-pill-other";
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">
              {formatDate(transaction.date)}
            </TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>
              <Badge variant="outline" className={cn("category-pill", getCategoryClass(transaction.category))}>
                {transaction.category}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              ${transaction.amount.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
