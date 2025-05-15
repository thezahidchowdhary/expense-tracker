import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Create the user in your database
    // 4. Return the user without the password

    // For demo purposes, we'll just return a mock user
    return NextResponse.json(
      {
        id: "user_" + Math.random().toString(36).substring(2, 9),
        name,
        email,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error in register route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
