import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "../hooks/useLanguage";
import {
  SearchIcon,
  BellIcon,
  UserIcon,
  CalendarIcon,
  ClockIcon,
  DownloadIcon,
  CheckCircleIcon,
  BookOpenIcon,
  BarChart3Icon,
  FileTextIcon,
  VideoIcon,
  MessageSquareIcon,
  SettingsIcon,
  HelpCircleIcon,
  LogOutIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  PlayIcon,
  FileIcon,
  ImageIcon,
  FigmaIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SendIcon,
  PlusIcon,
  EditIcon,
  TrashIcon,
  EyeIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon
} from "lucide-react";

// ==================== INTERFACES ====================
interface TodoItem {
  id: string;
  title: string;
  date: string;
  completed: boolean;
}

interface Assessment {
  title: string;
  progress: number;
  type: string;
  dueDate?: string;
}

interface Resource {
  name: string;
  size: string;
  type: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface RecentTask {
  id: string;
  title: string;
  duration: string;
  lessons: string;
  assignments: string;
  icon: string;
  progress: number;
}

interface UpcomingAssessment {
  id: string;
  title: string;
  time: string;
  type: string;
  link?: string;
}

interface StartupDashboardProps {
  user: {
    name: string;
    company: string;
    avatar?: string;
  };
  onLogout: () => void;
}

// ==================== PAGE COMPONENTS ====================
const DashboardPage = ({ user }: { user: any }) => {
  const { t } = useLanguage();
  const [currentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // Initialize data
  useEffect(() => {
    setTodos([
      {
        id: "1",
        title: "Human Interaction Designs",
        date: "Tuesday, 30 July 2025",
        completed: false,
      },
      {
        id: "2",
        title: "Design system Basics",
        date: "Monday, 24 June 2024",
        completed: false,
      },
      {
        id: "3",
        title: "meet with my mentor",
        date: "Friday, 10 June 2024",
        completed: true,
      },
      {
        id: "4",
        title: "basic of financial plan design",
        date: "Friday, 05 June 2024",
        completed: true,
      },
    ]);
  }, []);

  const recentAssessments: Assessment[] = [
    {
      title: "Business model canvas",
      progress: 75,
      type: "assessment",
      dueDate: "2024-07-15",
    },
    {
      title: "Financial planning",
      progress: 30,
      type: "assessment",
      dueDate: "2024-07-20",
    },
  ];

  const resources: Resource[] = [
    {
      name: "pre-preparation.pdf",
      size: "8.5 MB",
      type: "pdf",
      color: "bg-red-500",
      icon: FileIcon,
    },
    {
      name: "financial_template.png",
      size: "578 KB",
      type: "image",
      color: "bg-green-500",
      icon: ImageIcon,
    },
    {
      name: "what_every_startup_should_know.fig",
      size: "2.6 MB",
      type: "figma",
      color: "bg-blue-500",
      icon: FigmaIcon,
    },
  ];

  const hoursData = [
    { month: "Jan", study: 30, online: 25 },
    { month: "Feb", study: 35, online: 30 },
    { month: "Mar", study: 50, online: 45 },
    { month: "Apr", study: 40, online: 35 },
    { month: "May", study: 25, online: 20 },
    { month: "Jun", study: 45, online: 40 },
  ];

  const recentTasks: RecentTask[] = [
    {
      id: "1",
      title: "BMC design",
      duration: "5:30hrs",
      lessons: "05 Lessons",
      assignments: "Assignments",
      icon: "🎯",
      progress: 60,
    },
    {
      id: "2",
      title: "feasibility study of startup idea",
      duration: "4:00hrs",
      lessons: "03 Lessons",
      assignments: "Assignments",
      icon: "🔬",
      progress: 30,
    },
  ];

  const upcomingAssessments: UpcomingAssessment[] = [
    {
      id: "1",
      title: "virtual meeting with Dagi",
      time: "5:30pm",
      type: "meeting",
      link: "https://meet.example.com/123",
    },
    {
      id: "2",
      title: "Community discussion",
      time: "9:00pm",
      type: "discussion",
      link: "https://forum.example.com/456",
    },
  ];

  const handlePreviousMonth = () => {
    const newDate = new Date(selectedYear, selectedMonth - 1, 1);
    setSelectedMonth(newDate.getMonth());
    setSelectedYear(newDate.getFullYear());
  };

  const handleNextMonth = () => {
    const newDate = new Date(selectedYear, selectedMonth + 1, 1);
    setSelectedMonth(newDate.getMonth());
    setSelectedYear(newDate.getFullYear());
  };

  const generateCalendar = () => {
    const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === currentDate.getDate() &&
        selectedMonth === currentDate.getMonth() &&
        selectedYear === currentDate.getFullYear();
      days.push(
        <div
          key={day}
          className={`w-8 h-8 flex items-center justify-center text-sm cursor-pointer hover:bg-blue-100 rounded ${
            isToday ? "bg-orange-500 text-white rounded-full" : "text-gray-700"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: TodoItem = {
        id: Date.now().toString(),
        title: newTodo,
        date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        completed: false,
      };
      setTodos([newTodoItem, ...todos]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const joinMeeting = (link: string) => {
    window.open(link, "_blank");
  };

  const formatFileSize = (size: string) => {
    return size;
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {t({ en: "Hello", am: "ሰላም" })} {user.name} 👋
        </h1>
        <p className="text-gray-600">
          {t({
            en: "Let's Achieve something better today!",
            am: "ዛሬ የተሻለ ነገር እናሳካ!",
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t({
                  en: "Recent Assigned assessment",
                  am: "የቅርብ ጊዜ የተመደበ ግምገማ",
                })}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAssessments.map((assessment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border border-orange-200 rounded-lg"
                >
                  <div className="p-2 bg-orange-100 rounded">
                    <FileTextIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{assessment.title}</h3>
                      {assessment.dueDate && (
                        <span className="text-xs text-gray-500">
                          Due:{" "}
                          {new Date(assessment.dueDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${assessment.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">
                        {assessment.progress}%{" "}
                        {t({ en: "completed", am: "የተጠናቀቀ" })}
                      </span>
                      <Button
                        variant="link"
                        size="sm"
                        className="text-orange-500 h-4 p-0"
                      >
                        {t({ en: "Continue", am: "ቀጥል" })}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Your Resources */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">
                {t({ en: "Your Resources", am: "የእርስዎ ሀብቶች" })}
              </CardTitle>
              <Button variant="link" className="text-orange-500">
                {t({ en: "see more", am: "ተጨማሪ ይመልከቱ" })}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 ${resource.color} rounded flex items-center justify-center`}
                      >
                        <resource.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{resource.name}</p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(resource.size)}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-orange-500"
                    >
                      <DownloadIcon className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hours Spent & Performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t({ en: "Hours Spent", am: "የተሰራ ሰዓት" })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded"></div>
                      <span>{t({ en: "Study", am: "ጥናት" })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-300 rounded"></div>
                      <span>
                        {t({ en: "Online Test", am: "የመስመር ላይ ፈተና" })}
                      </span>
                    </div>
                  </div>

                  <div className="h-40 flex items-end justify-between gap-2">
                    {hoursData.map((data, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className="flex flex-col gap-1 h-32">
                          <div
                            className="bg-orange-500 rounded-t"
                            style={{
                              height: `${(data.study / 50) * 100}%`,
                              minHeight: "4px",
                            }}
                          />
                          <div
                            className="bg-gray-300 rounded-b"
                            style={{
                              height: `${(data.online / 50) * 100}%`,
                              minHeight: "4px",
                            }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t({ en: "Performance", am: "አፈጻጸም" })}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.75)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">75%</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {t({ en: "Your Grade:", am: "የእርስዎ ደረጃ:" })}{" "}
                    <span className="font-bold">8.966</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    {t({ en: "Your Points:", am: "የእርስዎ ነጥብ:" })}{" "}
                    <span className="font-bold">1234</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recently Started Tasks */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">
                {t({
                  en: "Recently started Tasks and assessments",
                  am: "በቅርቡ የተጀመሩ ተግባራት እና ግምገማዎች",
                })}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  {t({ en: "All", am: "ሁሉም" })}
                </Button>
                <Button variant="ghost" size="icon">
                  <SearchIcon className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTasks.map((task, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      index === 0
                        ? "border-orange-300 bg-orange-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{task.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-medium">{task.title}</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <ClockIcon className="w-4 h-4" />
                            {task.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpenIcon className="w-4 h-4" />
                            {task.lessons}
                          </span>
                          <span className="flex items-center gap-1">
                            <FileTextIcon className="w-4 h-4" />
                            {task.assignments}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <PlayIcon className="w-4 h-4" />
                        {t({ en: "Continue", am: "ቀጥል" })}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Calendar */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">
                {new Date(selectedYear, selectedMonth, 1).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}
              </CardTitle>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePreviousMonth}
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleNextMonth}>
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-medium text-gray-500 py-2"
                    >
                      {t({ en: day, am: day })}
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-7 gap-1">{generateCalendar()}</div>
            </CardContent>
          </Card>

          {/* To Do List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t({ en: "To do List", am: "የሚደረግ ዝርዝር" })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder={t({
                    en: "Add new task...",
                    am: "አዲስ ተግባር ያክሉ...",
                  })}
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTodo()}
                />
                <Button onClick={addTodo}>{t({ en: "Add", am: "አክል" })}</Button>
              </div>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {todos.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <button
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                        item.completed
                          ? "bg-orange-500 border-orange-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => toggleTodo(item.id)}
                    >
                      {item.completed && (
                        <CheckCircleIcon className="w-3 h-3 text-white" />
                      )}
                    </button>
                    <div className="flex-1">
                      <p
                        className={`text-sm ${
                          item.completed
                            ? "line-through text-gray-500"
                            : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Assessments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t({ en: "Upcoming assessments", am: "የሚመጡ ግምገማዎች" })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAssessments.map((assessment) => (
                  <div
                    key={assessment.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded">
                        {assessment.type === "meeting" ? (
                          <VideoIcon className="w-4 h-4 text-blue-600" />
                        ) : (
                          <MessageSquareIcon className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {assessment.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {assessment.time}
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() =>
                        assessment.link && joinMeeting(assessment.link)
                      }
                    >
                      {t({ en: "Join", am: "ተቀላቀል" })}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

const TasksPage = () => {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', priority: 'medium' });
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Business Model Canvas',
      description: 'Design and finalize the business model canvas for your startup',
      dueDate: '2024-01-20',
      priority: 'high',
      status: 'active',
      progress: 75,
      assignedBy: 'Mentor Sarah',
      category: 'business'
    },
    {
      id: 2,
      title: 'Market Research Analysis',
      description: 'Conduct comprehensive market research and analysis',
      dueDate: '2024-01-25',
      priority: 'medium',
      status: 'active',
      progress: 30,
      assignedBy: 'Mentor John',
      category: 'research'
    },
    {
      id: 3,
      title: 'Financial Projections',
      description: 'Create 3-year financial projections for your startup',
      dueDate: '2024-01-15',
      priority: 'high',
      status: 'finished',
      progress: 100,
      assignedBy: 'Mentor Sarah',
      category: 'finance'
    }
  ]);

  const filteredTasks = tasks.filter(task => {
    if (selectedFilter === 'all') return true;
    return task.status === selectedFilter;
  });

  const handleCreateTask = () => {
    const task = {
      id: tasks.length + 1,
      ...newTask,
      status: 'active',
      progress: 0,
      assignedBy: 'Self-assigned',
      category: 'personal'
    };
    setTasks([...tasks, task]);
    setNewTask({ title: '', description: '', dueDate: '', priority: 'medium' });
    setShowNewTaskModal(false);
  };

  const handleUpdateProgress = (taskId: number, newProgress: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, progress: newProgress, status: newProgress === 100 ? 'finished' : 'active' }
        : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {t({ en: "Tasks", am: "ተግባራት" })}
        </h1>
        <Button 
          className="bg-orange-500 hover:bg-orange-600 text-white"
          onClick={() => setShowNewTaskModal(true)}
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          {t({ en: "New Task", am: "አዲስ ተግባር" })}
        </Button>
      </div>

      {/* Task Filters */}
      <div className="flex gap-4 mb-6">
        <Button 
          variant={selectedFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setSelectedFilter('all')}
          className={selectedFilter === 'all' ? 'bg-orange-500 hover:bg-orange-600' : ''}
        >
          {t({ en: "All", am: "ሁሉም" })} ({tasks.length})
        </Button>
        <Button 
          variant={selectedFilter === 'active' ? 'default' : 'outline'}
          onClick={() => setSelectedFilter('active')}
          className={selectedFilter === 'active' ? 'bg-orange-500 hover:bg-orange-600' : ''}
        >
          {t({ en: "Active", am: "ንቁ" })} ({tasks.filter(t => t.status === 'active').length})
        </Button>
        <Button 
          variant={selectedFilter === 'finished' ? 'default' : 'outline'}
          onClick={() => setSelectedFilter('finished')}
          className={selectedFilter === 'finished' ? 'bg-orange-500 hover:bg-orange-600' : ''}
        >
          {t({ en: "Finished", am: "የተጠናቀቀ" })} ({tasks.filter(t => t.status === 'finished').length})
        </Button>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <Card key={task.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{task.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    {task.status === 'finished' && (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{task.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      {task.assignedBy}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{t({ en: "Progress", am: "እድገት" })}</span>
                        <span>{task.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                    {task.status === 'active' && (
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleUpdateProgress(task.id, Math.min(task.progress + 25, 100))}
                        >
                          +25%
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                          onClick={() => handleUpdateProgress(task.id, 100)}
                        >
                          {t({ en: "Complete", am: "አጠናቅቅ" })}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Task Modal */}
      {showNewTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{t({ en: "Create New Task", am: "አዲስ ተግባር ይፍጠሩ" })}</h2>
              <Button variant="ghost" onClick={() => setShowNewTaskModal(false)}>×</Button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ en: "Task Title", am: "የተግባር ርዕስ" })}
                </label>
                <Input
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  placeholder={t({ en: "Enter task title", am: "የተግባር ርዕስ ያስገቡ" })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ en: "Description", am: "መግለጫ" })}
                </label>
                <Textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  placeholder={t({ en: "Enter task description", am: "የተግባር መግለጫ ያስገቡ" })}
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Due Date", am: "የመጨረሻ ቀን" })}
                  </label>
                  <Input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Priority", am: "ቅድሚያ" })}
                  </label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                  >
                    <option value="low">{t({ en: "Low", am: "ዝቅተኛ" })}</option>
                    <option value="medium">{t({ en: "Medium", am: "መካከለኛ" })}</option>
                    <option value="high">{t({ en: "High", am: "ከፍተኛ" })}</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={handleCreateTask}
                >
                  {t({ en: "Create Task", am: "ተግባር ይፍጠሩ" })}
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowNewTaskModal(false)}
                >
                  {t({ en: "Cancel", am: "ሰርዝ" })}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TeamPage = () => {
  const { t } = useLanguage();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('member');

  const teamMembers = [
    {
      id: 1,
      name: 'Abebe Kebede',
      role: 'Founder & CEO',
      email: 'abebe@ethiotech.com',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'active',
      joinDate: '2023-01-15',
      skills: ['Leadership', 'Strategy', 'Product Management']
    },
    {
      id: 2,
      name: 'Meron Tadesse',
      role: 'CTO',
      email: 'meron@ethiotech.com',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'active',
      joinDate: '2023-02-01',
      skills: ['Full Stack Development', 'DevOps', 'System Architecture']
    },
    {
      id: 3,
      name: 'Dawit Alemayehu',
      role: 'Marketing Lead',
      email: 'dawit@ethiotech.com',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'active',
      joinDate: '2023-03-10',
      skills: ['Digital Marketing', 'Content Strategy', 'Brand Management']
    },
    {
      id: 4,
      name: 'Sara Mohammed',
      role: 'UI/UX Designer',
      email: 'sara@ethiotech.com',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'pending',
      joinDate: '2024-01-05',
      skills: ['UI Design', 'UX Research', 'Prototyping']
    }
  ];

  const handleInviteMember = () => {
    console.log('Inviting member:', { email: inviteEmail, role: inviteRole });
    setInviteEmail('');
    setInviteRole('member');
    setShowInviteModal(false);
    alert('Invitation sent successfully!');
  };

  const handleRemoveMember = (memberId: number) => {
    if (confirm('Are you sure you want to remove this team member?')) {
      console.log('Removing member:', memberId);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {t({ en: "My Team", am: "የእኔ ቡድን" })}
          </h1>
          <p className="text-gray-600">
            {t({ en: "Manage your startup team members", am: "የስታርት አፕ ቡድን አባላትዎን ያስተዳድሩ" })}
          </p>
        </div>
        <Button 
          className="bg-orange-500 hover:bg-orange-600 text-white"
          onClick={() => setShowInviteModal(true)}
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          {t({ en: "Invite Member", am: "አባል ይጋብዙ" })}
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <UsersIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{t({ en: "Total Members", am: "ጠቅላላ አባላት" })}</p>
                <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{t({ en: "Active Members", am: "ንቁ አባላት" })}</p>
                <p className="text-2xl font-bold text-gray-900">{teamMembers.filter(m => m.status === 'active').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <ClockIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{t({ en: "Pending Invites", am: "በመጠባበቅ ላይ ያሉ ጥሪዎች" })}</p>
                <p className="text-2xl font-bold text-gray-900">{teamMembers.filter(m => m.status === 'pending').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle>{t({ en: "Team Members", am: "የቡድን አባላት" })}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(member.status)}`}>
                        {member.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        Joined: {new Date(member.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex flex-wrap gap-1 mb-2 justify-end">
                    {member.skills.slice(0, 2).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{member.skills.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <MessageSquareIcon className="w-3 h-3 mr-1" />
                      {t({ en: "Message", am: "መልእክት" })}
                    </Button>
                    <Button size="sm" variant="outline">
                      <EyeIcon className="w-3 h-3 mr-1" />
                      {t({ en: "View", am: "ይመልከቱ" })}
                    </Button>
                    {member.id !== 1 && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleRemoveMember(member.id)}
                      >
                        <TrashIcon className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Invite Member Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{t({ en: "Invite Team Member", am: "የቡድን አባል ይጋብዙ" })}</h2>
              <Button variant="ghost" onClick={() => setShowInviteModal(false)}>×</Button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ en: "Email Address", am: "የኢሜይል አድራሻ" })}
                </label>
                <Input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder={t({ en: "Enter email address", am: "የኢሜይል አድራሻ ያስገቡ" })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ en: "Role", am: "ሚና" })}
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                >
                  <option value="member">{t({ en: "Team Member", am: "የቡድን አባል" })}</option>
                  <option value="lead">{t({ en: "Team Lead", am: "የቡድን መሪ" })}</option>
                  <option value="admin">{t({ en: "Admin", am: "አስተዳዳሪ" })}</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={handleInviteMember}
                >
                  {t({ en: "Send Invitation", am: "ጥሪ ላክ" })}
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowInviteModal(false)}
                >
                  {t({ en: "Cancel", am: "ሰርዝ" })}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MentorPage = () => {
  const { t } = useLanguage();
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [newMessage, setNewMessage] = useState('');

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      expertise: 'Business Strategy & Product Development',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.9,
      sessions: 45,
      status: 'online',
      lastMessage: 'Great progress on your business model! Let\'s schedule our next session.',
      timestamp: '2 hours ago',
      messages: [
        { id: 1, sender: 'mentor', content: 'Hi! How is your business model canvas coming along?', timestamp: '10:30 AM' },
        { id: 2, sender: 'startup', content: 'I\'ve made good progress! I completed the value proposition section.', timestamp: '10:45 AM' },
        { id: 3, sender: 'mentor', content: 'That\'s excellent! Can you share it with me for review?', timestamp: '11:00 AM' },
        { id: 4, sender: 'mentor', content: 'Great progress on your business model! Let\'s schedule our next session.', timestamp: '2:30 PM' }
      ]
    },
    {
      id: 2,
      name: 'John Smith',
      expertise: 'Technology & Innovation',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.8,
      sessions: 32,
      status: 'away',
      lastMessage: 'The technical architecture looks solid. Consider scalability for future growth.',
      timestamp: '1 day ago',
      messages: [
        { id: 1, sender: 'startup', content: 'I need help with the technical architecture of our platform.', timestamp: 'Yesterday 2:00 PM' },
        { id: 2, sender: 'mentor', content: 'I\'d be happy to help! What specific challenges are you facing?', timestamp: 'Yesterday 2:15 PM' },
        { id: 3, sender: 'mentor', content: 'The technical architecture looks solid. Consider scalability for future growth.', timestamp: 'Yesterday 3:00 PM' }
      ]
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      mentor: 'Dr. Sarah Johnson',
      title: 'Business Strategy Review',
      date: '2024-01-20',
      time: '14:00',
      duration: 60,
      type: 'video',
      status: 'confirmed'
    },
    {
      id: 2,
      mentor: 'John Smith',
      title: 'Technical Architecture Discussion',
      date: '2024-01-22',
      time: '10:00',
      duration: 45,
      type: 'video',
      status: 'pending'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const newMsg = {
        id: selectedChat.messages.length + 1,
        sender: 'startup',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      selectedChat.messages.push(newMsg);
      setNewMessage('');
    }
  };

  const handleScheduleSession = (mentorId: number) => {
    alert(`Scheduling session with mentor ${mentorId}`);
  };

  const handleJoinSession = (sessionId: number) => {
    alert(`Joining session ${sessionId}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {t({ en: "Connect With Mentor", am: "ከአማካሪ ጋር ተገናኝ" })}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mentors List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>{t({ en: "Your Mentors", am: "የእርስዎ አማካሪዎች" })}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 border-b ${
                    selectedChat?.id === mentor.id ? 'bg-orange-50 border-orange-200' : ''
                  }`}
                  onClick={() => setSelectedChat(mentor)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={mentor.avatar} 
                        alt={mentor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        mentor.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900">{mentor.name}</h3>
                      <p className="text-sm text-gray-600 truncate">{mentor.expertise}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-500">{mentor.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{mentor.sessions} sessions</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate mt-1">{mentor.lastMessage}</p>
                      <p className="text-xs text-gray-400">{mentor.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2">
          {selectedChat ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={selectedChat.avatar} 
                      alt={selectedChat.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{selectedChat.name}</h3>
                      <p className="text-sm text-gray-600">{selectedChat.expertise}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleScheduleSession(selectedChat.id)}
                    >
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {t({ en: "Schedule", am: "ይያዙ" })}
                    </Button>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      <VideoIcon className="w-4 h-4 mr-1" />
                      {t({ en: "Video Call", am: "የቪዲዮ ጥሪ" })}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-[400px]">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 p-4">
                  {selectedChat.messages.map((message: any) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'startup' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'startup'
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'startup' ? 'text-orange-200' : 'text-gray-500'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder={t({ en: 'Type your message...', am: 'መልእክትዎን ይተይቡ...' })}
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button 
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={handleSendMessage}
                    >
                      <SendIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <MessageSquareIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>{t({ en: 'Select a mentor to start messaging', am: 'መልእክት ለመላክ አማካሪ ይምረጡ' })}</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Upcoming Sessions */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>{t({ en: "Upcoming Sessions", am: "የሚመጡ ክፍለ ጊዜዎች" })}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <VideoIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{session.title}</h3>
                    <p className="text-sm text-gray-600">with {session.mentor}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {new Date(session.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {session.time} ({session.duration}min)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    session.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {session.status}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => handleJoinSession(session.id)}
                  >
                    <VideoIcon className="w-3 h-3 mr-1" />
                    {t({ en: "Join", am: "ተቀላቀል" })}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProfilePage = ({ user }: { user: any }) => {
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user.name,
    company: user.company,
    email: 'abebe@ethiotech.com',
    phone: '+251 911 123 456',
    bio: 'Passionate entrepreneur building innovative solutions for the Ethiopian market.',
    industry: 'Technology',
    founded: '2023',
    teamSize: '4',
    location: 'Addis Ababa, Ethiopia',
    website: 'https://ethiotech.com',
    linkedin: 'https://linkedin.com/in/abebe-kebede',
    skills: ['Product Management', 'Business Strategy', 'Team Leadership', 'Market Research']
  });

  const handleSaveProfile = () => {
    console.log('Saving profile:', profile);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const achievements = [
    {
      title: 'Completed Business Model Canvas',
      date: '2024-01-15',
      icon: CheckCircleIcon,
      color: 'text-green-500'
    },
    {
      title: 'Reached 1000 Users',
      date: '2024-01-10',
      icon: TrendingUpIcon,
      color: 'text-blue-500'
    },
    {
      title: 'Secured Seed Funding',
      date: '2023-12-20',
      icon: StarIcon,
      color: 'text-yellow-500'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {t({ en: "My Profile", am: "የእኔ መገለጫ" })}
        </h1>
        <Button 
          className={isEditing ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}
          variant={isEditing ? "default" : "outline"}
          onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
        >
          {isEditing ? (
            <>
              <CheckCircleIcon className="w-4 h-4 mr-2" />
              {t({ en: "Save Changes", am: "ለውጦችን አስቀምጥ" })}
            </>
          ) : (
            <>
              <EditIcon className="w-4 h-4 mr-2" />
              {t({ en: "Edit Profile", am: "መገለጫ አርትዕ" })}
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t({ en: "Personal Information", am: "የግል መረጃ" })}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6">
                <img
                  src={user.avatar || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                {isEditing && (
                  <Button variant="outline">
                    {t({ en: "Change Photo", am: "ፎቶ ቀይር" })}
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Full Name", am: "ሙሉ ስም" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Company", am: "ኩባንያ" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.company}
                      onChange={(e) => setProfile({...profile, company: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.company}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Email", am: "ኢሜይል" })}
                  </label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Phone", am: "ስልክ" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ en: "Bio", am: "ባዮግራፊ" })}
                </label>
                {isEditing ? (
                  <Textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-900">{profile.bio}</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t({ en: "Company Information", am: "የኩባንያ መረጃ" })}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Industry", am: "ኢንዱስትሪ" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.industry}
                      onChange={(e) => setProfile({...profile, industry: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.industry}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Founded", am: "የተመሰረተበት" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.founded}
                      onChange={(e) => setProfile({...profile, founded: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.founded}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Team Size", am: "የቡድን መጠን" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.teamSize}
                      onChange={(e) => setProfile({...profile, teamSize: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.teamSize} members</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Location", am: "አካባቢ" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.location}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "Website", am: "ድረ-ገጽ" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.website}
                      onChange={(e) => setProfile({...profile, website: e.target.value})}
                    />
                  ) : (
                    <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                      {profile.website}
                    </a>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t({ en: "LinkedIn", am: "ሊንክድኢን" })}
                  </label>
                  {isEditing ? (
                    <Input
                      value={profile.linkedin}
                      onChange={(e) => setProfile({...profile, linkedin: e.target.value})}
                    />
                  ) : (
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t({ en: "Skills", am: "ችሎታዎች" })}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <PlusIcon className="w-4 h-4 mr-1" />
                    {t({ en: "Add Skill", am: "ችሎታ ያክሉ" })}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>{t({ en: "Achievements", am: "ስኬቶች" })}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                      <p className="text-xs text-gray-500">{new Date(achievement.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>{t({ en: "Quick Stats", am: "ፈጣን ስታቲስቲክስ" })}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{t({ en: "Mentor Sessions", am: "የአማካሪ ክፍለ ጊዜዎች" })}</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{t({ en: "Tasks Completed", am: "የተጠናቀቁ ተግባራት" })}</span>
                  <span className="font-medium">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{t({ en: "Progress", am: "እድገት" })}</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{t({ en: "Member Since", am: "አባል ከሆነበት" })}</span>
                  <span className="font-medium">Jan 2023</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  const { t } = useLanguage();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      mentorMessages: true,
      taskReminders: true,
      sessionReminders: true
    },
    privacy: {
      profileVisibility: 'mentors',
      showProgress: true,
      allowMessages: true
    },
    preferences: {
      language: 'en',
      timezone: 'Africa/Addis_Ababa',
      theme: 'light'
    }
  });

  const handleSaveSettings = () => {
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {t({ en: "Settings", am: "ቅንብሮች" })}
      </h1>

      <div className="space-y-6">
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>{t({ en: "Notification Settings", am: "የማሳወቂያ ቅንብሮች" })}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{t({ en: "Email Notifications", am: "የኢሜይል ማሳወቂያዎች" })}</h3>
                <p className="text-sm text-gray-600">{t({ en: "Receive notifications via email", am: "በኢሜይል ማሳወቂያዎችን ይቀበሉ" })}</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.email}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, email: e.target.checked }
                })}
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{t({ en: "Push Notifications", am: "የፑሽ ማሳወቂያዎች" })}</h3>
                <p className="text-sm text-gray-600">{t({ en: "Receive push notifications", am: "የፑሽ ማሳወቂያዎችን ይቀበሉ" })}</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.push}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, push: e.target.checked }
                })}
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{t({ en: "Mentor Messages", am: "የአማካሪ መልእክቶች" })}</h3>
                <p className="text-sm text-gray-600">{t({ en: "Get notified about new mentor messages", am: "ስለአዲስ የአማካሪ መልእክቶች ማሳወቂያ ይቀበሉ" })}</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.mentorMessages}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, mentorMessages: e.target.checked }
                })}
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{t({ en: "Task Reminders", am: "የተግባር አስታዋሾች" })}</h3>
                <p className="text-sm text-gray-600">{t({ en: "Get reminded about pending tasks", am: "ስለሚጠበቁ ተግባራት ማስታወሻ ይቀበሉ" })}</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.taskReminders}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, taskReminders: e.target.checked }
                })}
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{t({ en: "Session Reminders", am: "የክፍለ ጊዜ አስታዋሾች" })}</h3>
                <p className="text-sm text-gray-600">{t({ en: "Get reminded about upcoming sessions", am: "ስለሚመጡ ክፍለ ጊዜዎች ማስታወሻ ይቀበሉ" })}</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.sessionReminders}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, sessionReminders: e.target.checked }
                })}
                className="w-4 h-4"
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle>{t({ en: "Privacy Settings", am: "የግላዊነት ቅንብሮች" })}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ en: "Profile Visibility", am: "የመገለጫ ታይነት" })}
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                value={settings.privacy.profileVisibility}
                onChange={(e) => setSettings({
                  ...settings,
                  privacy: { ...settings.privacy, profileVisibility: e.target.value }
                })}
              >
                <option value="public">{t({ en: "Public", am: "ሁሉም" })}</option>
                <option value="mentors">{t({ en: "Mentors Only", am: "አማካሪዎች ብቻ" })}</option>
                <option value="private">{t({ en: "Private", am: "ግላዊ" })}</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{t({ en: "Show Progress", am: "እድገት አሳይ" })}</h3>
                <p className="text-sm text-gray-600">{t({ en: "Allow others to see your progress", am: "ሌሎች እድገትዎን እንዲያዩ ፍቀድ" })}</p>
              </div>
              <input
                type="checkbox"
                checked={settings.privacy.showProgress}
                onChange={(e) => setSettings({
                  ...settings,
                  privacy: { ...settings.privacy, showProgress: e.target.checked }
                })}
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{t({ en: "Allow Messages", am: "መልእክቶችን ፍቀድ" })}</h3>
                <p className="text-sm text-gray-600">{t({ en: "Allow others to send you messages", am: "ሌሎች መልእክት እንዲልኩልዎ ፍቀድ" })}</p>
              </div>
              <input
                type="checkbox"
                checked={settings.privacy.allowMessages}
                onChange={(e) => setSettings({
                  ...settings,
                  privacy: { ...settings.privacy, allowMessages: e.target.checked }
                })}
                className="w-4 h-4"
              />
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>{t({ en: "Preferences", am: "ምርጫዎች" })}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ en: "Language", am: "ቋንቋ" })}
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={settings.preferences.language}
                  onChange={(e) => setSettings({
                    ...settings,
                    preferences: { ...settings.preferences, language: e.target.value }
                  })}
                >
                  <option value="en">English</option>
                  <option value="am">አማርኛ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ en: "Timezone", am: "የሰዓት ዞን" })}
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={settings.preferences.timezone}
                  onChange={(e) => setSettings({
                    ...settings,
                    preferences: { ...settings.preferences, timezone: e.target.value }
                  })}
                >
                  <option value="Africa/Addis_Ababa">Africa/Addis_Ababa</option>
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">America/New_York</option>
                  <option value="Europe/London">Europe/London</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ en: "Theme", am: "ገጽታ" })}
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                value={settings.preferences.theme}
                onChange={(e) => setSettings({
                  ...settings,
                  preferences: { ...settings.preferences, theme: e.target.value }
                })}
              >
                <option value="light">{t({ en: "Light", am: "ብሩህ" })}</option>
                <option value="dark">{t({ en: "Dark", am: "ጨለማ" })}</option>
                <option value="auto">{t({ en: "Auto", am: "ራስ-ሰር" })}</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={handleSaveSettings}
          >
            {t({ en: "Save Settings", am: "ቅንብሮችን አስቀምጥ" })}
          </Button>
        </div>
      </div>
    </div>
  );
};

const HelpPage = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: { en: 'How do I communicate with my mentor?', am: 'ከአማካሪዬ ጋር እንዴት እገናኛለሁ?' },
      answer: { en: 'You can communicate with your mentor through the Messages section or schedule video calls through the Connect With Mentor page.', am: 'በመልእክቶች ክፍል በኩል ወይም በአማካሪ ጋር ተገናኝ ገጽ በኩል የቪዲዮ ጥሪዎችን በማዘጋጀት ከአማካሪዎ ጋር መገናኘት ይችላሉ።' }
    },
    {
      question: { en: 'How do I track my progress?', am: 'እድገቴን እንዴት እከታተላለሁ?' },
      answer: { en: 'Your progress is automatically tracked based on completed tasks and assessments. You can view your overall progress on the dashboard.', am: 'እድገትዎ በተጠናቀቁ ተግባራት እና ግምገማዎች ላይ በመመስረት በራስ-ሰር ይከታተላል። አጠቃላይ እድገትዎን በዳሽቦርድ ላይ ማየት ይችላሉ።' }
    },
    {
      question: { en: 'How do I add team members?', am: 'የቡድን አባላትን እንዴት እጨምራለሁ?' },
      answer: { en: 'Go to the My Team page and click "Invite Member". Enter their email address and select their role to send an invitation.', am: 'ወደ የእኔ ቡድን ገጽ ይሂዱ እና "አባል ይጋብዙ" ን ይጫኑ። የኢሜይል አድራሻቸውን ያስገቡ እና ጥሪ ለመላክ ሚናቸውን ይምረጡ።' }
    },
    {
      question: { en: 'Can I customize my dashboard?', am: 'ዳሽቦርዴን ማበጀት እችላለሁ?' },
      answer: { en: 'Yes! You can customize notifications, privacy settings, and preferences in the Settings page.', am: 'አዎ! በቅንብሮች ገጽ ውስጥ ማሳወቂያዎችን፣ የግላዊነት ቅንብሮችን እና ምርጫዎችን ማበጀት ይችላሉ።' }
    }
  ];

  const contactInfo = [
    {
      icon: MailIcon,
      label: { en: 'Email Support', am: 'የኢሜይል ድጋፍ' },
      value: 'support@wofekomech.et',
      action: 'mailto:support@wofekomech.et'
    },
    {
      icon: PhoneIcon,
      label: { en: 'Phone Support', am: 'የስልክ ድጋፍ' },
      value: '+251 11 123 4567',
      action: 'tel:+251111234567'
    },
    {
      icon: MessageSquareIcon,
      label: { en: 'Live Chat', am: 'ቀጥታ ውይይት' },
      value: { en: 'Available 9 AM - 6 PM', am: 'ከጠዋቱ 9 - ከምሽቱ 6 ሰዓት ይገኛል' },
      action: '#'
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {t({ en: "Help & Support", am: "እርዳታ እና ድጋፍ" })}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>{t({ en: "Frequently Asked Questions", am: "በተደጋጋሚ የሚጠየቁ ጥያቄዎች" })}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="font-medium text-gray-900 mb-2">{t(faq.question)}</h3>
                  <p className="text-sm text-gray-600">{t(faq.answer)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card>
          <CardHeader>
            <CardTitle>{t({ en: "Contact Support", am: "ድጋፍን ያግኙ" })}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <contact.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{t(contact.label)}</h3>
                    <p className="text-sm text-gray-600">
                      {typeof contact.value === 'string' ? contact.value : t(contact.value)}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(contact.action, '_blank')}
                  >
                    {t({ en: "Contact", am: "ያግኙ" })}
                  </Button>
                </div>
              ))}
            </div>

            {/* Quick Help Form */}
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-3">
                {t({ en: "Quick Help Request", am: "ፈጣን እርዳታ ጥያቄ" })}
              </h3>
              <div className="space-y-3">
                <Input placeholder={t({ en: "Subject", am: "ርዕስ" })} />
                <Textarea 
                  placeholder={t({ en: "Describe your issue...", am: "ችግርዎን ይግለጹ..." })} 
                  rows={3}
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <SendIcon className="w-4 h-4 mr-2" />
                  {t({ en: "Send Request", am: "ጥያቄ ላክ" })}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// ==================== MAIN DASHBOARD COMPONENT =======