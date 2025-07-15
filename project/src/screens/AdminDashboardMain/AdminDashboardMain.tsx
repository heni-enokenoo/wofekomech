import {
  BellIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MessageSquareIcon,
  SearchIcon,
} from "lucide-react";
import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

import { AnnouncementsSection } from "./sections/AnnouncementsSection";
import { DashboardStatsSection } from "./sections/DashboardStatsSection/DashboardStatsSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";
import { PerformanceChartSection } from "./sections/PerformanceChartSection";
import { UpcomingAppointmentsSection } from "./sections/UpcomingAppointmentsSection";
import { useDashboardData } from "../../hooks/useDashboardData";

export const AdminDashboardMain = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [messages, setMessages] = useState(5);
  
  const {
    appointments,
    stats,
    performance,
    loading,
    markAppointmentComplete,
    cancelAppointment,
  } = useDashboardData();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  const handleNotificationClick = () => {
    setNotifications(0);
    // Open notifications panel
  };

  const handleMessageClick = () => {
    setMessages(0);
    // Open messages panel
  };

  return (
    <div className="bg-gray-50 flex flex-row justify-center w-full min-h-screen">
      <div className="bg-gray-50 overflow-hidden w-full max-w-[1440px] relative">
        {/* Left Sidebar */}
        <div className="w-[274px] h-full fixed top-0 left-0 z-10">
          <NavigationSidebarSection />
        </div>

        {/* Main Content Area */}
        <div className="ml-[274px] flex flex-col min-h-screen">
          {/* Top Header Bar */}
          <header className="w-full h-[108px] bg-white shadow-sm flex items-center justify-between px-9 sticky top-0 z-10 border-b border-gray-200">
            <form onSubmit={handleSearch} className="relative w-[388px]">
              <Input
                className="h-11 bg-gray-100 pl-12 text-gray-700 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Search appointments, startups, tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className="absolute w-5 h-5 top-3 left-4 text-gray-400" />
            </form>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative p-2 hover:bg-gray-100 rounded-full"
                  onClick={handleMessageClick}
                >
                  <MessageSquareIcon className="w-6 h-6 text-gray-600" />
                  {messages > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center">
                      {messages}
                    </span>
                  )}
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative p-2 hover:bg-gray-100 rounded-full"
                  onClick={handleNotificationClick}
                >
                  <BellIcon className="w-6 h-6 text-gray-600" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </Button>
              </div>

              <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
                <Avatar className="w-10 h-10 ring-2 ring-blue-100">
                  <AvatarImage src="/dp.png" alt="User profile" />
                  <AvatarFallback className="bg-blue-500 text-white font-medium">HG</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 text-sm">
                    Henok G
                  </span>
                  <span className="text-xs text-gray-500">Admin</span>
                </div>
                <Button variant="ghost" size="icon" className="p-1">
                  <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                </Button>
              </div>
            </div>
          </header>

          {/* Breadcrumb Navigation */}
          <div className="px-6 py-4 bg-white border-b border-gray-100">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="w-4 h-4 text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="text-gray-900 font-medium"
                >
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          {/* Main Content Sections */}
          <div className="flex flex-col gap-6 px-6 py-6 bg-gray-50 flex-1">
            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 gap-6">
              <UpcomingAppointmentsSection stats={stats} loading={loading} />
            </div>

            {/* Announcements Row */}
            <div className="grid grid-cols-1 gap-6">
              <AnnouncementsSection />
            </div>

            {/* Main Dashboard Content Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <DashboardStatsSection 
                  appointments={appointments}
                  loading={loading}
                  onMarkComplete={markAppointmentComplete}
                  onCancel={cancelAppointment}
                />
              </div>
              <div className="lg:col-span-1">
                <PerformanceChartSection 
                  performance={performance}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};