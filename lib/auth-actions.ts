"use server"

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  name: string
  email: string
  password: string
}

export async function login(data: LoginData) {
  // In a real app, you would validate credentials and create a session
  // For demo purposes, we'll just simulate a successful login

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return a mock user
  return {
    id: "1",
    name: "John Doe",
    email: data.email,
  }
}

export async function register(data: RegisterData) {
  // In a real app, you would create a new user in your database
  // For demo purposes, we'll just simulate a successful registration

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return a mock user
  return {
    id: "1",
    name: data.name,
    email: data.email,
  }
}

export async function logout() {
  // In a real app, you would destroy the session
  // For demo purposes, we'll just simulate a successful logout

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { success: true }
}
