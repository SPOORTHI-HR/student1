import React from 'react';
import { PageWithSidebar } from '../components/layouts/PageWithSidebar';
import { DashboardNavbar } from '../components/ui/dashboard-navbar';
import { Clock, Check, Eye, Download } from 'lucide-react';

const AssignmentPage = () => {
  const assignments = [
    {
      id: 1,
      task: 'Assignment 1: Name',
      status: 'Pending',
      statusIcon: Clock,
      actions: ['submit', 'view', 'download'],
    },
    {
      id: 2,
      task: 'Assignment 2: Name',
      status: 'Submitted',
      statusIcon: Check,
      actions: [],
    },
    {
      id: 3,
      task: 'Assignment 3: Name',
      status: 'Pending',
      statusIcon: Clock,
      actions: ['submit', 'view', 'download'],
    },
    {
      id: 4,
      task: 'Assignment 4: Name',
      status: 'Submitted',
      statusIcon: Check,
      actions: [],
    },
    {
      id: 5,
      task: 'Assignment 5: Name',
      status: 'Pending',
      statusIcon: Clock,
      actions: ['submit', 'view', 'download'],
    },
    {
      id: 6,
      task: 'Assignment 6: Name',
      status: 'Pending',
      statusIcon: Clock,
      actions: ['submit', 'view', 'download'],
    },
    {
      id: 7,
      task: 'Assignment 7: Name',
      status: 'Submitted',
      statusIcon: Check,
      actions: [],
    },
    {
      id: 8,
      task: 'Assignment 8: Name',
      status: 'Pending',
      statusIcon: Clock,
      actions: ['submit', 'view', 'download'],
    },
  ];

  return (
    <PageWithSidebar>
      <div className="flex flex-1 min-w-0 h-full p-2 sm:p-3 md:p-4 lg:p-6">
        <div className="w-full h-full bg-slate-100 rounded-xl shadow-lg flex flex-col overflow-hidden relative">
          {/* Static Navbar at top */}
          <DashboardNavbar />
          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-0 relative scrollbar-hide">
            <div className="flex justify-center items-start min-h-full py-0">
              {/* Centered Assignments Container - Responsive */}
              <div className="w-full md:w-[99%] max-w-[1600px] mx-auto rounded-none md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden min-h-[600px] md:-mt-4">
                {/* Page Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 ml-0 sm:ml-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Assignments
                </h1>

                {/* Desktop Table View - Hidden on mobile */}
                <div className="hidden md:block overflow-hidden rounded-3xl">
                  <table className="w-full">
                    {/* Table Header - Black background with rounded top corners */}
                    <thead>
                      <tr className="bg-[#000]">
                        <th className="px-6 py-5 text-left text-sm font-semibold text-white">No</th>
                        <th className="px-6 py-5 text-left text-sm font-semibold text-white">Task</th>
                        <th className="px-6 py-5 text-left text-sm font-semibold text-white">Status</th>
                        <th className="px-6 py-5 text-left text-sm font-semibold text-white">Actions</th>
                      </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                      {assignments.map((assignment, index) => {
                        const StatusIcon = assignment.statusIcon;
                        const isLast = index === assignments.length - 1;
                        return (
                          <tr
                            key={assignment.id}
                            className={`bg-white hover:bg-gray-50 transition-colors ${!isLast ? 'border-b border-gray-200' : ''
                              }`}
                          >
                            {/* Number Badge - 40px × 40px circular */}
                            <td className="px-6 py-5 whitespace-nowrap">
                              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                <span className="text-white text-base font-semibold">{assignment.id}</span>
                              </div>
                            </td>

                            {/* Task Name */}
                            <td className="px-6 py-5">
                              <span className="text-base font-medium text-gray-900">{assignment.task}</span>
                            </td>

                            {/* Status Pill - Fully rounded */}
                            <td className="px-6 py-5 whitespace-nowrap">
                              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                                <StatusIcon className="w-4 h-4" />
                                {assignment.status}
                              </span>
                            </td>

                            {/* Actions - gap-5 spacing */}
                            <td className="px-6 py-5 whitespace-nowrap">
                              <div className="flex items-center gap-5">
                                {assignment.actions.includes('submit') && (
                                  <button className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors">
                                    Submit
                                  </button>
                                )}
                                {assignment.actions.includes('view') && (
                                  <button className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                                    <Eye className="w-5 h-5" />
                                  </button>
                                )}
                                {assignment.actions.includes('download') && (
                                  <button className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                                    <Download className="w-5 h-5" />
                                  </button>
                                )}
                                {assignment.actions.length === 0 && (
                                  <span className="text-gray-400 text-base">-</span>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View - Visible only on mobile */}
                <div className="md:hidden flex flex-col gap-3">
                  {assignments.map((assignment) => {
                    const StatusIcon = assignment.statusIcon;
                    return (
                      <div
                        key={assignment.id}
                        className="bg-white rounded-2xl p-4 shadow-sm"
                      >
                        {/* Header with Number and Status */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white text-base font-semibold">{assignment.id}</span>
                          </div>
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                            <StatusIcon className="w-3.5 h-3.5" />
                            {assignment.status}
                          </span>
                        </div>

                        {/* Task Name */}
                        <h3 className="text-base font-medium text-gray-900 mb-3">{assignment.task}</h3>

                        {/* Actions */}
                        {assignment.actions.length > 0 && (
                          <div className="flex items-center gap-3 flex-wrap">
                            {assignment.actions.includes('submit') && (
                              <button className="flex-1 min-w-[120px] px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors">
                                Submit
                              </button>
                            )}
                            <div className="flex items-center gap-3">
                              {assignment.actions.includes('view') && (
                                <button className="p-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                                  <Eye className="w-5 h-5" />
                                </button>
                              )}
                              {assignment.actions.includes('download') && (
                                <button className="p-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                                  <Download className="w-5 h-5" />
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default AssignmentPage;

