"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Food", value: 520, color: "#10b981" },
  { name: "Utilities", value: 420, color: "#3b82f6" },
  { name: "Transportation", value: 380, color: "#f43f5e" },
  { name: "Entertainment", value: 280, color: "#f59e0b" },
  { name: "Shopping", value: 250, color: "#8b5cf6" },
  { name: "Other", value: 500, color: "#6b7280" },
]

export function ExpenseByCategoryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
