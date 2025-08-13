"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Search, Edit, Trash2, Plus, Filter, UserPlus, MapPin, Clock, CreditCard } from "lucide-react"
import type { Member, Library } from "@/types"

// Mock data - replace with real data from your backend
const mockMembers: Member[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+91 9876543210",
    libraryId: "1",
    shiftId: "1",
    seatNumber: 15,
    paymentStatus: "paid",
    paymentAmount: 2500,
    paymentDueDate: "2024-01-15",
    joinedAt: "2023-12-01",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+91 9876543211",
    libraryId: "1",
    shiftId: "2",
    seatNumber: 22,
    paymentStatus: "pending",
    paymentAmount: 2500,
    paymentDueDate: "2024-01-10",
    joinedAt: "2023-11-15",
  },
  {
    id: "3",
    name: "Mike Davis",
    email: "mike@example.com",
    phone: "+91 9876543212",
    libraryId: "2",
    shiftId: "1",
    seatNumber: 8,
    paymentStatus: "overdue",
    paymentAmount: 2200,
    paymentDueDate: "2023-12-25",
    joinedAt: "2023-10-20",
  },
]

const mockLibraries: Library[] = [
  {
    id: "1",
    name: "Central Library",
    totalSeats: 60,
    occupiedSeats: 52,
    shifts: [
      { id: "1", name: "Morning Shift", startTime: "08:00", endTime: "12:00" },
      { id: "2", name: "Evening Shift", startTime: "13:00", endTime: "17:00" },
    ],
    createdAt: "2023-01-01",
  },
  {
    id: "2",
    name: "North Branch",
    totalSeats: 45,
    occupiedSeats: 38,
    shifts: [
      { id: "1", name: "Morning Shift", startTime: "09:00", endTime: "13:00" },
      { id: "2", name: "Evening Shift", startTime: "14:00", endTime: "18:00" },
    ],
    createdAt: "2023-02-01",
  },
]

export function MemberManagement() {
  const [members, setMembers] = useState<Member[]>(mockMembers)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterLibrary, setFilterLibrary] = useState<string>("all")
  const [filterPaymentStatus, setFilterPaymentStatus] = useState<string>("all")
  const [editingMember, setEditingMember] = useState<Member | null>(null)
  const [deletingMember, setDeletingMember] = useState<Member | null>(null)
  const [isAddingMember, setIsAddingMember] = useState(false)

  // Filter members based on search and filters
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.seatNumber.toString().includes(searchTerm) ||
      member.phone.includes(searchTerm)

    const matchesLibrary = filterLibrary === "all" || member.libraryId === filterLibrary
    const matchesPayment = filterPaymentStatus === "all" || member.paymentStatus === filterPaymentStatus

    return matchesSearch && matchesLibrary && matchesPayment
  })

  const getLibraryName = (libraryId: string) => {
    return mockLibraries.find((lib) => lib.id === libraryId)?.name || "Unknown"
  }

  const getShiftName = (libraryId: string, shiftId: string) => {
    const library = mockLibraries.find((lib) => lib.id === libraryId)
    return library?.shifts.find((shift) => shift.id === shiftId)?.name || "Unknown"
  }

  const handleEditMember = (member: Member) => {
    setEditingMember({ ...member })
  }

  const handleSaveEdit = () => {
    if (editingMember) {
      setMembers((prev) => prev.map((m) => (m.id === editingMember.id ? editingMember : m)))
      setEditingMember(null)
    }
  }

  const handleDeleteMember = (member: Member) => {
    setMembers((prev) => prev.filter((m) => m.id !== member.id))
    setDeletingMember(null)
  }

  const getPaymentStatusColor = (status: string) => {
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

  return (
    <div className="space-y-6">
      {/* Header and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserPlus className="w-5 h-5" />
              Member Management
            </div>
            <Button onClick={() => setIsAddingMember(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name, email, seat, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

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

            <Select value={filterPaymentStatus} onValueChange={setFilterPaymentStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by payment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {filteredMembers.length} of {members.length} members
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Members List */}
      <div className="grid gap-4">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <Badge className={getPaymentStatusColor(member.paymentStatus)}>{member.paymentStatus}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {getLibraryName(member.libraryId)} - Seat {member.seatNumber}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {getShiftName(member.libraryId, member.shiftId)}
                    </div>
                    <div className="flex items-center gap-1">
                      <CreditCard className="w-3 h-3" />₹{member.paymentAmount}
                    </div>
                    <div>Due: {new Date(member.paymentDueDate).toLocaleDateString()}</div>
                  </div>

                  <div className="text-sm text-gray-500">
                    {member.email} • {member.phone}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEditMember(member)}>
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDeletingMember(member)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredMembers.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-2">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No members found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Edit Member Dialog */}
      <Dialog open={!!editingMember} onOpenChange={() => setEditingMember(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Member</DialogTitle>
          </DialogHeader>
          {editingMember && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="library">Library</Label>
                <Select
                  value={editingMember.libraryId}
                  onValueChange={(value) => setEditingMember({ ...editingMember, libraryId: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockLibraries.map((library) => (
                      <SelectItem key={library.id} value={library.id}>
                        {library.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="shift">Shift</Label>
                <Select
                  value={editingMember.shiftId}
                  onValueChange={(value) => setEditingMember({ ...editingMember, shiftId: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockLibraries
                      .find((lib) => lib.id === editingMember.libraryId)
                      ?.shifts.map((shift) => (
                        <SelectItem key={shift.id} value={shift.id}>
                          {shift.name} ({shift.startTime} - {shift.endTime})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="seat">Seat Number</Label>
                <Input
                  id="seat"
                  type="number"
                  value={editingMember.seatNumber}
                  onChange={(e) => setEditingMember({ ...editingMember, seatNumber: Number.parseInt(e.target.value) })}
                />
              </div>

              <div>
                <Label htmlFor="payment-status">Payment Status</Label>
                <Select
                  value={editingMember.paymentStatus}
                  onValueChange={(value: "paid" | "pending" | "overdue") =>
                    setEditingMember({ ...editingMember, paymentStatus: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingMember(null)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletingMember} onOpenChange={() => setDeletingMember(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Member</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {deletingMember?.name}? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingMember && handleDeleteMember(deletingMember)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
