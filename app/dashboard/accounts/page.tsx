"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaidLinkButton } from "@/components/plaid-link-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCcw, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Mock data for accounts
const accounts = [
  {
    id: "1",
    name: "Chase Checking",
    type: "Checking",
    balance: 4250.65,
    institution: "Chase",
    lastUpdated: "2025-05-12T10:30:00Z",
  },
  {
    id: "2",
    name: "Chase Savings",
    type: "Savings",
    balance: 8750.32,
    institution: "Chase",
    lastUpdated: "2025-05-12T10:30:00Z",
  },
  {
    id: "3",
    name: "Citi Credit Card",
    type: "Credit",
    balance: -1250.45,
    institution: "Citibank",
    lastUpdated: "2025-05-11T14:15:00Z",
  },
  {
    id: "4",
    name: "Vanguard Investment",
    type: "Investment",
    balance: 25680.12,
    institution: "Vanguard",
    lastUpdated: "2025-05-10T09:45:00Z",
  },
]

export default function AccountsPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Accounts</h1>
        <PlaidLinkButton />
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Accounts</TabsTrigger>
          <TabsTrigger value="bank">Bank</TabsTrigger>
          <TabsTrigger value="credit">Credit</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <Card key={account.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{account.name}</CardTitle>
                  <CardDescription>{account.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${Math.abs(account.balance).toFixed(2)}
                    {account.balance < 0 && <span className="text-destructive"> (Debt)</span>}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last updated: {new Date(account.lastUpdated).toLocaleString()}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  {/* Refresh Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={async () => {
                      try {
                        await fetch(`/api/plaid/accounts/${account.id}/refresh`, {
                          method: 'POST',
                        });
                        toast({
                          title: "Account Refreshed",
                          description: `${account.name} has been successfully refreshed.`,
                        });
                      } catch (error) {
                        toast({
                          variant: "destructive",
                          title: "Refresh Failed",
                          description: "There was an error refreshing your account.",
                        });
                      }
                    }}
                  >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Refresh
                  </Button>

                  {/* Remove Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-destructive"
                    onClick={async () => {
                      if (confirm(`Are you sure you want to remove ${account.name}?`)) {
                        try {
                          // In a real app, you would call an API to remove the account
                          toast({
                            title: "Account Removed",
                            description: `${account.name} has been removed from your accounts.`,
                          });
                          // Simulate removal by reloading after a delay
                          setTimeout(() => window.location.reload(), 1000);
                        } catch (error) {
                          toast({
                            variant: "destructive",
                            title: "Removal Failed",
                            description: "There was an error removing your account.",
                          });
                        }
                      }
                    }}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center p-6 h-[200px]">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <p className="mb-4 text-center text-muted-foreground">
                  Connect a new financial account to track your expenses
                </p>
                <PlaidLinkButton variant="outline" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Other Tabs Content */}
        <TabsContent value="bank" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts
              .filter((account) => account.type === "Checking" || account.type === "Savings")
              .map((account) => (
                <Card key={account.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{account.name}</CardTitle>
                    <CardDescription>{account.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${account.balance.toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Last updated: {new Date(account.lastUpdated).toLocaleString()}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm">
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      Refresh
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        {/* Similar Tab Content for Credit and Investment */}
        <TabsContent value="credit" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts
              .filter((account) => account.type === "Credit")
              .map((account) => (
                <Card key={account.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{account.name}</CardTitle>
                    <CardDescription>{account.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-destructive">
                      ${Math.abs(account.balance).toFixed(2)} (Debt)
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Last updated: {new Date(account.lastUpdated).toLocaleString()}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm">
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      Refresh
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="investment" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts
              .filter((account) => account.type === "Investment")
              .map((account) => (
                <Card key={account.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{account.name}</CardTitle>
                    <CardDescription>{account.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${account.balance.toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Last updated: {new Date(account.lastUpdated).toLocaleString()}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm">
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      Refresh
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
