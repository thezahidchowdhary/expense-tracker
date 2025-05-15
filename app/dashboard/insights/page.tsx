"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Brain, Lightbulb, RefreshCw, TrendingUp } from "lucide-react"
import { AIInsights } from "@/components/ai-insights" // Import AIInsights component

export default function InsightsPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateInsights = () => {
    setIsLoading(true)
    // Simulate API call to Claude
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
        <Button onClick={handleGenerateInsights} disabled={isLoading}>
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Brain className="mr-2 h-4 w-4" />
              Generate New Insights
            </>
          )}
        </Button>
      </div>
      <p className="text-muted-foreground">
        Powered by Claude AI, these insights analyze your spending patterns and provide personalized recommendations.
      </p>
      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="space-y-4">
          {/* AI Generated Insights Content */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Monthly Financial Summary</CardTitle>
                  <CardDescription>Generated on May 13, 2025</CardDescription>
                </div>
                <Badge variant="outline" className="ml-auto">
                  AI Generated
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Overview</h3>
                <p>
                  Based on your transaction history, you've spent $2,350 this month, which is 4.1% less than last month.
                  Your top spending categories are Food ($520), Utilities ($420), and Transportation ($380).
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-semibold">Key Insights</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Your savings rate is 50.5%, which is excellent and above the recommended 20%.</li>
                  <li>Your restaurant spending has decreased by 15% compared to last month.</li>
                  <li>Your utility bills are 8% higher than the same period last year.</li>
                  <li>You have 3 subscription services totaling $45.97 per month.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                View Detailed Report
              </Button>
            </CardFooter>
          </Card>

          {/* Spending Anomalies and Savings Opportunities */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                  Spending Anomalies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Badge variant="destructive" className="mt-0.5">
                      High
                    </Badge>
                    <div>
                      <p className="font-medium">Unusual transaction at Amazon ($199.99)</p>
                      <p className="text-sm text-muted-foreground">This is 4x your typical Amazon purchase amount</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-0.5">
                      Medium
                    </Badge>
                    <div>
                      <p className="font-medium">Multiple coffee shop purchases</p>
                      <p className="text-sm text-muted-foreground">8 transactions totaling $42.35 this week</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5 bg-amber-500">Low</Badge>
                    <div>
                      <p className="font-medium">New subscription detected</p>
                      <p className="text-sm text-muted-foreground">Spotify Premium ($9.99/month) started on May 5</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  Savings Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5 bg-emerald-500">$45</Badge>
                    <div>
                      <p className="font-medium">Unused subscription services</p>
                      <p className="text-sm text-muted-foreground">You haven't used Netflix in 45 days</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5 bg-emerald-500">$120</Badge>
                    <div>
                      <p className="font-medium">High utility bills</p>
                      <p className="text-sm text-muted-foreground">Your electricity usage is 20% above average</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5 bg-emerald-500">$85</Badge>
                    <div>
                      <p className="font-medium">Dining out expenses</p>
                      <p className="text-sm text-muted-foreground">
                        Reducing restaurant visits by 1 per week could save this amount
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="spending" className="space-y-4">
          {/* Spending Pattern Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Spending Pattern Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add your spending analysis content here */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          {/* Recommendations Section */}
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add your recommendations content here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
