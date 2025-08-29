"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "./ui/table";
import { Button } from "./ui/button";
import { Clock, Edit, Trash2, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { SeatShiftResult, shiftschemaInput } from "@/common/types";
import { useQueryClient } from "@tanstack/react-query";
import { getmemberdetailsasperTheseat } from "@/lib/serveraction";
import ShowMemberDialogWrapper from "./ShowMemberDialogWrapper";

type prop = {
  data: SeatShiftResult[];
  libid: string;
  shifts: shiftschemaInput[];
};

const ManagementTable = ({ data, libid, shifts }: prop) => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [selectedSeatNumber, setSeletectedSeatNumber] = useState<number | null>(
    null
  );
  const queryClinet = useQueryClient();
  const handleSelectedSeat = (seatId: string, seatNum: number) => {
    if (seatId) {
      queryClinet.prefetchQuery({
        queryKey: ["seatdetails", seatId],
        queryFn: () => getmemberdetailsasperTheseat(seatId, libid),
        staleTime: 1000 * 5,
      });
    }

    setSelectedSeat(seatId);
    setSeletectedSeatNumber(seatNum);
  };
  const columns: ColumnDef<SeatShiftResult>[] = [
    {
      accessorKey: "seatNumber",
      header: "Seat Number",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="font-medium text-slate-900 dark:text-slate-100">
            Seat {row.getValue("seatNumber")}
          </span>
        </div>
      ),
    },
    {
      id: "totalShifts",
      header: "Total Shifts",
      cell: ({ row }) => {
        const shiftCount = row.original.shifts.length;
        return (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-500" />
            <Badge variant="secondary" className="font-medium">
              {shiftCount} {shiftCount === 1 ? "Shift" : "Shifts"}
            </Badge>
          </div>
        );
      },
    },
    {
      id: "filled",
      header: "Occupancy",
      cell: ({ row }) => {
        // Placeholder logic - you can replace with actual booking data
        // const filled = Math.floor(Math.random() * row.original.shifts.length)
        // const total = row.original.shifts.length
        // const percentage = total > 0 ? Math.round((filled / total) * 100) : 0

        return (
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-500" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                {/* {filled}/{total} */}
              </span>
              {/* <span className="text-xs text-slate-500">{percentage}% filled</span> */}
            </div>
          </div>
        );
      },
    },
    {
      id: "status",
      header: "Status",
      cell: ({ row }) => {
        const shiftCount = row.original.shifts.length;
        const status = shiftCount > 0 ? "Active" : "Inactive";
        const variant = status === "Active" ? "default" : "secondary";

        return (
          <Badge variant={variant} className="font-medium">
            {status}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const seat = row.original;
        return (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              title="Edit seat"
              onClick={() => {
                handleSelectedSeat(seat.id, seat.seatNumber);
              }}
            >
              <Edit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-900/20 focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
              title="Delete seat"
            >
              <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
            </Button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="w-full">
        <div className="rounded-lg border border-card  overflow-hidden bg-white dark:bg-card shadow-sm">
          <Table>
            <TableHeader className="">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="font-semibold text-slate-700 dark:text-slate-300 py-4 px-6 text-left"
                    >
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
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={`
                    hover:bg-slate-50 dark:hover:bg-slate-800/30 
                    transition-colors duration-150 ease-in-out
                    focus-within:bg-slate-50 dark:focus-within:bg-slate-800/30
                    ${
                      index !== table.getRowModel().rows.length - 1
                        ? "border-b border-slate-100 dark:border-slate-800"
                        : ""
                    }
                  `}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="py-4 px-6 align-middle"
                      >
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
                    className="h-32 text-center py-8"
                  >
                    <div className="flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400">
                      <Users className="w-8 h-8" />
                      <p className="text-sm font-medium">No seats found</p>
                      <p className="text-xs">Add some seats to get started</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      {!!selectedSeat && (
        <ShowMemberDialogWrapper
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
          shifts={shifts}
          libid={libid}
          seatNum={selectedSeatNumber as number}
        />
      )}
    </>
  );
};

export default ManagementTable;
