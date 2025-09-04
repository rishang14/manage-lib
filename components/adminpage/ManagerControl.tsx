"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserCheck, Plus, Edit, Trash2, Search, Shield, Building2, Activity } from "lucide-react"
import { Manager } from "@/common/types"

// Mock manager data
const mockManagers: Manager[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    libraryIds: ["1", "2"],
    permissions: ["view_members", "edit_members", "manage_payments", "view_reports"],
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+91 9876543211",
    libraryIds: ["1"],
    permissions: ["view_members", "edit_members"],
    createdAt: "2023-02-20",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    phone: "+91 9876543212",
    libraryIds: ["3"],
    permissions: ["view_members", "edit_members", "manage_payments"],
    createdAt: "2023-03-10",
  },
]

const mockLibraries = [
  { id: "1", name: "Central Library" },
  { id: "2", name: "North Branch" },
  { id: "3", name: "South Branch" },
]

const availablePermissions = [
  { id: "view_members", label: "View Members", description: "Can view member information" },
  { id: "edit_members", label: "Edit Members", description: "Can add, edit, and remove members" },
  { id: "manage_payments", label: "Manage Payments", description: "Can record and update payments" },
  { id: "view_reports", label: "View Reports", description: "Can access analytics and reports" },
  { id: "manage_seats", label: "Manage Seats", description: "Can assign and change seat arrangements" },
  { id: "send_notifications", label: "Send Notifications", description: "Can send notifications to members" },
]

// Mock activity logs
const mockActivityLogs = [
  {
    id: "1",
    managerId: "1",
    action: "Added new member",
    details: "Added Sarah Wilson to Central Library",
    timestamp: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    managerId: "2",
    action: "Updated payment",
    details: "Marked payment as received for John Smith",
    timestamp: "2024-01-15T09:15:00Z",
  },
  {
    id: "3",
    managerId: "1",
    action: "Changed seat assignment",
    details: "Moved Mike Davis from seat 15 to seat 22",
    timestamp: "2024-01-14T16:45:00Z",
  },
]

export function ManagerControls() {
  const [managers, setManagers] = useState<Manager[]>(mockManagers)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingManager, setEditingManager] = useState<Manager | null>(null)
  const [deletingManager, setDeletingManager] = useState<Manager | null>(null)
  const [isAddingManager, setIsAddingManager] = useState(false)
  const [viewingActivity, setViewingActivity] = useState<string | null>(null)

  // New manager form state
  const [newManager, setNewManager] = useState({
    name: "",
    email: "",
    phone: "",
    libraryIds: [] as string[],
    permissions: [] as string[],
  })

  const filteredManagers = managers.filter(
    (manager) =>
      manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manager.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getLibraryNames = (libraryIds: string[]) => {
    return libraryIds.map((id) => mockLibraries.find((lib) => lib.id === id)?.name || "Unknown").join(", ")
  }

  const getPermissionLabel = (permissionId: string) => {
    return availablePermissions.find((p) => p.id === permissionId)?.label || permissionId
  }

  const handleAddManager = () => {
    const manager: Manager = {
      id: crypto.randomUUID(),
      ...newManager,
      createdAt: new Date().toISOString(),
    }
    setManagers((prev) => [...prev, manager])
    setNewManager({
      name: "",
      email: "",
      phone: "",
      libraryIds: [],
      permissions: [],
    })
    setIsAddingManager(false)
  }

  const handleEditManager = (manager: Manager) => {
    setEditingManager({ ...manager })
  }

  const handleSaveEdit = () => {
    if (editingManager) {
      setManagers((prev) => prev.map((m) => (m.id === editingManager.id ? editingManager : m)))
      setEditingManager(null)
    }
  }

  const handleDeleteManager = (manager: Manager) => {
    setManagers((prev) => prev.filter((m) => m.id !== manager.id))
    setDeletingManager(null)
  }

  const handleLibraryToggle = (libraryId: string, isChecked: boolean, target: "new" | "edit") => {
    if (target === "new") {
      setNewManager((prev) => ({
        ...prev,
        libraryIds: isChecked ? [...prev.libraryIds, libraryId] : prev.libraryIds.filter((id) => id !== libraryId),
      }))
    } else if (editingManager) {
      setEditingManager((prev) =>
        prev
          ? {
              ...prev,
              libraryIds: isChecked
                ? [...prev.libraryIds, libraryId]
                : prev.libraryIds.filter((id) => id !== libraryId),
            }
          : null,
      )
    }
  }

  const handlePermissionToggle = (permissionId: string, isChecked: boolean, target: "new" | "edit") => {
    if (target === "new") {
      setNewManager((prev) => ({
        ...prev,
        permissions: isChecked
          ? [...prev.permissions, permissionId]
          : prev.permissions.filter((id) => id !== permissionId),
      }))
    } else if (editingManager) {
      setEditingManager((prev) =>
        prev
          ? {
              ...prev,
              permissions: isChecked
                ? [...prev.permissions, permissionId]
                : prev.permissions.filter((id) => id !== permissionId),
            }
          : null,
      )
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="managers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="managers">Manager List</TabsTrigger>
          <TabsTrigger value="activity">Activity Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="managers" className="space-y-6">
          {/* Header and Search */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  Manager Controls
                </div>
                <Button onClick={() => setIsAddingManager(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Manager
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search managers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  {filteredManagers.length} of {managers.length} managers
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Managers List */}
          <div className="space-y-4">
            {filteredManagers.map((manager) => (
              <Card key={manager.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <UserCheck className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{manager.name}</h3>
                          <p className="text-sm text-gray-600">{manager.email}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-xs text-gray-500">Assigned Libraries</Label>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {manager.libraryIds.map((libraryId) => (
                              <Badge key={libraryId} variant="outline" className="text-xs">
                                <Building2 className="w-3 h-3 mr-1" />
                                {mockLibraries.find((lib) => lib.id === libraryId)?.name}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label className="text-xs text-gray-500">Permissions</Label>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {manager.permissions.slice(0, 3).map((permission) => (
                              <Badge key={permission} variant="secondary" className="text-xs">
                                <Shield className="w-3 h-3 mr-1" />
                                {getPermissionLabel(permission)}
                              </Badge>
                            ))}
                            {manager.permissions.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{manager.permissions.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-500">
                        {manager.phone} • Joined {new Date(manager.createdAt).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => setViewingActivity(manager.id)}>
                        <Activity className="w-4 h-4 mr-1" />
                        Activity
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleEditManager(manager)}>
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDeletingManager(manager)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredManagers.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <UserCheck className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No managers found</h3>
                  <p className="text-gray-500">Try adjusting your search or add a new manager</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Manager Activity Logs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockActivityLogs.map((log) => {
                  const manager = managers.find((m) => m.id === log.managerId)
                  return (
                    <div key={log.id} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{manager?.name || "Unknown Manager"}</span>
                          <Badge variant="outline" className="text-xs">
                            {log.action}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{log.details}</p>
                        <p className="text-xs text-gray-500">{new Date(log.timestamp).toLocaleString()}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add Manager Dialog */}
      <Dialog open={isAddingManager} onOpenChange={setIsAddingManager}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Manager</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="font-medium">Basic Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={newManager.name}
                    onChange={(e) => setNewManager({ ...newManager, name: e.target.value })}
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newManager.email}
                    onChange={(e) => setNewManager({ ...newManager, email: e.target.value })}
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={newManager.phone}
                  onChange={(e) => setNewManager({ ...newManager, phone: e.target.value })}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Library Assignment */}
            <div className="space-y-4">
              <h4 className="font-medium">Library Assignment</h4>
              <div className="space-y-2">
                {mockLibraries.map((library) => (
                  <div key={library.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`library-${library.id}`}
                      checked={newManager.libraryIds.includes(library.id)}
                      onCheckedChange={(checked) => handleLibraryToggle(library.id, !!checked, "new")}
                    />
                    <Label htmlFor={`library-${library.id}`} className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {library.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Permissions */}
            <div className="space-y-4">
              <h4 className="font-medium">Permissions</h4>
              <div className="space-y-3">
                {availablePermissions.map((permission) => (
                  <div key={permission.id} className="flex items-start space-x-2">
                    <Checkbox
                      id={`permission-${permission.id}`}
                      checked={newManager.permissions.includes(permission.id)}
                      onCheckedChange={(checked) => handlePermissionToggle(permission.id, !!checked, "new")}
                    />
                    <div className="flex-1">
                      <Label htmlFor={`permission-${permission.id}`} className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        {permission.label}
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">{permission.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddingManager(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddManager} disabled={!newManager.name || !newManager.email}>
              Add Manager
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Manager Dialog */}
      <Dialog open={!!editingManager} onOpenChange={() => setEditingManager(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Manager</DialogTitle>
          </DialogHeader>
          {editingManager && (
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h4 className="font-medium">Basic Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-name">Full Name</Label>
                    <Input
                      id="edit-name"
                      value={editingManager.name}
                      onChange={(e) => setEditingManager({ ...editingManager, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-email">Email</Label>
                    <Input
                      id="edit-email"
                      type="email"
                      value={editingManager.email}
                      onChange={(e) => setEditingManager({ ...editingManager, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="edit-phone">Phone Number</Label>
                  <Input
                    id="edit-phone"
                    value={editingManager.phone}
                    onChange={(e) => setEditingManager({ ...editingManager, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Library Assignment */}
              <div className="space-y-4">
                <h4 className="font-medium">Library Assignment</h4>
                <div className="space-y-2">
                  {mockLibraries.map((library) => (
                    <div key={library.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`edit-library-${library.id}`}
                        checked={editingManager.libraryIds.includes(library.id)}
                        onCheckedChange={(checked) => handleLibraryToggle(library.id, !!checked, "edit")}
                      />
                      <Label htmlFor={`edit-library-${library.id}`} className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {library.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Permissions */}
              <div className="space-y-4">
                <h4 className="font-medium">Permissions</h4>
                <div className="space-y-3">
                  {availablePermissions.map((permission) => (
                    <div key={permission.id} className="flex items-start space-x-2">
                      <Checkbox
                        id={`edit-permission-${permission.id}`}
                        checked={editingManager.permissions.includes(permission.id)}
                        onCheckedChange={(checked) => handlePermissionToggle(permission.id, !!checked, "edit")}
                      />
                      <div className="flex-1">
                        <Label htmlFor={`edit-permission-${permission.id}`} className="flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          {permission.label}
                        </Label>
                        <p className="text-sm text-gray-500 mt-1">{permission.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingManager(null)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletingManager} onOpenChange={() => setDeletingManager(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Manager</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove {deletingManager?.name} as a manager? This will revoke their access to all
              assigned libraries.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingManager && handleDeleteManager(deletingManager)}
              className="bg-red-600 hover:bg-red-700"
            >
              Remove Manager
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}