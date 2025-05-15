import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // In a real app, you would:
    // 1. Create a link token using the Plaid API
    // 2. Return the link token to the client

    // For demo purposes, we'll just return a mock link token
    return NextResponse.json({
      link_token: "link-sandbox-" + Math.random().toString(36).substring(2, 15),
      expiration: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
    })
  } catch (error) {
    console.error("Error creating Plaid link token:", error)
    return NextResponse.json({ error: "Failed to create link token" }, { status: 500 })
  }
}
