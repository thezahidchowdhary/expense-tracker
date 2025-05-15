"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for recent transactions
const transactions = [
  {
    id: "1",
    description: "Grocery Shopping",
    amount: -85.42,
    date: "2025-05-12",
    category: "Food",
    account: "Chase Checking",
    icon: "🛒",
  },
  {
    id: "2",
    description: "Salary Deposit",
    amount: 2450.0,
    date: "2025-05-10",
    category: "Income",
    account: "Chase Checking",
    icon: "💰",
  },
  {
    id: "3",
    description: "Netflix Subscription",
    amount: -14.99,
    date: "2025-05-09",
    category: "Entertainment",
    account: "Citi Credit Card",
    icon: "📺",
  },
  {
    id: "4",
    description: "Gas Station",
    amount: -45.0,
    date: "2025-05-08",
    category: "Transportation",
    account: "Chase Checking",
    icon: "⛽",
  },
  {
    id: "5",
    description: "Restaurant Dinner",
    amount: -65.8,
    date: "2025-05-07",
    category: "Food",
    account: "Citi Credit Card",
    icon: "🍽️",
  },
]

export function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]"></TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Account</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              <Avatar className="h-9 w-9">
                <AvatarFallback>{transaction.icon}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="font-medium">
              {transaction.description}
              <div className="text-xs text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</div>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{transaction.category}</Badge>
            </TableCell>
            <TableCell>{transaction.account}</TableCell>
            <TableCell className={`text-right ${transaction.amount > 0 ? "text-green-600" : ""}`}>
              {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
