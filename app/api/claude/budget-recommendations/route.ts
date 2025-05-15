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
    // 3. Return the AI-generated recommendations

    // For demo purposes, we'll just return mock recommendations
    return NextResponse.json({
      recommendations: `Based on your income and spending patterns, I recommend the following budget adjustments:

1. Reduce entertainment spending by 5% (potential savings: $35/month)
2. Consider bundling your streaming services (potential savings: $10/month)
3. Review your mobile phone plan for unused data (potential savings: $15/month)
4. Set up automatic transfers to your savings account on payday

Your current savings rate of 50.5% is excellent. To optimize your savings:

1. Increase your emergency fund to cover 6 months of expenses
2. Consider opening a high-yield savings account for better interest rates
3. Set up a dedicated savings account for your vacation goal
4. Review your retirement contributions to maximize employer matching

Additional recommendations:

1. Refinance your credit card debt to a lower interest rate
2. Set up automatic bill payments to avoid late fees
3. Review your subscriptions quarterly and cancel unused services
4. Consider meal planning to reduce food delivery expenses`,
      generated_at: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error generating budget recommendations:", error)
    return NextResponse.json({ error: "Failed to generate budget recommendations" }, { status: 500 })
  }
}
