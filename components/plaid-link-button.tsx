"use client"

import { useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Plus } from "lucide-react"

interface PlaidLinkButtonProps extends ButtonProps {}

export function PlaidLinkButton({ variant = "default", ...props }: PlaidLinkButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleOpenPlaidLink = async () => {
    setIsLoading(true)
    try {
      // Here you would normally call your API to initiate the Plaid Link flow
      // For demo purposes, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Plaid Link",
        description: "This is a demo. In a real app, this would open the Plaid Link interface.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to initialize Plaid Link. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleOpenPlaidLink} disabled={isLoading} variant={variant} {...props}>
      {isLoading ? (
        "Connecting..."
      ) : (
        <>
          <Plus className="mr-2 h-4 w-4" />
          Connect Account
        </>
      )}
    </Button>
  )
}
