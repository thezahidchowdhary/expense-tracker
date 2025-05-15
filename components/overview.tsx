"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Dec",
    income: 4000,
    expenses: 2400,
  },
  {
    name: "Jan",
    income: 4200,
    expenses: 2100,
  },
  {
    name: "Feb",
    income: 4500,
    expenses: 2600,
  },
  {
    name: "Mar",
    income: 4780,
    expenses: 2800,
  },
  {
    name: "Apr",
    income: 4890,
    expenses: 2350,
  },
  {
    name: "May",
    income: 4750,
    expenses: 2350,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${value}`} width={80} />
        <Tooltip formatter={(value) => [`$${value}`, undefined]} labelFormatter={(label) => `Month: ${label}`} />
        <Legend />
        <Bar dataKey="income" name="Income" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" name="Expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
