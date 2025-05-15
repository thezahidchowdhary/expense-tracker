import { NextResponse } from "next/server"

export async function GET() {
  try {
    // In a real app, you would:
    // 1. Get the user's access token from your database
    // 2. Call the Plaid API to get the accounts
    // 3. Return the accounts to the client

    // For demo purposes, we'll just return mock accounts
    return NextResponse.json({
      accounts: [
        {
          id: "account_1",
          name: "Chase Checking",
          type: "depository",
          subtype: "checking",
          mask: "1234",
          balances: {
            available: 4250.65,
            current: 4250.65,
            limit: null,
          },
          institution_id: "ins_1",
          institution_name: "Chase",
        },
        {
          id: "account_2",
          name: "Chase Savings",
          type: "depository",
          subtype: "savings",
          mask: "5678",
          balances: {
            available: 8750.32,
            current: 8750.32,
            limit: null,
          },
          institution_id: "ins_1",
          institution_name: "Chase",
        },
        {
          id: "account_3",
          name: "Citi Credit Card",
          type: "credit",
          subtype: "credit card",
          mask: "9012",
          balances: {
            available: null,
            current: -1250.45,
            limit: 5000,
          },
          institution_id: "ins_2",
          institution_name: "Citibank",
        },
      ],
    })
  } catch (error) {
    console.error("Error fetching Plaid accounts:", error)
    return NextResponse.json({ error: "Failed to fetch accounts" }, { status: 500 })
  }
}
