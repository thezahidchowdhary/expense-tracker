import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, LineChart, PiggyBank, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <PiggyBank className="h-6 w-6" />
            <span>ExpenseTracker</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/register">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Smart Expense Tracking with AI Insights
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect your accounts, track expenses, and get AI-powered financial insights to help you save more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="w-full">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline" className="w-full">
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <LineChart className="h-24 w-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your finances in one place
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                    <PiggyBank className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Account Integration</CardTitle>
                  <CardDescription>Connect all your bank accounts securely with Plaid</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automatically import transactions from all your financial accounts in one place.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expense Analytics</CardTitle>
                  <CardDescription>Visualize your spending with interactive charts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    See where your money goes with detailed charts and reports by category, time period, and more.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Insights</CardTitle>
                  <CardDescription>Get personalized financial advice powered by Claude AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Receive intelligent recommendations to optimize your spending and increase your savings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 ExpenseTracker. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
