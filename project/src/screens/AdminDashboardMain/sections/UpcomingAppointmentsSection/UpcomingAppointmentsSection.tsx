import { TrendingDownIcon, TrendingUpIcon, CalendarIcon, UsersIcon, ClipboardListIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { DashboardStats } from "../../../../hooks/useDashboardData";

interface UpcomingAppointmentsSectionProps {
  stats: DashboardStats;
  loading: boolean;
}

export const UpcomingAppointmentsSection: React.FC<UpcomingAppointmentsSectionProps> = ({ stats, loading }) => {
  const cards = [
    {
      id: "appointment",
      icon: CalendarIcon,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      title: "Today's Appointments",
      content: loading ? "..." : stats.todaysAppointments.toString(),
      additionalInfo: "Next at 9:00 AM",
      additionalInfoClass: "text-green-600",
      trend: null,
    },
    {
      id: "startups",
      icon: UsersIcon,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      title: "Assigned Startups",
      content: loading ? "..." : stats.assignedStartups.toString(),
      additionalInfo: "View Details",
      additionalInfoClass: "text-gray-500 cursor-pointer hover:text-purple-600",
      trend: null,
    },
    {
      id: "tasks",
      icon: ClipboardListIcon,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      title: "Pending Tasks",
      content: loading ? "..." : stats.pendingTasks.toString(),
      additionalInfo: `${stats.taskCompletionRate.toFixed(1)}%`,
      additionalInfoClass: stats.taskCompletionRate >= 75 ? "text-green-600" : "text-red-500",
      trend: stats.taskCompletionRate >= 75 ? "up" : "down",
    },
  ];

  return (
    <section className="flex gap-6 w-full">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="flex-1 min-w-[250px] h-[140px] rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer group"
        >
          <CardContent className="p-6 h-full">
            <div className="flex items-start justify-between h-full">
              <div className="flex items-start gap-3">
                <div className={`p-2 ${card.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm text-gray-600 font-medium mb-1">
                    {card.title}
                  </span>
                  <span className="text-2xl font-bold text-gray-900 mb-2">
                    {card.content}
                  </span>
                  {card.id === "startups" && (
                    <button className={`text-sm ${card.additionalInfoClass} transition-colors duration-200`}>
                      {card.additionalInfo}
                    </button>
                  )}
                </div>
              </div>

              {(card.id === "appointment" || card.id === "tasks") && (
                <div className="flex items-center gap-1.5 mt-auto">
                  {card.trend === "up" && (
                    <TrendingUpIcon className="w-4 h-4 text-green-600" />
                  )}
                  {card.trend === "down" && (
                    <TrendingDownIcon className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${card.additionalInfoClass}`}>
                    {card.additionalInfo}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};