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
  TrendingDownIcon,
  RocketIcon,
  LightbulbIcon,
  TargetIcon,
  BrainIcon
} from 'lucide-react';

interface StartupDashboardProps {
  user: any;
  onLogout: () => void;
}

export const StartupDashboard: React.FC<StartupDashboardProps> = ({ user, onLogout }) => {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [activeSection, setActiveSection] = useState('dashboard');

  const sidebarItems = [
    { 
      id: 'dashboard',
      icon: BarChart3Icon, 
      label: { en: 'Dashboard', am: 'ዳሽቦርድ' }, 
      active: activeSection === 'dashboard' 
    },
    { 
      id: 'progress',
      icon: TrendingUpIcon, 
      label: { en: 'My Progress', am: 'የእኔ እድገት' },
      active: activeSection === 'progress'
    },
    { 
      id: 'mentor',
      icon: UsersIcon, 
      label: { en: 'My Mentor', am: 'የእኔ አማካሪ' },
      active: activeSection === 'mentor'
    },
    { 
      id: 'tasks',
      icon: CheckCircleIcon, 
      label: { en: 'Tasks & Goals', am: 'ተግባራት እና ግቦች' },
      active: activeSection === 'tasks'
    },
    { 
      id: 'resources',
      icon: BookOpenIcon, 
      label: { en: 'Resources', am: 'ሀብቶች' },
      active: activeSection === 'resources'
    },
    { 
      id: 'community',
      icon: MessageSquareIcon, 
      label: { en: 'Community', am: 'ማህበረሰብ' },
      active: activeSection === 'community'
    },
    { 
      id: 'funding',
      icon: DollarSignIcon, 
      label: { en: 'Funding', am: 'ገንዘብ ማሰባሰብ' },
      active: activeSection === 'funding'
    },
    { 
      id: 'analytics',
      icon: BarChart3Icon, 
      label: { en: 'Analytics', am: 'ትንታኔ' },
      active: activeSection === 'analytics'
    },
    { 
      id: 'settings',
      icon: SettingsIcon, 
      label: { en: 'Settings', am: 'ቅንብሮች' },
      active: activeSection === 'settings'
    },
    { 
      id: 'help',
      icon: HelpCircleIcon, 
      label: { en: 'Help', am: 'እርዳታ' },
      active: activeSection === 'help'
    },
    { 
      id: 'logout',
      icon: LogOutIcon, 
      label: { en: 'Logout', am: 'ውጣ' }, 
      onClick: onLogout,
      active: false
    }
  ];

  const stats = [
    {
      title: { en: 'Current Generation', am: 'አሁኑ ትውልድ' },
      value: 'Gen 2',
      change: '+1',
      trend: 'up',
      icon: RocketIcon,
      color: 'bg-blue-500'
    },
    {
      title: { en: 'Progress', am: 'እድገት' },
      value: '65%',
      change: '+12%',
      trend: 'up',
      icon: TrendingUpIcon,
      color: 'bg-green-500'
    },
    {
      title: { en: 'Tasks Completed', am: 'የተጠናቀቁ ተግባራት' },
      value: '24/30',
      change: '+3',
      trend: 'up',
      icon: CheckCircleIcon,
      color: 'bg-purple-500'
    },
    {
      title: { en: 'Mentor Rating', am: 'የአማካሪ ደረጃ' },
      value: '4.8',
      change: '+0.2',
      trend: 'up',
      icon: StarIcon,
      color: 'bg-yellow-500'
    }
  ];

  const renderDashboardContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>{t({ en: 'Recent Activities', am: 'የቅርብ ጊዜ እንቅስቃሴዎች' })}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        <div>
                          <p className="font-medium">Completed Market Research Task</p>
                          <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                        <VideoIcon className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium">Mentoring Session Scheduled</p>
                          <p className="text-sm text-gray-500">Tomorrow at 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <AwardIcon className="w-5 h-5 text-purple-500" />
                        <div>
                          <p className="font-medium">Milestone Achieved: MVP Planning</p>
                          <p className="text-sm text-gray-500">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t({ en: 'Next Steps', am: 'ቀጣይ እርምጃዎች' })}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Complete user interviews</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Review mentor feedback</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Update business model</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t({ en: 'Quick Actions', am: 'ፈጣን እርምጃዎች' })}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                      <MessageSquareIcon className="w-4 h-4 mr-2" />
                      {t({ en: 'Message Mentor', am: 'አማካሪን መልእክት ላክ' })}
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {t({ en: 'Schedule Session', am: 'ክፍለ ጊዜ ይያዙ' })}
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <BookOpenIcon className="w-4 h-4 mr-2" />
                      {t({ en: 'Browse Resources', am: 'ሀብቶችን ያስሱ' })}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'My Progress Journey', am: 'የእኔ የእድገት ጉዞ' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Generation 2: Development</span>
                    <span className="text-2xl font-bold text-blue-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="font-medium">Completed</p>
                      <p className="text-2xl font-bold text-green-600">24</p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <ClockIcon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <p className="font-medium">In Progress</p>
                      <p className="text-2xl font-bold text-yellow-600">4</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <AlertCircleIcon className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                      <p className="font-medium">Remaining</p>
                      <p className="text-2xl font-bold text-gray-600">6</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'mentor':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'My Mentor', am: 'የእኔ አማካሪ' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Mentor"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
                    <p className="text-gray-600">AgriTech & AI Specialist</p>
                    <div className="flex items-center gap-1 mt-1">
                      <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm">4.9 rating</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquareIcon className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline">
                    <VideoIcon className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'tasks':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'Tasks & Goals', am: 'ተግባራት እና ግቦች' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <p className="font-medium">Complete market research</p>
                      <p className="text-sm text-gray-500">Due: Today</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <ClockIcon className="w-5 h-5 text-yellow-500" />
                    <div className="flex-1">
                      <p className="font-medium">Develop MVP wireframes</p>
                      <p className="text-sm text-gray-500">Due: Tomorrow</p>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">In Progress</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <AlertCircleIcon className="w-5 h-5 text-gray-500" />
                    <div className="flex-1">
                      <p className="font-medium">User testing sessions</p>
                      <p className="text-sm text-gray-500">Due: Next week</p>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'My Resources', am: 'የእኔ ሀብቶች' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <BookOpenIcon className="w-8 h-8 text-blue-500 mb-2" />
                    <h3 className="font-medium mb-1">Business Plan Template</h3>
                    <p className="text-sm text-gray-600">Complete template for your business plan</p>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <FileTextIcon className="w-8 h-8 text-green-500 mb-2" />
                    <h3 className="font-medium mb-1">Market Research Guide</h3>
                    <p className="text-sm text-gray-600">Step-by-step market research methodology</p>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <TargetIcon className="w-8 h-8 text-purple-500 mb-2" />
                    <h3 className="font-medium mb-1">MVP Development Kit</h3>
                    <p className="text-sm text-gray-600">Tools and templates for MVP development</p>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <BrainIcon className="w-8 h-8 text-orange-500 mb-2" />
                    <h3 className="font-medium mb-1">Pitch Deck Template</h3>
                    <p className="text-sm text-gray-600">Professional pitch deck for investors</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'community':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'Community Feed', am: 'የማህበረሰብ ዜና' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40" 
                           alt="User" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-medium text-sm">John Doe</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm">Just completed my first user interview! The feedback was incredible and gave me new insights into my target market.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40" 
                           alt="User" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-medium text-sm">Jane Smith</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm">Looking for a technical co-founder for my HealthTech startup. Anyone interested in revolutionizing healthcare in Ethiopia?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'funding':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'Funding Opportunities', am: 'የገንዘብ ማሰባሰቢያ እድሎች' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Seed Funding Program</h3>
                    <p className="text-sm text-gray-600 mb-2">Up to $50,000 for early-stage startups</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Deadline: March 15, 2025</span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Innovation Grant</h3>
                    <p className="text-sm text-gray-600 mb-2">$25,000 grant for innovative solutions</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Deadline: April 1, 2025</span>
                      <Button size="sm" variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'Analytics Dashboard', am: 'የትንታኔ ዳሽቦርድ' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <TrendingUpIcon className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-sm text-gray-600">Task Completion Rate</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <StarIcon className="w-12 h-12 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">4.8</p>
                    <p className="text-sm text-gray-600">Average Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'Account Settings', am: 'የመለያ ቅንብሮች' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input defaultValue={user.name} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input defaultValue={user.email} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <Input defaultValue={user.company} />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'help':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t({ en: 'Help & Support', am: 'እርዳታ እና ድጋፍ' })}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
                    <p className="text-sm text-gray-600">Find answers to common questions</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Contact Support</h3>
                    <p className="text-sm text-gray-600">Get help from our support team</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Video Tutorials</h3>
                    <p className="text-sm text-gray-600">Learn how to use the platform</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">Select a menu item to view content</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600">StartupHub</h1>
        </div>
        
        <nav className="flex-1 px-4 py-6">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors mb-1 ${
                item.active ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                } else {
                  setActiveSection(item.id);
                }
              }}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{t(item.label)}</span>
            </div>
          ))}
        </nav>

        {/* User Profile Card */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.company}</p>
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
                {t({ en: 'Startup Dashboard', am: 'የስታርት አፕ ዳሽቦርድ' })}
              </h1>
              <p className="text-gray-600">
                {t({ en: 'Track your progress and manage your startup journey', am: 'እድገትዎን ይከታተሉ እና የስታርት አፕ ጉዞዎን ያስተዳድሩ' })}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder={t({ en: 'Search...', am: 'ፈልግ...' })}
                  className="pl-10 w-64"
                />
              </div>
              
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Button>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <PlusIcon className="w-4 h-4 mr-2" />
                {t({ en: 'New Task', am: 'አዲስ ተግባር' })}
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {renderDashboardContent()}
        </main>
      </div>
    </div>
  );
};