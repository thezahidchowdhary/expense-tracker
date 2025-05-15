"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { BarChart3, CreditCard, Home, Menu, Package2, PiggyBank, Settings } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Expenses",
      href: "/dashboard/expenses",
      icon: BarChart3,
    },
    {
      name: "Accounts",
      href: "/dashboard/accounts",
      icon: CreditCard,
    },
    {
      name: "Insights",
      href: "/dashboard/insights",
      icon: PiggyBank,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
            <Package2 className="h-6 w-6" />
            <span className="">ExpenseTracker</span>
          </Link>
          <div className="mt-8 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="">ExpenseTracker</span>
      </Link>
    </div>
  )
}
