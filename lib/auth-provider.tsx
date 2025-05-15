"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // In a real app, you would fetch the user from your API
        // For demo purposes, we'll simulate a logged in user
        const mockUser = {
          id: "1",
          name: "John Doe",
          email: "john.doe@example.com",
        }

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        setUser(mockUser)
      } catch (error) {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Protect routes
  useEffect(() => {
    if (!isLoading) {
      const isAuthRoute = pathname === "/login" || pathname === "/register" || pathname === "/"

      if (!user && pathname.startsWith("/dashboard")) {
        router.push("/login")
      } else if (user && isAuthRoute) {
        router.push("/dashboard")
      }
    }
  }, [user, isLoading, pathname, router])

  return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
