"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Seat } from "@/common/types";
import { AddSeatForm } from "./AddSeat";
import AddMemberDialog from "./AddMemberDialog";

interface SeatManagementTableProps {
  seats: Seat[];
}

export function SeatManagementTable({ seats }: SeatManagementTableProps) { 4
  const [openDialog,setOpenDialog]=useState<boolean>(false)
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);

  const columns: ColumnDef<Seat>[] = [
    {
      accessorKey: "seatNumber",
      header: "Seat #",
      cell: ({ row }) => (
        <div className="font-semibold text-slate-900 dark:text-slate-100">
          #{row.getValue("seatNumber")}
        </div>
      ),
    },
    {
      id: "shifts",
      header: "Shifts",
      cell: ({ row }) => {
        const seat = row.original;
        return (
          <div className="flex flex-wrap gap-1.5">
            {seat.shifts.map((shift) => (
              <Badge
                key={shift.id}
                variant={shift.member ? "default" : "secondary"}
                className={`text-xs font-medium ${
                  shift.member
                    ? shift.type === "morning"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                      : shift.type === "afternoon"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                }`}
              >
                {shift.type.charAt(0).toUpperCase() + shift.type.slice(1)}
                {shift.member && (
                  <span className="ml-1">
                    {shift.member.paymentStatus === "overdue" && "⚠️"}
                    {shift.member.paymentStatus === "pending" && "⏳"}
                    {shift.member.paymentStatus === "paid" && "✅"}
                  </span>
                )}
              </Badge>
            ))}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        const variant =
          status === "full"
            ? "default"
            : status === "partially_filled"
            ? "secondary"
            : "outline";
        const colorClass =
          status === "full"
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : status === "partially_filled"
            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
        return (
          <Badge variant={variant} className={colorClass}>
            {status.replace("_", " ").toUpperCase()}
          </Badge>
        );
      },
    },
    {
      id: "members",
      header: "Members",
      cell: ({ row }) => {
        const seat = row.original;
        const members = seat.shifts.filter((s) => s.member);
        return (
          <div className="space-y-1">
            {members.map((shift) => (
              <div key={shift.id} className="text-sm">
                <div className="font-medium text-slate-900 dark:text-slate-100">
                  {shift.member?.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {shift.type} • {shift.member?.phone}
                </div>
              </div>
            ))}
            {members.length === 0 && (
              <span className="text-muted-foreground text-sm">No members</span>
            )}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const seat = row.original;
        return (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedSeat(seat)}
              className="hover:bg-blue-50"
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: seats,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  return (
    <>
      <Card className="shadow-sm">
        <CardHeader className="bg-gradient-to-r text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <CardTitle className="text-xl font-bold">
                  Seat Management
                </CardTitle>
                <CardDescription>
                  Manage seat assignments, shifts, and member details
                </CardDescription>
              </div>
            </div>
            <Button
              onClick={() => setOpenDialog(true)}
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Seat
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search seats, members, or phone numbers..."
                  value={globalFilter ?? ""}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select
              value={
                (table.getColumn("status")?.getFilterValue() as string) ?? ""
              }
              onValueChange={(value) =>
                table
                  .getColumn("status")
                  ?.setFilterValue(value === "all" ? "" : value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Seats</SelectItem>
                <SelectItem value="empty">Empty</SelectItem>
                <SelectItem value="partially_filled">
                  Partially Filled
                </SelectItem>
                <SelectItem value="full">Full</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50 dark:bg-slate-800">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="font-semibold">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Showing{" "}
              {table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1}{" "}
              to{" "}
              {Math.min(
                (table.getState().pagination.pageIndex + 1) *
                  table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length
              )}{" "}
              of {table.getFilteredRowModel().rows.length} seats
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
 
       <AddMemberDialog selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat}/>
      <AddSeatForm open={openDialog} setopen={setOpenDialog}/>
    </>
  );
}
