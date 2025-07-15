import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { BellIcon, XIcon, PlusIcon } from "lucide-react";

interface Announcement {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
  read: boolean;
}

export const AnnouncementsSection: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: '1',
      title: 'Team Meeting Today',
      message: 'We have a team meeting today at 5PM in the conference room. Please bring your quarterly reports.',
      timestamp: '2 hours ago',
      priority: 'high',
      read: false,
    },
    {
      id: '2',
      title: 'New Startup Onboarding',
      message: 'Three new startups will be joining our program next week. Review their profiles in the system.',
      timestamp: '1 day ago',
      priority: 'medium',
      read: true,
    },
    {
      id: '3',
      title: 'System Maintenance',
      message: 'Scheduled maintenance this weekend. The system will be unavailable from 2-4 AM.',
      timestamp: '2 days ago',
      priority: 'low',
      read: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setAnnouncements(prev => 
      prev.map(ann => 
        ann.id === id ? { ...ann, read: true } : ann
      )
    );
  };

  const removeAnnouncement = (id: string) => {
    setAnnouncements(prev => prev.filter(ann => ann.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const unreadCount = announcements.filter(ann => !ann.read).length;

  return (
    <Card className="w-full rounded-2xl border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Announcements
            </CardTitle>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <Button variant="outline" size="sm" className="h-8">
            <PlusIcon className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {announcements.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <BellIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No announcements</p>
          </div>
        ) : (
          announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`p-4 rounded-lg border-l-4 transition-all duration-200 hover:shadow-md ${getPriorityColor(announcement.priority)} ${
                !announcement.read ? 'ring-2 ring-blue-100' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`font-medium ${!announcement.read ? 'text-gray-900' : 'text-gray-700'}`}>
                      {announcement.title}
                    </h4>
                    {!announcement.read && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {announcement.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {announcement.timestamp}
                    </span>
                    <div className="flex items-center gap-2">
                      {!announcement.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(announcement.id)}
                          className="h-6 px-2 text-xs text-blue-600 hover:bg-blue-100"
                        >
                          Mark as read
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAnnouncement(announcement.id)}
                        className="h-6 w-6 p-0 text-gray-400 hover:text-red-500 hover:bg-red-50"
                      >
                        <XIcon className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};