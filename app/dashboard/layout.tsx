import type { ReactNode } from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { MobileNav } from "@/components/mobile-nav"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <MobileNav />
          <div className="hidden md:flex md:flex-1">
            <DashboardNav className="mx-6" />
          </div>
          <UserNav />
        </div>
      </header>
      <div className="flex-1 container py-6">{children}</div>
    </div>
  )
}
