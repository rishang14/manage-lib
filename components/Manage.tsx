import React from 'react'
import { AddSeatForm } from './AddSeat'
import { SeatManagementTable } from './SeatManagementTable'

const Manage = ({mockSeattabledata}:any) => {
  return (
        <div className="bg-white flex flex-col gap-3  dark:bg-neutral-950 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <SeatManagementTable seats={mockSeattabledata} />
          </div>
  )
}

export default Manage;