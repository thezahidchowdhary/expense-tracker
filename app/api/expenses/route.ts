import { NextResponse } from "next/server"

// Mock database for expenses
const expenses = [
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
  {
    id: "3",
    userId: "user_1",
    date: "2025-05-05",
    description: "Gas Station",
    category: "Transportation",
    amount: 45.0,
    notes: "Filled up the tank",
  },
  {
    id: "4",
    userId: "user_1",
    date: "2025-05-07",
    description: "Electricity Bill",
    category: "Utilities",
    amount: 120.35,
    notes: "Monthly utility bill",
  },
  {
    id: "5",
    userId: "user_1",
    date: "2025-05-10",
    description: "Restaurant Dinner",
    category: "Food",
    amount: 65.8,
    notes: "Dinner with friends",
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const category = searchParams.get("category")
    const startDate = searchParams.get("start_date")
    const endDate = searchParams.get("end_date")

    // In a real app, you would:
    // 1. Get the user ID from the authenticated session
    // 2. Query your database for the user's expenses with filters
    // 3. Return the paginated results

    // For demo purposes, we'll just filter the mock data
    let filteredExpenses = [...expenses]

    if (category) {
      filteredExpenses = filteredExpenses.filter((e) => e.category === category)
    }

    if (startDate) {
      filteredExpenses = filteredExpenses.filter((e) => e.date >= startDate)
    }

    if (endDate) {
      filteredExpenses = filteredExpenses.filter((e) => e.date <= endDate)
    }

    // Paginate results
    const start = (page - 1) * limit
    const end = start + limit
    const paginatedExpenses = filteredExpenses.slice(start, end)

    return NextResponse.json({
      expenses: paginatedExpenses,
      pagination: {
        total: filteredExpenses.length,
        page,
        limit,
        pages: Math.ceil(filteredExpenses.length / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching expenses:", error)
    return NextResponse.json({ error: "Failed to fetch expenses" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { date, description, category, amount, notes } = body

    // Validate input
    if (!date || !description || !category || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Get the user ID from the authenticated session
    // 2. Create the expense in your database
    // 3. Return the created expense

    // For demo purposes, we'll just add to the mock data
    const newExpense = {
      id: "expense_" + Math.random().toString(36).substring(2, 9),
      userId: "user_1",
      date,
      description,
      category,
      amount: Number.parseFloat(amount),
      notes: notes || "",
    }

    expenses.push(newExpense)

    return NextResponse.json(newExpense, { status: 201 })
  } catch (error) {
    console.error("Error creating expense:", error)
    return NextResponse.json({ error: "Failed to create expense" }, { status: 500 })
  }
}
