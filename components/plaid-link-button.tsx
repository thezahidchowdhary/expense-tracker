// File: components/plaid-link-button.tsx
"use client"

import { useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Plus } from 'lucide-react'

interface PlaidLinkButtonProps extends ButtonProps {}

export function PlaidLinkButton({ variant = "default", ...props }: PlaidLinkButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleOpenPlaidLink = async () => {
    setIsLoading(true)
    try {
      // Call your API to get a link token
      const response = await fetch('/api/plaid/link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      const data = await response.json();
      
      if (!data.link_token) {
        throw new Error('Failed to get link token');
      }
      
      // In a real implementation, you would use the Plaid Link SDK here
      // For demo purposes, we'll simulate the flow
      console.log('Link token:', data.link_token);
      
      // Simulate successful account connection
      setTimeout(() => {
        toast({
          title: "Account Connected",
          description: "Your bank account has been successfully connected.",
        });
        setIsLoading(false);
        
        // Reload the page to show the new account
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      console.error('Error connecting account:', error);
      toast({
        variant: "destructive",
        title: "Connection Failed",
        description: "There was an error connecting your account. Please try again.",
      });
      setIsLoading(false);
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