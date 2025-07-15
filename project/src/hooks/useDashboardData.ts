import { useState, useEffect } from 'react';

export interface Appointment {
  id: string;
  startup: string;
  name: string;
  email: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface DashboardStats {
  todaysAppointments: number;
  assignedStartups: number;
  pendingTasks: number;
  completedTasks: number;
  taskCompletionRate: number;
}

export interface PerformanceData {
  mentoredStartups: number;
  goalAchieved: number;
  lateTasks: number;
}

export const useDashboardData = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    todaysAppointments: 0,
    assignedStartups: 0,
    pendingTasks: 0,
    completedTasks: 0,
    taskCompletionRate: 0,
  });
  const [performance, setPerformance] = useState<PerformanceData>({
    mentoredStartups: 60,
    goalAchieved: 30,
    lateTasks: 10,
  });
  const [loading, setLoading] = useState(true);

  // Simulate API calls
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock appointments data
      const mockAppointments: Appointment[] = [
        {
          id: '1',
          startup: 'TechFlow',
          name: 'Sarah Johnson',
          email: 'sarah@techflow.com',
          date: '2025-01-20',
          time: '09:00',
          status: 'upcoming',
        },
        {
          id: '2',
          startup: 'DataViz Pro',
          name: 'Michael Chen',
          email: 'michael@dataviz.com',
          date: '2025-01-20',
          time: '14:30',
          status: 'upcoming',
        },
        {
          id: '3',
          startup: 'GreenTech',
          name: 'Emma Wilson',
          email: 'emma@greentech.io',
          date: '2025-01-21',
          time: '10:15',
          status: 'upcoming',
        },
        {
          id: '4',
          startup: 'FinanceAI',
          name: 'David Rodriguez',
          email: 'david@financeai.com',
          date: '2025-01-21',
          time: '16:00',
          status: 'upcoming',
        },
        {
          id: '5',
          startup: 'HealthSync',
          name: 'Lisa Park',
          email: 'lisa@healthsync.com',
          date: '2025-01-22',
          time: '11:30',
          status: 'upcoming',
        },
      ];

      // Mock stats
      const mockStats: DashboardStats = {
        todaysAppointments: 2,
        assignedStartups: 12,
        pendingTasks: 8,
        completedTasks: 24,
        taskCompletionRate: 75,
      };

      setAppointments(mockAppointments);
      setStats(mockStats);
      setLoading(false);
    };

    fetchData();

    // Set up real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        taskCompletionRate: Math.max(0, Math.min(100, prev.taskCompletionRate + (Math.random() - 0.5) * 2)),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const markAppointmentComplete = (id: string) => {
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === id ? { ...apt, status: 'completed' as const } : apt
      )
    );
  };

  const cancelAppointment = (id: string) => {
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === id ? { ...apt, status: 'cancelled' as const } : apt
      )
    );
  };

  return {
    appointments,
    stats,
    performance,
    loading,
    markAppointmentComplete,
    cancelAppointment,
  };
};