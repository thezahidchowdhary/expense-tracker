"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DateRangePicker } from "@/components/date-range-picker"
import { Plus, Search } from "lucide-react"

// Mock data for expenses
const expenses = [
  {
    id: "1",
    date: "2025-05-01",
    description: "Grocery Shopping",
    category: "Food",
    amount: 85.42,
  },
  {
    id: "2",
    date: "2025-05-03",
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: 14.99,
  },
  {
    id: "3",
    date: "2025-05-05",
    description: "Gas Station",
    category: "Transportation",
    amount: 45.0,
  },
  {
    id: "4",
    date: "2025-05-07",
    description: "Electricity Bill",
    category: "Utilities",
    amount: 120.35,
  },
  {
    id: "5",
    date: "2025-05-10",
    description: "Restaurant Dinner",
    category: "Food",
    amount: 65.8,
  },
  {
    id: "6",
    date: "2025-05-12",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: 32.99,
  },
  {
    id: "7",
    date: "2025-05-15",
    description: "Gym Membership",
    category: "Health",
    amount: 50.0,
  },
  {
    id: "8",
    date: "2025-05-18",
    description: "Mobile Phone Bill",
    category: "Utilities",
    amount: 75.0,
  },
  {
    id: "9",
    date: "2025-05-20",
    description: "Coffee Shop",
    category: "Food",
    amount: 5.25,
  },
  {
    id: "10",
    date: "2025-05-25",
    description: "Uber Ride",
    category: "Transportation",
    amount: 18.5,
  },
]

export default function ExpensesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || expense.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
        <Link href="/dashboard/expenses/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Expense Management</CardTitle>
          <CardDescription>View, filter, and manage all your expenses.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search expenses..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Entertainment">Entertainment</SelectItem>
                  <SelectItem value="Transportation">Transportation</SelectItem>
                  <SelectItem value="Utilities">Utilities</SelectItem>
                  <SelectItem value="Shopping">Shopping</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                </SelectContent>
              </Select>
              <DateRangePicker />
            </div>
            <div className="rounded-md border">
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
                  {filteredExpenses.length > 0 ? (
                    filteredExpenses.map((expense) => (
                      <TableRow key={expense.id}>
                        <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                        <TableCell>{expense.description}</TableCell>
                        <TableCell>{expense.category}</TableCell>
                        <TableCell className="text-right">${expense.amount.toFixed(2)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center">
                        No expenses found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
