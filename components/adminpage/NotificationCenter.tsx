"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Check,
  CheckCheck,
  Trash2,
  Plus,
  Search,
  Filter,
  Settings,
  Send,
  AlertCircle,
  Info,
  CheckCircle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Notification } from "@/types"

// Enhanced mock notifications with more variety
const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "member_added",
    title: "New Member Added",
    message: "John Smith joined Central Library - Morning Shift",
    managerId: "1",
    libraryId: "1",
    isRead: false,
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    type: "payment_received",
    title: "Payment Received",
    message: "₹2,500 payment received from Sarah Johnson",
    memberId: "2",
    libraryId: "1",
    isRead: false,
    createdAt: "2024-01-15T09:15:00Z",
  },
  {
    id: "3",
    type: "seat_changed",
    title: "Seat Assignment Changed",
    message: "Mike Davis moved from Seat 15 to Seat 22",
    managerId: "2",
    memberId: "3",
    libraryId: "2",
    isRead: true,
    createdAt: "2024-01-14T16:45:00Z",
  },
  {
    id: "4",
    type: "manager_action",
    title: "Manager Permission Updated",
    message: "Jane Smith's permissions were modified",
    managerId: "1",
    libraryId: "1",
    isRead: true,
    createdAt: "2024-01-14T14:20:00Z",
  },
  {
    id: "5",
    type: "member_removed",
    title: "Member Removed",
    message: "Alex Wilson was removed from North Branch",
    managerId: "1",
    libraryId: "2",
    isRead: false,
    createdAt: "2024-01-13T11:30:00Z",
  },
]

const mockLibraries = [
  { id: "1", name: "Central Library" },
  { id: "2", name: "North Branch" },
  { id: "3", name: "South Branch" },
]

const mockMembers = [
  { id: "1", name: "John Smith" },
  { id: "2", name: "Sarah Johnson" },
  { id: "3", name: "Mike Davis" },
]

// Notification settings
const notificationSettings = {
  emailNotifications: true,
  smsNotifications: false,
  pushNotifications: true,
  memberActions: true,
  paymentUpdates: true,
  managerActions: true,
  systemAlerts: true,
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [filterLibrary, setFilterLibrary] = useState<string>("all")
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([])
  const [isComposing, setIsComposing] = useState(false)
  const [settings, setSettings] = useState(notificationSettings)
  const [viewMode, setViewMode] = useState<"dropdown" | "full">("dropdown")

  // New notification form
  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    type: "member_added" as Notification["type"],
    libraryId: "",
  })

  const unreadCount = notifications.filter((n) => !n.isRead).length

  // Filter notifications
  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = filterType === "all" || notification.type === filterType
    const matchesLibrary = filterLibrary === "all" || notification.libraryId === filterLibrary

    return matchesSearch && matchesType && matchesLibrary
  })

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const bulkMarkAsRead = () => {
    setNotifications((prev) => prev.map((n) => (selectedNotifications.includes(n.id) ? { ...n, isRead: true } : n)))
    setSelectedNotifications([])
  }

  const bulkDelete = () => {
    setNotifications((prev) => prev.filter((n) => !selectedNotifications.includes(n.id)))
    setSelectedNotifications([])
  }

  const handleSelectNotification = (id: string, checked: boolean) => {
    setSelectedNotifications((prev) => (checked ? [...prev, id] : prev.filter((nId) => nId !== id)))
  }

  const handleSelectAll = (checked: boolean) => {
    setSelectedNotifications(checked ? filteredNotifications.map((n) => n.id) : [])
  }

  const sendNotification = () => {
    const notification: Notification = {
      id: crypto.randomUUID(),
      ...newNotification,
      isRead: false,
      createdAt: new Date().toISOString(),
    }
    setNotifications((prev) => [notification, ...prev])
    setNewNotification({
      title: "",
      message: "",
      type: "member_added",
      libraryId: "",
    })
    setIsComposing(false)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "member_added":
      case "member_removed":
        return <Info className="w-4 h-4 text-blue-600" />
      case "payment_received":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "seat_changed":
      case "manager_action":
        return <AlertCircle className="w-4 h-4 text-orange-600" />
      default:
        return <Bell className="w-4 h-4 text-gray-600" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "member_added":
        return "Member Added"
      case "member_removed":
        return "Member Removed"
      case "payment_received":
        return "Payment"
      case "seat_changed":
        return "Seat Change"
      case "manager_action":
        return "Manager Action"
      default:
        return "System"
    }
  }

  // Dropdown version (existing functionality)
  if (viewMode === "dropdown") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="relative bg-transparent">
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {unreadCount}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel className="flex items-center justify-between">
            Notifications
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                  <Check className="w-3 h-3 mr-1" />
                  Mark all read
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={() => setViewMode("full")}>
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {notifications.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">No notifications</div>
          ) : (
            notifications.slice(0, 5).map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`flex flex-col items-start p-3 cursor-pointer ${
                  !notification.isRead ? "bg-blue-50 dark:bg-blue-900/20" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium text-sm">{notification.title}</span>
                  {!notification.isRead && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                </div>
                <span className="text-xs text-muted-foreground mt-1">{notification.message}</span>
                <span className="text-xs text-muted-foreground mt-1">
                  {new Date(notification.createdAt).toLocaleString()}
                </span>
              </DropdownMenuItem>
            ))
          )}

          {notifications.length > 5 && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setViewMode("full")} className="text-center">
                View all notifications
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  // Full notification management interface
  return (
    <div className="space-y-6">
      <Tabs defaultValue="notifications" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="notifications">All Notifications</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Button onClick={() => setIsComposing(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Send Notification
            </Button>
            <Button variant="outline" onClick={() => setViewMode("dropdown")}>
              <Bell className="w-4 h-4 mr-2" />
              Compact View
            </Button>
          </div>
        </div>

        <TabsContent value="notifications" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Management
                </div>
                <Badge variant="secondary">{unreadCount} unread</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="member_added">Member Added</SelectItem>
                    <SelectItem value="member_removed">Member Removed</SelectItem>
                    <SelectItem value="payment_received">Payment</SelectItem>
                    <SelectItem value="seat_changed">Seat Change</SelectItem>
                    <SelectItem value="manager_action">Manager Action</SelectItem>
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
                  <span className="text-sm text-gray-600">{filteredNotifications.length} notifications</span>
                </div>
              </div>

              {/* Bulk Actions */}
              {selectedNotifications.length > 0 && (
                <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-sm font-medium">{selectedNotifications.length} selected</span>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={bulkMarkAsRead}>
                      <CheckCheck className="w-4 h-4 mr-1" />
                      Mark as Read
                    </Button>
                    <Button size="sm" variant="outline" onClick={bulkDelete}>
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.length > 0 && (
              <div className="flex items-center gap-2 px-4">
                <input
                  type="checkbox"
                  checked={selectedNotifications.length === filteredNotifications.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded"
                />
                <Label className="text-sm">Select all</Label>
              </div>
            )}

            {filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`hover:shadow-md transition-shadow ${
                  !notification.isRead ? "border-l-4 border-l-blue-500" : ""
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      checked={selectedNotifications.includes(notification.id)}
                      onChange={(e) => handleSelectNotification(notification.id, e.target.checked)}
                      className="mt-1 rounded"
                    />

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        {getNotificationIcon(notification.type)}
                        <h3 className={`font-medium ${!notification.isRead ? "font-semibold" : ""}`}>
                          {notification.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {getTypeLabel(notification.type)}
                        </Badge>
                        {!notification.isRead && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                      </div>

                      <p className="text-sm text-gray-600">{notification.message}</p>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{new Date(notification.createdAt).toLocaleString()}</span>
                        <span>
                          Library: {mockLibraries.find((lib) => lib.id === notification.libraryId)?.name || "Unknown"}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {!notification.isRead && (
                        <Button size="sm" variant="outline" onClick={() => markAsRead(notification.id)}>
                          <Check className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteNotification(notification.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredNotifications.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Bell className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No notifications found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Delivery Methods</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                    </div>
                    <Switch
                      checked={settings.smsNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-gray-500">Receive browser push notifications</p>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Notification Types</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Member Actions</Label>
                      <p className="text-sm text-gray-500">New members, removals, seat changes</p>
                    </div>
                    <Switch
                      checked={settings.memberActions}
                      onCheckedChange={(checked) => setSettings({ ...settings, memberActions: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Payment Updates</Label>
                      <p className="text-sm text-gray-500">Payment received, overdue alerts</p>
                    </div>
                    <Switch
                      checked={settings.paymentUpdates}
                      onCheckedChange={(checked) => setSettings({ ...settings, paymentUpdates: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Manager Actions</Label>
                      <p className="text-sm text-gray-500">Manager activities and permission changes</p>
                    </div>
                    <Switch
                      checked={settings.managerActions}
                      onCheckedChange={(checked) => setSettings({ ...settings, managerActions: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>System Alerts</Label>
                      <p className="text-sm text-gray-500">System maintenance and important updates</p>
                    </div>
                    <Switch
                      checked={settings.systemAlerts}
                      onCheckedChange={(checked) => setSettings({ ...settings, systemAlerts: checked })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Compose Notification Dialog */}
      <Dialog open={isComposing} onOpenChange={setIsComposing}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Send Notification</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newNotification.title}
                onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                placeholder="Notification title"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={newNotification.message}
                onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                placeholder="Notification message"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="type">Type</Label>
              <Select
                value={newNotification.type}
                onValueChange={(value: Notification["type"]) => setNewNotification({ ...newNotification, type: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="member_added">Member Added</SelectItem>
                  <SelectItem value="member_removed">Member Removed</SelectItem>
                  <SelectItem value="payment_received">Payment</SelectItem>
                  <SelectItem value="seat_changed">Seat Change</SelectItem>
                  <SelectItem value="manager_action">Manager Action</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="library">Library</Label>
              <Select
                value={newNotification.libraryId}
                onValueChange={(value) => setNewNotification({ ...newNotification, libraryId: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select library" />
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
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsComposing(false)}>
              Cancel
            </Button>
            <Button
              onClick={sendNotification}
              disabled={!newNotification.title || !newNotification.message || !newNotification.libraryId}
            >
              <Send className="w-4 h-4 mr-2" />
              Send Notification
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
