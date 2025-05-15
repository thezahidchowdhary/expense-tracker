import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Get the user's financial data
    // 2. Send it to Claude API for analysis
    // 3. Return the AI-generated summary

    // For demo purposes, we'll just return a mock summary
    return NextResponse.json({
      summary: `Based on your transaction history, you've spent $2,350 this month, which is 4.1% less than last month. Your top spending categories are Food ($520), Utilities ($420), and Transportation ($380).

Your savings rate is 50.5%, which is excellent and above the recommended 20%. Your restaurant spending has decreased by 15% compared to last month, which aligns with your goal to reduce dining out expenses.

I've noticed your utility bills are 8% higher than the same period last year. This might be due to increased energy usage or rate changes. You might want to review your utility providers or consider energy-saving measures.

You currently have 3 subscription services totaling $45.97 per month. The Netflix subscription hasn't been used in 45 days, so you might want to consider canceling it to save $14.99 monthly.`,
      generated_at: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error generating expense summary:", error)
    return NextResponse.json({ error: "Failed to generate expense summary" }, { status: 500 })
  }
}
