import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../hooks/useLanguage';
import { mockStartups } from '../data/startups';
import { 
  SearchIcon,
  BellIcon,
  UserIcon,
  CalendarIcon,
  ClockIcon,
  MessageSquareIcon,
  VideoIcon,
  TrendingUpIcon,
  UsersIcon,
  StarIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  PlusIcon,
  FilterIcon,
  MoreHorizontalIcon,
  BookOpenIcon,
  FileTextIcon,
  BarChart3Icon,
  SettingsIcon,
  HelpCircleIcon,
  LogOutIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  DollarSignIcon,
  AwardIcon,
  TrendingDownIcon
} from 'lucide-react';

interface MentorDashboardProps {
  user: any;
  onLogout: () => void;
}

export const MentorDashboard: React.FC<MentorDashboardProps> = ({ user, onLogout }) => {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState('overview');

  const sidebarItems = [
    { icon: BarChart3Icon, label: { en: 'Dashboard', am: 'ዳሽቦርድ' }, active: true },
    { icon: UsersIcon, label: { en: 'My Startups', am: 'የእኔ ስታርት አፖች' } },
    { icon: CalendarIcon, label: { en: 'Schedule', am: 'መርሃ ግብር' } },
    { icon: MessageSquareIcon, label: { en: 'Messages', am: 'መልእክቶች' } },
    { icon: BookOpenIcon, label: { en: 'Resources', am: 'ሀብቶች' } },
    { icon: BarChart3Icon, label: { en: 'Analytics', am: 'ትንታኔ' } },
    { icon: SettingsIcon, label: { en: 'Settings', am: 'ቅንብሮች' } },
    { icon: HelpCircleIcon, label: { en: 'Help', am: 'እርዳታ' } },
    { icon: LogOutIcon, label: { en: 'Logout', am: 'ውጣ' }, onClick: onLogout }
  ];

  const stats = [
    {
      title: { en: 'Active Startups', am: 'ንቁ ስታርት አፖች' },
      value: '12',
      change: '+2',
      trend: 'up',
      icon: UsersIcon,
      color: 'bg-blue-500'
    },
    {
      title: { en: 'Total Sessions', am: 'ጠቅላላ ክፍለ ጊዜዎች' },
      value: '148',
      change: '+12',
      trend: 'up',
      icon: VideoIcon,
      color: 'bg-green-500'
    },
    {
      title: { en: 'Success Rate', am: 'የስኬት መጠን' },
      value: '87%',
      change: '+5%',
      trend: 'up',
      icon: TrendingUpIcon,
      color: 'bg-purple-500'
    },
    {
      title: { en: 'Avg Rating', am: 'አማካይ ደረጃ' },
      value: '4.8',
      change: '+0.2',
      trend: 'up',
      icon: StarIcon,
      color: 'bg-yellow-500'
    }
  ];

  const myStartups = mockStartups.slice(0, 6);

  const upcomingSessions = [
    {
      startup: 'EthioTech Solutions',
      founder: 'Abebe Kebede',
      time: '2:00 PM',
      date: 'Today',
      type: 'Strategy Review',
      status: 'confirmed',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      startup: 'HealthBridge',
      founder: 'Meron Tadesse',
      time: '4:30 PM',
      date: 'Today',
      type: 'Product Demo',
      status: 'pending',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      startup: 'EduConnect',
      founder: 'Dawit Alemayehu',
      time: '10:00 AM',
      date: 'Tomorrow',
      type: 'Team Building',
      status: 'confirmed',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const recentActivities = [
    {
      type: 'session',
      message: 'Completed mentoring session with EthioTech Solutions',
      time: '2 hours ago',
      icon: VideoIcon
    },
    {
      type: 'message',
      message: 'New message from HealthBridge team',
      time: '4 hours ago',
      icon: MessageSquareIcon
    },
    {
      type: 'milestone',
      message: 'EduConnect reached Gen 3 milestone',
      time: '1 day ago',
      icon: AwardIcon
    },
    {
      type: 'session',
      message: 'Scheduled session with GreenEnergy Ethiopia',
      time: '2 days ago',
      icon: CalendarIcon
    }
  ];

  const performanceData = [
    { month: 'Jan', sessions: 15, success: 85 },
    { month: 'Feb', sessions: 18, success: 88 },
    { month: 'Mar', sessions: 22, success: 90 },
    { month: 'Apr', sessions: 20, success: 87 },
    { month: 'May', sessions: 25, success: 92 },
    { month: 'Jun', sessions: 28, success: 89 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-purple-600">MentorHub</h1>
        </div>
        
        <nav className="flex-1 px-4 py-6">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors mb-1 ${
                item.active ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={item.onClick}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{t(item.label)}</span>
            </div>
          ))}
        </nav>

        {/* Mentor Profile Card */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Mentor"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.expertise}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {t({ en: 'Mentor Dashboard', am: 'የአማካሪ ዳሽቦርድ' })}
              </h1>
              <p className="text-gray-600">
                {t({ en: 'Manage your startups and track their progress', am: 'ስታርት አፖችዎን ያስተዳድሩ እና እድገታቸውን ይከታተሉ' })}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder={t({ en: 'Search startups...', am: 'ስታርት አፖችን ፈልግ...' })}
                  className="pl-10 w-64"
                />
              </div>
              
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  5
                </span>
              </Button>
              
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <PlusIcon className="w-4 h-4 mr-2" />
                {t({ en: 'New Session', am: 'አዲስ ክፍለ ጊዜ' })}
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t(stat.title)}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {stat.trend === 'up' ? (
                          <TrendingUpIcon className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDownIcon className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* My Startups */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">
                    {t({ en: 'My Startups', am: 'የእኔ ስታርት አፖች' })}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FilterIcon className="w-4 h-4 mr-2" />
                      {t({ en: 'Filter', am: 'ማጣሪያ' })}
                    </Button>
                    <Button variant="outline" size="sm">
                      {t({ en: 'View All', am: 'ሁሉንም ይመልከቱ' })}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myStartups.map((startup) => (
                      <div key={startup.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <img 
                              src={startup.avatar} 
                              alt={startup.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{startup.name}</h3>
                              <p className="text-sm text-gray-600">{startup.founder}</p>
                              <div className="flex items-center gap-3 mt-2">
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                  Gen {startup.generation}
                                </span>
                                <span className="text-xs text-gray-500">{startup.industry}</span>
                                <span className="text-xs text-gray-500">
                                  ${(startup.fundingRaised / 1000).toFixed(0)}K raised
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-purple-500 h-2 rounded-full"
                                  style={{ width: `${startup.progress}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium text-gray-700">{startup.progress}%</span>
                            </div>
                            <p className="text-xs text-gray-500">{startup.lastActivity}</p>
                            <div className="flex gap-1 mt-2">
                              <Button size="sm" variant="outline">
                                <MessageSquareIcon className="w-3 h-3 mr-1" />
                                {t({ en: 'Chat', am: 'ውይይት' })}
                              </Button>
                              <Button size="sm" variant="outline">
                                <CalendarIcon className="w-3 h-3 mr-1" />
                                {t({ en: 'Schedule', am: 'ይያዙ' })}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-purple-600" />
                    {t({ en: 'Upcoming Sessions', am: 'የሚመጡ ክፍለ ጊዜዎች' })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.map((session, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <img 
                            src={session.avatar} 
                            alt={session.founder}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm">{session.startup}</h4>
                            <p className="text-xs text-gray-600">{session.founder}</p>
                          </div>
                          {session.status === 'confirmed' ? (
                            <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          ) : (
                            <AlertCircleIcon className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{session.type}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{session.date}</span>
                            <span>•</span>
                            <span>{session.time}</span>
                          </div>
                          <Button size="sm" variant="outline" className="h-6 text-xs">
                            <VideoIcon className="w-3 h-3 mr-1" />
                            {t({ en: 'Join', am: 'ተቀላቀል' })}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t({ en: 'Recent Activity', am: 'የቅርብ ጊዜ እንቅስቃሴ' })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <activity.icon className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t({ en: 'Quick Actions', am: 'ፈጣን እርምጃዎች' })}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700 text-white">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {t({ en: 'Schedule Session', am: 'ክፍለ ጊዜ ይያዙ' })}
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquareIcon className="w-4 h-4 mr-2" />
                    {t({ en: 'Send Message', am: 'መልእክት ላክ' })}
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BookOpenIcon className="w-4 h-4 mr-2" />
                    {t({ en: 'Share Resource', am: 'ሀብት አካፍል' })}
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3Icon className="w-4 h-4 mr-2" />
                    {t({ en: 'View Analytics', am: 'ትንታኔ ይመልከቱ' })}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};