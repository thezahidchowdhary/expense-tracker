import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("start_date") || "2025-05-01"
    const endDate = searchParams.get("end_date") || "2025-05-13"

    // In a real app, you would:
    // 1. Get the user ID from the authenticated session
    // 2. Query your database for the user's expenses
    // 3. Group and sum expenses by category
    // 4. Return the category breakdown

    // For demo purposes, we'll just return mock data
    return NextResponse.json({
      total: 2350,
      categories: [
        { name: "Food", value: 520, color: "#10b981" },
        { name: "Utilities", value: 420, color: "#3b82f6" },
        { name: "Transportation", value: 380, color: "#f43f5e" },
        { name: "Entertainment", value: 280, color: "#f59e0b" },
        { name: "Shopping", value: 250, color: "#8b5cf6" },
        { name: "Other", value: 500, color: "#6b7280" },
      ],
      previous_period: {
        total: 2450,
        change: -4.1,
      },
    })
  } catch (error) {
    console.error("Error fetching category report:", error)
    return NextResponse.json({ error: "Failed to fetch category report" }, { status: 500 })
  }
}
