"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table"; 
import { Table,TableHead,TableHeader,TableRow,TableBody,TableCell } from "./ui/table"; 
import { Button } from "./ui/button";
import { Edit ,Trash2} from "lucide-react";

type Shift = {
  id: string;
  type: string;
  startTime: string;
  endTime: string;
};

type Seat = {
  seatNumber: string;
  shifts: Shift[];
};

const  ManagementTable=({data}:any)=> { 

  const columns: ColumnDef<Seat>[] = [
    {
      accessorKey: "seatNumber",
      header: "Seat No ",
      cell: ({ row }) => (
        <div className="font-semibold text-slate-900 dark:text-slate-100">
          {row.getValue("seatNumber")}
        </div>
      ),
    },
    {
      id: "totalShifts",
      header: "Total Shifts",
       cell: ({ row }) => {
        const seat = row.original.shifts.length;
        return (
          <div className="flex flex-wrap gap-1.5">
           {seat}
          </div>
        );
    } ,
},
    {
      id: "filled",
      header: "Filled",
      cell: () => "—", // placeholder until you hook up bookings
    },
    {
      id: "status",
      header: "Status",
      cell: () => "Available", // derive later
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
            //   onClick={() => setSelectedSeat(seat)}
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
    } ,}
  ];

  const table = useReactTable({ 
    // @ts-ignore
    data, 
    // @ts-ignore
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return ( 
    <> 
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
  </>
  );
}

export default ManagementTable;