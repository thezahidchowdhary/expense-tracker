"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  amount: z.string().refine((val) => !isNaN(Number.parseFloat(val)) && Number.parseFloat(val) > 0, {
    message: "Amount must be a positive number",
  }),
  category: z.string({
    required_error: "Please select a category",
  }),
  description: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters",
    })
    .max(100, {
      message: "Description must not exceed 100 characters",
    }),
  date: z.date({
    required_error: "Please select a date",
  }),
  notes: z.string().optional(),
})

export default function NewExpensePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      category: "",
      description: "",
      date: new Date(),
      notes: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      // Here you would normally call your API to save the expense
      console.log(values)

      toast({
        title: "Expense added",
        description: "Your expense has been successfully added.",
      })
      router.push("/dashboard/expenses")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error adding your expense. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Add New Expense</h1>
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Expense Details</CardTitle>
          <CardDescription>Enter the details of your new expense.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount ($)</FormLabel>
                      <FormControl>
                        <Input placeholder="0.00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Food">Food</SelectItem>
                          <SelectItem value="Entertainment">Entertainment</SelectItem>
                          <SelectItem value="Transportation">Transportation</SelectItem>
                          <SelectItem value="Utilities">Utilities</SelectItem>
                          <SelectItem value="Shopping">Shopping</SelectItem>
                          <SelectItem value="Health">Health</SelectItem>
                          <SelectItem value="Housing">Housing</SelectItem>
                          <SelectItem value="Travel">Travel</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Grocery shopping, dinner, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add any additional details about this expense"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>You can add any additional information about this expense.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => router.push("/dashboard/expenses")}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Expense"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
