import { NextResponse } from "next/server"

// This would be your database in a real app
let expenses = [
  {
    id: "1",
    userId: "user_1",
    date: "2025-05-01",
    description: "Grocery Shopping",
    category: "Food",
    amount: 85.42,
    notes: "Weekly grocery run",
  },
  {
    id: "2",
    userId: "user_1",
    date: "2025-05-03",
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: 14.99,
    notes: "Monthly subscription",
  },
  // ... other expenses
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // In a real app, you would:
    // 1. Get the user ID from the authenticated session
    // 2. Query your database for the expense with the given ID
    // 3. Check if the expense belongs to the user
    // 4. Return the expense or a 404 if not found

    // For demo purposes, we'll just find in the mock data
    const expense = expenses.find((e) => e.id === id)

    if (!expense) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 })
    }

    return NextResponse.json(expense)
  } catch (error) {
    console.error("Error fetching expense:", error)
    return NextResponse.json({ error: "Failed to fetch expense" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const body = await request.json()
    const { date, description, category, amount, notes } = body

    // Validate input
    if (!date || !description || !category || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Get the user ID from the authenticated session
    // 2. Find the expense in your database
    // 3. Check if the expense belongs to the user
    // 4. Update the expense
    // 5. Return the updated expense

    // For demo purposes, we'll just update the mock data
    const expenseIndex = expenses.findIndex((e) => e.id === id)

    if (expenseIndex === -1) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 })
    }

    const updatedExpense = {
      ...expenses[expenseIndex],
      date,
      description,
      category,
      amount: Number.parseFloat(amount),
      notes: notes || "",
    }

    expenses[expenseIndex] = updatedExpense

    return NextResponse.json(updatedExpense)
  } catch (error) {
    console.error("Error updating expense:", error)
    return NextResponse.json({ error: "Failed to update expense" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // In a real app, you would:
    // 1. Get the user ID from the authenticated session
    // 2. Find the expense in your database
    // 3. Check if the expense belongs to the user
    // 4. Delete the expense
    // 5. Return a success message

    // For demo purposes, we'll just update the mock data
    const expenseIndex = expenses.findIndex((e) => e.id === id)

    if (expenseIndex === -1) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 })
    }

    expenses = expenses.filter((e) => e.id !== id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting expense:", error)
    return NextResponse.json({ error: "Failed to delete expense" }, { status: 500 })
  }
}
