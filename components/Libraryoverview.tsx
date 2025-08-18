import React from 'react'
import { Button } from './ui/button'
import { BarChart3,Users,Building2 } from 'lucide-react'
import { SeatStatistics } from './SeatStatistics'

const Libraryoverview = ({mockSeats}) => {
  return (
       <div className="space-y-8">
    
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Occupancy Rate</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          {Math.round((mockSeats.filter((seat) => seat.status === "full").length / mockSeats.length) * 100)}
                          %
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                  </div>
    
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Active Members</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          {mockSeats.reduce((acc, seat) => acc + seat.shifts.filter((shift) => shift.member).length, 0)}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>
    
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Available Seats</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          {mockSeats.filter((seat) => seat.status === "empty").length}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Statistics Section */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Detailed Analytics</h3> 
                  {/* @ts-ignore */}
                  <SeatStatistics seats={mockSeats} />
                </div>
              </div>
  )
}

export default Libraryoverview;