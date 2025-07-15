import { MoreHorizontalIcon, TrendingUpIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { PerformanceData } from "../../../../hooks/useDashboardData";

interface PerformanceChartSectionProps {
  performance: PerformanceData;
  loading: boolean;
}

export const PerformanceChartSection: React.FC<PerformanceChartSectionProps> = ({ 
  performance, 
  loading 
}) => {
  const [animatedValues, setAnimatedValues] = useState({
    mentoredStartups: 0,
    goalAchieved: 0,
    lateTasks: 0,
  });

  // Animate values on mount
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setAnimatedValues(performance);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [performance, loading]);

  const performanceData = [
    {
      label: "Mentored Startups",
      percentage: `${animatedValues.mentoredStartups}%`,
      color: "bg-blue-600",
      textColor: "text-white",
      value: animatedValues.mentoredStartups,
    },
    {
      label: "Goal Achieved",
      percentage: `${animatedValues.goalAchieved}%`,
      color: "bg-gray-400",
      textColor: "text-white",
      value: animatedValues.goalAchieved,
    },
    {
      label: "Late Tasks",
      percentage: `${animatedValues.lateTasks}%`,
      color: "bg-purple-200",
      textColor: "text-purple-700",
      value: animatedValues.lateTasks,
    },
  ];

  const totalValue = performanceData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="w-full h-full border border-gray-200 rounded-2xl shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold text-gray-900">
          This Month Performance
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
          <MoreHorizontalIcon className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Animated Progress Circles */}
        <div className="relative flex justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="8"
              />
              
              {/* Progress circles */}
              {performanceData.map((item, index) => {
                const circumference = 2 * Math.PI * 40;
                const strokeDasharray = circumference;
                const strokeDashoffset = circumference - (item.value / 100) * circumference;
                const rotation = index * 120; // Distribute evenly
                
                return (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={item.color.replace('bg-', '#')}
                    strokeWidth="6"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={loading ? circumference : strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                    style={{
                      transformOrigin: '50% 50%',
                      transform: `rotate(${rotation}deg)`,
                    }}
                  />
                );
              })}
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {loading ? "..." : `${totalValue}%`}
                </div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {performanceData.map((item, index) => (
            <div key={index} className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${item.color} transition-transform duration-200 group-hover:scale-110`} />
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">
                  {item.percentage}
                </span>
                {item.value > 50 && (
                  <TrendingUpIcon className="w-4 h-4 text-green-500" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Summary */}
        <div className="pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500 text-center">
            Performance metrics updated in real-time
          </div>
        </div>
      </CardContent>
    </Card>
  );
};