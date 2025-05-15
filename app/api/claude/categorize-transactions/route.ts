import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const transactions = body.transactions

    if (!transactions || !Array.isArray(transactions)) {
      return NextResponse.json({ error: "Transactions array is required" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Send the transactions to Claude API for categorization
    // 2. Return the categorized transactions

    // For demo purposes, we'll just return mock categorized transactions
    const categorizedTransactions = transactions.map((transaction) => {
      // Simple mock categorization logic
      let category = "Other"
      const description = transaction.description.toLowerCase()

      if (description.includes("grocery") || description.includes("food") || description.includes("restaurant")) {
        category = "Food"
      } else if (description.includes("gas") || description.includes("uber") || description.includes("lyft")) {
        category = "Transportation"
      } else if (description.includes("netflix") || description.includes("spotify") || description.includes("movie")) {
        category = "Entertainment"
      } else if (
        description.includes("electric") ||
        description.includes("water") ||
        description.includes("internet")
      ) {
        category = "Utilities"
      } else if (description.includes("amazon") || description.includes("walmart") || description.includes("target")) {
        category = "Shopping"
      } else if (description.includes("gym") || description.includes("doctor") || description.includes("pharmacy")) {
        category = "Health"
      }

      return {
        ...transaction,
        category,
        confidence: 0.95, // Mock confidence score
      }
    })

    return NextResponse.json({ transactions: categorizedTransactions })
  } catch (error) {
    console.error("Error categorizing transactions:", error)
    return NextResponse.json({ error: "Failed to categorize transactions" }, { status: 500 })
  }
}
