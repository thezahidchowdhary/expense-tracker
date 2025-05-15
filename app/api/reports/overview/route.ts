import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("start_date") || "2025-01-01"
    const endDate = searchParams.get("end_date") || "2025-05-13"

    // In a real app, you would:
    // 1. Get the user ID from the authenticated session
    // 2. Query your database for the user's financial data
    // 3. Calculate the overview metrics
    // 4. Return the overview data

    // For demo purposes, we'll just return mock data
    return NextResponse.json({
      income: {
        total: 14750,
        average: 4916.67,
        change: 1.2,
      },
      expenses: {
        total: 7350,
        average: 2450,
        change: -4.1,
      },
      balance: {
        current: 12546,
        change: 2.5,
      },
      savings: {
        rate: 50.5,
        change: 5.2,
      },
      monthly_data: [
        {
          month: "Dec",
          income: 4000,
          expenses: 2400,
        },
        {
          month: "Jan",
          income: 4200,
          expenses: 2100,
        },
        {
          month: "Feb",
          income: 4500,
          expenses: 2600,
        },
        {
          month: "Mar",
          income: 4780,
          expenses: 2800,
        },
        {
          month: "Apr",
          income: 4890,
          expenses: 2350,
        },
        {
          month: "May",
          income: 4750,
          expenses: 2350,
        },
      ],
    })
  } catch (error) {
    console.error("Error fetching overview report:", error)
    return NextResponse.json({ error: "Failed to fetch overview report" }, { status: 500 })
  }
}
