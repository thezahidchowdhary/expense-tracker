import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") || "monthly"
    const category = searchParams.get("category")
    const startDate = searchParams.get("start_date")
    const endDate = searchParams.get("end_date")

    // In a real app, you would:
    // 1. Get the user ID from the authenticated session
    // 2. Query your database for the user's financial data
    // 3. Format the data based on the chart type
    // 4. Return the chart data

    // For demo purposes, we'll just return mock data based on the chart type
    let chartData

    if (type === "monthly") {
      chartData = [
        {
          name: "Dec",
          income: 4000,
          expenses: 2400,
        },
        {
          name: "Jan",
          income: 4200,
          expenses: 2100,
        },
        {
          name: "Feb",
          income: 4500,
          expenses: 2600,
        },
        {
          name: "Mar",
          income: 4780,
          expenses: 2800,
        },
        {
          name: "Apr",
          income: 4890,
          expenses: 2350,
        },
        {
          name: "May",
          income: 4750,
          expenses: 2350,
        },
      ]
    } else if (type === "category") {
      chartData = [
        { name: "Food", value: 520, color: "#10b981" },
        { name: "Utilities", value: 420, color: "#3b82f6" },
        { name: "Transportation", value: 380, color: "#f43f5e" },
        { name: "Entertainment", value: 280, color: "#f59e0b" },
        { name: "Shopping", value: 250, color: "#8b5cf6" },
        { name: "Other", value: 500, color: "#6b7280" },
      ]
    } else if (type === "daily") {
      chartData = [
        { name: "Mon", value: 35 },
        { name: "Tue", value: 40 },
        { name: "Wed", value: 45 },
        { name: "Thu", value: 42 },
        { name: "Fri", value: 60 },
        { name: "Sat", value: 85 },
        { name: "Sun", value: 70 },
      ]
    }

    return NextResponse.json({ data: chartData })
  } catch (error) {
    console.error("Error fetching chart data:", error)
    return NextResponse.json({ error: "Failed to fetch chart data" }, { status: 500 })
  }
}
