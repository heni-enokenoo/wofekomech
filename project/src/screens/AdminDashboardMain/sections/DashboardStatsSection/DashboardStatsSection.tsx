import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Button } from "../../../../components/ui/button";
import { CheckIcon, XIcon, CalendarIcon, MailIcon } from "lucide-react";
import { Appointment } from "../../../../hooks/useDashboardData";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";

interface DashboardStatsSectionProps {
  appointments: Appointment[];
  loading: boolean;
  onMarkComplete: (id: string) => void;
  onCancel: (id: string) => void;
}

export const DashboardStatsSection: React.FC<DashboardStatsSectionProps> = ({
  appointments,
  loading,
  onMarkComplete,
  onCancel,
}) => {
  const [timeFilter, setTimeFilter] = useState("next2weeks");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'text-blue-600 bg-blue-50';
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <Card className="w-full rounded-2xl border border-gray-200">
        <CardContent className="p-6">
          <LoadingSpinner />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full rounded-2xl border border-gray-200 shadow-sm">
      <CardContent className="p-0">
        <div className="flex justify-between items-center p-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Upcoming Appointments
          </h2>

          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-[140px] h-9 border-gray-200 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next2weeks">Next 2 weeks</SelectItem>
              <SelectItem value="nextmonth">Next month</SelectItem>
              <SelectItem value="next3months">Next 3 months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-100">
                <TableHead className="text-gray-600 font-medium pl-6">
                  Startup
                </TableHead>
                <TableHead className="text-gray-600 font-medium">
                  Contact
                </TableHead>
                <TableHead className="text-gray-600 font-medium">
                  Schedule
                </TableHead>
                <TableHead className="text-gray-600 font-medium">
                  Status
                </TableHead>
                <TableHead className="text-gray-600 font-medium text-right pr-6">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow 
                  key={appointment.id} 
                  className="border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                >
                  <TableCell className="pl-6">
                    <div className="font-medium text-gray-900">
                      {appointment.startup}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-gray-900">
                        {appointment.name}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MailIcon className="w-3 h-3" />
                        {appointment.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4" />
                      <div>
                        <div>{formatDate(appointment.date)}</div>
                        <div className="text-xs text-gray-500">{appointment.time}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    {appointment.status === 'upcoming' && (
                      <div className="flex items-center gap-2 justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onMarkComplete(appointment.id)}
                          className="h-8 px-3 text-green-600 border-green-200 hover:bg-green-50"
                        >
                          <CheckIcon className="w-3 h-3 mr-1" />
                          Complete
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onCancel(appointment.id)}
                          className="h-8 px-3 text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <XIcon className="w-3 h-3 mr-1" />
                          Cancel
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {appointments.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <CalendarIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No appointments scheduled</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};