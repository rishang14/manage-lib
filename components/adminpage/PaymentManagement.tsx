"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  Search,
  Filter,
  Plus,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Calendar,
  DollarSign,
} from "lucide-react"
import type { Payment } from "@/types"

// Mock payment data
const mockPayments: Payment[] = [
  {
    id: "1",
    memberId: "1",
    amount: 2500,
    status: "paid",
    dueDate: "2024-01-15",
    paidDate: "2024-01-10",
    method: "upi",
  },
  {
    id: "2",
    memberId: "2",
    amount: 2500,
    status: "pending",
    dueDate: "2024-01-10",
  },
  {
    id: "3",
    memberId: "3",
    amount: 2200,
    status: "overdue",
    dueDate: "2023-12-25",
  },
  {
    id: "4",
    memberId: "1",
    amount: 2500,
    status: "paid",
    dueDate: "2023-12-15",
    paidDate: "2023-12-12",
    method: "cash",
  },
]

const mockMembers = [
  { id: "1", name: "John Smith", email: "john@example.com", libraryId: "1" },
  { id: "2", name: "Sarah Johnson", email: "sarah@example.com", libraryId: "1" },
  { id: "3", name: "Mike Davis", email: "mike@example.com", libraryId: "2" },
]

const mockLibraries = [
  { id: "1", name: "Central Library" },
  { id: "2", name: "North Branch" },
]

export function PaymentManagement() {
  const [payments, setPayments] = useState<Payment[]>(mockPayments)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterLibrary, setFilterLibrary] = useState<string>("all")
  const [recordingPayment, setRecordingPayment] = useState<Payment | null>(null)
  const [isAddingPayment, setIsAddingPayment] = useState(false)

  // Calculate payment statistics
  const totalRevenue = payments.filter((p) => p.status === "paid").reduce((sum, p) => sum + p.amount, 0)

  const pendingAmount = payments.filter((p) => p.status === "pending").reduce((sum, p) => sum + p.amount, 0)

  const overdueAmount = payments.filter((p) => p.status === "overdue").reduce((sum, p) => sum + p.amount, 0)

  const overdueCount = payments.filter((p) => p.status === "overdue").length
  const pendingCount = payments.filter((p) => p.status === "pending").length

  // Filter payments
  const filteredPayments = payments.filter((payment) => {
    const member = mockMembers.find((m) => m.id === payment.memberId)
    const matchesSearch =
      member?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member?.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.amount.toString().includes(searchTerm)

    const matchesStatus = filterStatus === "all" || payment.status === filterStatus
    const matchesLibrary = filterLibrary === "all" || member?.libraryId === filterLibrary

    return matchesSearch && matchesStatus && matchesLibrary
  })

  const getMemberName = (memberId: string) => {
    return mockMembers.find((m) => m.id === memberId)?.name || "Unknown"
  }

  const getLibraryName = (memberId: string) => {
    const member = mockMembers.find((m) => m.id === memberId)
    return mockLibraries.find((l) => l.id === member?.libraryId)?.name || "Unknown"
  }

  const handleRecordPayment = (payment: Payment) => {
    setRecordingPayment({
      ...payment,
      paidDate: new Date().toISOString().split("T")[0],
      method: "cash",
    })
  }

  const handleSavePayment = () => {
    if (recordingPayment) {
      setPayments((prev) =>
        prev.map((p) => (p.id === recordingPayment.id ? { ...recordingPayment, status: "paid" as const } : p)),
      )
      setRecordingPayment(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "overdue":
        return <AlertCircle className="w-4 h-4 text-red-600" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payments">All Payments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Payment Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹{totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <Clock className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">₹{pendingAmount.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">{pendingCount} payments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overdue Amount</CardTitle>
                <AlertCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">₹{overdueAmount.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">{overdueCount} overdue</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round((totalRevenue / (totalRevenue + pendingAmount + overdueAmount)) * 100)}%
                </div>
                <p className="text-xs text-muted-foreground">Payment success rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Overdue Payments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                Urgent: Overdue Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {payments
                  .filter((p) => p.status === "overdue")
                  .slice(0, 5)
                  .map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between p-3 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20"
                    >
                      <div>
                        <div className="font-medium">{getMemberName(payment.memberId)}</div>
                        <div className="text-sm text-muted-foreground">
                          {getLibraryName(payment.memberId)} • Due: {new Date(payment.dueDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600">₹{payment.amount}</div>
                        <Button size="sm" onClick={() => handleRecordPayment(payment)} className="mt-1">
                          Record Payment
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Management
                </div>
                <Button onClick={() => setIsAddingPayment(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Record Payment
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search payments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterLibrary} onValueChange={setFilterLibrary}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by library" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Libraries</SelectItem>
                    {mockLibraries.map((library) => (
                      <SelectItem key={library.id} value={library.id}>
                        {library.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{filteredPayments.length} payments</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payments List */}
          <div className="space-y-4">
            {filteredPayments.map((payment) => (
              <Card key={payment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(payment.status)}
                        <h3 className="font-semibold">{getMemberName(payment.memberId)}</h3>
                        <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Due: {new Date(payment.dueDate).toLocaleDateString()}
                        </div>
                        <div>Library: {getLibraryName(payment.memberId)}</div>
                        {payment.paidDate && <div>Paid: {new Date(payment.paidDate).toLocaleDateString()}</div>}
                      </div>

                      {payment.method && (
                        <div className="text-sm text-gray-500">Payment method: {payment.method.toUpperCase()}</div>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold">₹{payment.amount}</div>
                        {payment.status === "overdue" && (
                          <div className="text-sm text-red-600">
                            {Math.ceil((Date.now() - new Date(payment.dueDate).getTime()) / (1000 * 60 * 60 * 24))} days
                            overdue
                          </div>
                        )}
                      </div>

                      {payment.status !== "paid" && (
                        <Button
                          onClick={() => handleRecordPayment(payment)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Record Payment
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-500">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-medium">Analytics Coming Soon</h3>
                <p>Detailed payment analytics and reports will be available here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Record Payment Dialog */}
      <Dialog open={!!recordingPayment} onOpenChange={() => setRecordingPayment(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Record Payment</DialogTitle>
          </DialogHeader>
          {recordingPayment && (
            <div className="space-y-4">
              <div>
                <Label>Member</Label>
                <div className="p-2 bg-gray-50 rounded border">{getMemberName(recordingPayment.memberId)}</div>
              </div>

              <div>
                <Label>Amount</Label>
                <div className="p-2 bg-gray-50 rounded border font-bold">₹{recordingPayment.amount}</div>
              </div>

              <div>
                <Label htmlFor="paid-date">Payment Date</Label>
                <Input
                  id="paid-date"
                  type="date"
                  value={recordingPayment.paidDate}
                  onChange={(e) =>
                    setRecordingPayment({
                      ...recordingPayment,
                      paidDate: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label htmlFor="method">Payment Method</Label>
                <Select
                  value={recordingPayment.method}
                  onValueChange={(value: "cash" | "card" | "upi" | "bank_transfer") =>
                    setRecordingPayment({ ...recordingPayment, method: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setRecordingPayment(null)}>
              Cancel
            </Button>
            <Button onClick={handleSavePayment} className="bg-green-600 hover:bg-green-700">
              Record Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
