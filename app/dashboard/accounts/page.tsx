"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaidLinkButton } from "@/components/plaid-link-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCcw, Trash2 } from "lucide-react"

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
