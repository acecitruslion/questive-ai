import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from "recharts";
import {
  TrendingUp,
  Clock,
  Target,
  BookOpen,
  Brain,
  Trophy,
  Calendar,
  Download,
  Filter,
  BarChart3,
  Zap,
  Users,
  Star,
  Flame,
  Award,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  AlertCircle
} from "lucide-react";

const Analytics = () => {
  const [timePeriod, setTimePeriod] = useState("week");
  const [selectedMetric, setSelectedMetric] = useState("performance");

  // Mock data for charts
  const performanceData = [
    { name: 'Mon', score: 85, time: 45, completion: 92 },
    { name: 'Tue', score: 88, time: 52, completion: 88 },
    { name: 'Wed', score: 92, time: 38, completion: 95 },
    { name: 'Thu', score: 87, time: 48, completion: 90 },
    { name: 'Fri', score: 95, time: 55, completion: 96 },
    { name: 'Sat', score: 89, time: 35, completion: 85 },
    { name: 'Sun', score: 91, time: 42, completion: 89 }
  ];

  const learningPathData = [
    { subject: 'JavaScript', progress: 68, color: '#6366f1' },
    { subject: 'Machine Learning', progress: 34, color: '#8b5cf6' },
    { subject: 'Data Structures', progress: 89, color: '#06b6d4' },
    { subject: 'React Development', progress: 0, color: '#10b981' },
    { subject: 'UI/UX Design', progress: 0, color: '#f59e0b' }
  ];

  const skillsRadarData = [
    { skill: 'Problem Solving', current: 85, target: 90 },
    { skill: 'JavaScript', current: 78, target: 85 },
    { skill: 'Algorithms', current: 92, target: 95 },
    { skill: 'System Design', current: 45, target: 70 },
    { skill: 'Communication', current: 68, target: 80 },
    { skill: 'Leadership', current: 52, target: 75 }
  ];

  const timeDistributionData = [
    { name: 'Programming', value: 45, color: '#6366f1' },
    { name: 'Mathematics', value: 25, color: '#8b5cf6' },
    { name: 'Design', value: 15, color: '#06b6d4' },
    { name: 'Theory', value: 15, color: '#10b981' }
  ];

  const weeklyGoalData = [
    { week: 'Week 1', target: 20, actual: 18 },
    { week: 'Week 2', target: 20, actual: 22 },
    { week: 'Week 3', target: 25, actual: 24 },
    { week: 'Week 4', target: 25, actual: 28 }
  ];

  const overallStats = {
    totalStudyTime: "127h 45m",
    averageScore: "91.2%",
    coursesCompleted: 8,
    currentStreak: 15,
    totalPoints: 2847,
    rank: "Top 5%",
    improvement: "+12%",
    weeklyGoalCompletion: "112%"
  };

  const achievements = [
    { title: "JavaScript Expert", description: "Completed advanced JS course", date: "2 days ago", icon: Trophy, color: "text-warning" },
    { title: "Consistent Learner", description: "15-day learning streak", date: "Today", icon: Flame, color: "text-red-500" },
    { title: "Problem Solver", description: "Solved 100 coding problems", date: "1 week ago", icon: Brain, color: "text-primary" },
    { title: "Team Player", description: "Helped 10+ peers", date: "3 days ago", icon: Users, color: "text-accent" }
  ];

  const upcomingMilestones = [
    { title: "Complete ML Fundamentals", progress: 34, target: 100, dueDate: "Next week" },
    { title: "Reach 3000 total points", progress: 2847, target: 3000, dueDate: "3 days" },
    { title: "Maintain 20-day streak", progress: 15, target: 20, dueDate: "5 days" }
  ];

  const aiInsights = [
    {
      type: "performance",
      title: "Performance Trend",
      description: "Your scores have improved by 12% this week. Keep focusing on practice problems to maintain this momentum.",
      severity: "positive",
      action: "Continue current study pattern"
    },
    {
      type: "time",
      title: "Study Time Optimization", 
      description: "You're most productive during 2-4 PM. Consider scheduling challenging topics during this time.",
      severity: "info",
      action: "Optimize schedule"
    },
    {
      type: "weakness",
      title: "Knowledge Gap Identified",
      description: "System Design concepts need attention. Recommended: Take the 'System Architecture' course.",
      severity: "warning",
      action: "Take recommended course"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 animate-fade-in-up">
        <div className="space-y-2">
          <h1 className="text-4xl font-poppins font-bold">
            <span className="text-gradient">Learning Analytics</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            AI-powered insights into your learning journey and performance trends
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">Quarter</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="btn-glass">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card hover-lift">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="text-2xl font-bold text-primary">{overallStats.averageScore}</p>
              </div>
              <div className="flex items-center text-success text-sm">
                <ArrowUp className="w-4 h-4 mr-1" />
                {overallStats.improvement}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Study Time</p>
                <p className="text-2xl font-bold text-secondary">{overallStats.totalStudyTime}</p>
              </div>
              <Clock className="w-6 h-6 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Learning Streak</p>
                <p className="text-2xl font-bold text-accent">{overallStats.currentStreak} days</p>
              </div>
              <Flame className="w-6 h-6 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Class Rank</p>
                <p className="text-2xl font-bold text-warning">{overallStats.rank}</p>
              </div>
              <Trophy className="w-6 h-6 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Performance Trend */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Performance Trend
              </CardTitle>
              <CardDescription>Your learning performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(var(--primary))" 
                    fill="url(#gradientPrimary)" 
                    strokeWidth={3}
                  />
                  <defs>
                    <linearGradient id="gradientPrimary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Learning Progress */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-secondary" />
                Course Progress
              </CardTitle>
              <CardDescription>Progress across all enrolled courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningPathData.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{course.subject}</span>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Time Distribution */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-accent" />
                Study Time Distribution
              </CardTitle>
              <CardDescription>How you spend your learning time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={timeDistributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {timeDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                AI Insights
              </CardTitle>
              <CardDescription>Personalized recommendations for you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="p-3 rounded-lg bg-gradient-glass border border-card-border">
                  <div className="flex items-start space-x-2">
                    <div className={`mt-1 ${
                      insight.severity === 'positive' ? 'text-success' : 
                      insight.severity === 'warning' ? 'text-warning' : 'text-accent'
                    }`}>
                      {insight.severity === 'positive' ? <CheckCircle className="w-4 h-4" /> :
                       insight.severity === 'warning' ? <AlertCircle className="w-4 h-4" /> :
                       <Zap className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{insight.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                      <Button variant="ghost" size="sm" className="mt-2 h-6 text-xs">
                        {insight.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-warning" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 p-2 rounded-lg bg-gradient-glass">
                  <div className={`w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center ${achievement.color}`}>
                    <achievement.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Milestones */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-success" />
                Upcoming Milestones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingMilestones.map((milestone, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{milestone.title}</p>
                    <Badge variant="outline" className="text-xs">
                      {milestone.dueDate}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <Progress 
                      value={(milestone.progress / milestone.target) * 100} 
                      className="h-2" 
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{milestone.progress}</span>
                      <span>{milestone.target}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Goals */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-accent" />
                Weekly Goal Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weeklyGoalData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="week" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="target" fill="hsl(var(--muted))" opacity={0.5} />
                  <Bar dataKey="actual" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;