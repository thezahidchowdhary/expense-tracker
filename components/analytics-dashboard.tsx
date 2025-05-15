"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Legend, 
  Line, 
  LineChart, 
  Pie, 
  PieChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts"

const monthlyData = [
  { name: "Dec", income: 4000, expenses: 2400 },
  { name: "Jan", income: 4200, expenses: 2100 },
  { name: "Feb", income: 4500, expenses: 2600 },
  { name: "Mar", income: 4780, expenses: 2800 },
  { name: "Apr", income: 4890, expenses: 2350 },
  { name: "May", income: 4750, expenses: 2350 },
]

const weeklyData = [
  { name: "Mon", expenses: 35 },
  { name: "Tue", expenses: 40 },
  { name: "Wed", expenses: 45 },
  { name: "Thu", expenses: 42 },
  { name: "Fri", expenses: 60 },
  { name: "Sat", expenses: 85 },
  { name: "Sun", expenses: 70 },
]

const categoryData = [
  { name: "Food", value: 520, fill: "#10b981" },
  { name: "Utilities", value: 420, fill: "#3b82f6" },
  { name: "Transportation", value: 380, fill: "#f43f5e" },
  { name: "Entertainment", value: 280, fill: "#f59e0b" },
  { name: "Shopping", value: 250, fill: "#8b5cf6" },
  { name: "Other", value: 500, fill: "#6b7280" },
]

export function AnalyticsDashboard() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="weekly">Weekly Analysis</TabsTrigger>
        <TabsTrigger value="categories">Category Analysis</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
            <CardDescription>Your income and expenses over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${value}`} width={80} />
                <Tooltip formatter={(value) => [`$${value}`, undefined]} />
                <Legend />
                <Bar dataKey="income" name="Income" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Savings Trend</CardTitle>
              <CardDescription>Your savings rate over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value, name) => {
                    if (name === "savingsRate") return [`${value}%`, "Savings Rate"];
                    return [value, name];
                  }} />
                  <Line 
                    type="monotone" 
                    dataKey={(data) => Math.round(((data.income - data.expenses) / data.income) * 100)} 
                    name="savingsRate"
                    stroke="#8884d8" 
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
              <CardDescription>Your expenses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  />
                  <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="weekly" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Spending Pattern</CardTitle>
            <CardDescription>Your daily expenses for the current week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => [`$${value}`, "Expenses"]} />
                <Bar dataKey="expenses" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="categories" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
            <CardDescription>Detailed breakdown of your spending by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {categoryData.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: category.fill }}
                      />
                      <span>{category.name}</span>
                    </div>
                    <span className="font-medium">${category.value}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${(category.value / 2350) * 100}%`,
                        backgroundColor: category.fill 
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((category.value / 2350) * 100)}% of total expenses
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}