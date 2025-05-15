import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Overview } from "@/components/overview"
import { RecentTransactions } from "@/components/recent-transactions"
import { ExpenseByCategoryChart } from "@/components/expense-by-category-chart"
import { PlaidLinkButton } from "@/components/plaid-link-button"
import { ArrowUpRight, Plus } from "lucide-react"
import Link from "next/link"
import { AnalyticsDashboard } from "@/components/analytics-dashboard" // Import AnalyticsDashboard component
import { AIInsights } from "@/components/ai-insights" // Import AIInsights component

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <PlaidLinkButton />
          <Link href="/dashboard/expenses/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Expense
            </Button>
          </Link>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Overview Content */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Cards for Total Balance, Monthly Expenses, Monthly Income, Savings Rate */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,546.00</div>
                <p className="text-xs text-muted-foreground">+2.5% from last month</p>
              </CardContent>
            </Card>
            {/* Additional cards for Monthly Expenses, Monthly Income, Savings Rate */}
          </div>

          {/* Other Overview Content */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>Your monthly income and expenses for the past 6 months.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Expenses by Category</CardTitle>
                <CardDescription>Your expense breakdown by category for this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseByCategoryChart />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your most recent transactions across all accounts.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentTransactions />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          {/* Replace with the AnalyticsDashboard Component */}
          <AnalyticsDashboard />
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          {/* Replace with the AIInsights Component */}
          <AIInsights />
        </TabsContent>
      </Tabs>
    </div>
  )
}
