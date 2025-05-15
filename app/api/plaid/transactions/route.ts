import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("start_date") || "2025-04-01"
    const endDate = searchParams.get("end_date") || "2025-05-13"
    const accountId = searchParams.get("account_id")

    // In a real app, you would:
    // 1. Get the user's access token from your database
    // 2. Call the Plaid API to get the transactions
    // 3. Filter by account if accountId is provided
    // 4. Return the transactions to the client

    // For demo purposes, we'll just return mock transactions
    let transactions = [
      {
        id: "transaction_1",
        account_id: "account_1",
        amount: 85.42,
        date: "2025-05-12",
        name: "Grocery Shopping",
        category: ["Food and Drink", "Groceries"],
        pending: false,
      },
      {
        id: "transaction_2",
        account_id: "account_1",
        amount: -2450.0,
        date: "2025-05-10",
        name: "Salary Deposit",
        category: ["Transfer", "Deposit"],
        pending: false,
      },
      {
        id: "transaction_3",
        account_id: "account_3",
        amount: 14.99,
        date: "2025-05-09",
        name: "Netflix Subscription",
        category: ["Recreation", "Subscription"],
        pending: false,
      },
      {
        id: "transaction_4",
        account_id: "account_1",
        amount: 45.0,
        date: "2025-05-08",
        name: "Gas Station",
        category: ["Travel", "Gas"],
        pending: false,
      },
      {
        id: "transaction_5",
        account_id: "account_3",
        amount: 65.8,
        date: "2025-05-07",
        name: "Restaurant Dinner",
        category: ["Food and Drink", "Restaurants"],
        pending: false,
      },
    ]

    // Filter by account if accountId is provided
    if (accountId) {
      transactions = transactions.filter((t) => t.account_id === accountId)
    }

    return NextResponse.json({ transactions })
  } catch (error) {
    console.error("Error fetching Plaid transactions:", error)
    return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 })
  }
}
