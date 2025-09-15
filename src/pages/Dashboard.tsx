import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Clock,
  Target,
  BookOpen,
  Brain,
  Zap,
  TrendingUp,
  Calendar,
  Play,
  Users,
  Star,
  Flame,
  Award,
  ChevronRight,
  BarChart3,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeStreak] = useState(15);
  
  const studentStats = {
    name: "Alex Chen",
    level: "Intermediate",
    totalPoints: 2847,
    weeklyGoal: 1200,
    weeklyProgress: 850,
    streak: activeStreak,
    coursesCompleted: 8,
    coursesInProgress: 3
  };

  const currentCourses = [
    {
      id: 1,
      title: "Advanced JavaScript Concepts",
      progress: 68,
      timeSpent: "45 min today",
      nextLesson: "Async/Await Patterns",
      difficulty: "Intermediate",
      instructor: "Sarah Johnson",
      rating: 4.8
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals", 
      progress: 34,
      timeSpent: "2h 15min this week",
      nextLesson: "Neural Networks Intro",
      difficulty: "Advanced",
      instructor: "Dr. Michael Chen",
      rating: 4.9
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      progress: 89,
      timeSpent: "30 min today",
      nextLesson: "Graph Algorithms",
      difficulty: "Intermediate",
      instructor: "Alex Rodriguez",
      rating: 4.7
    }
  ];

  const achievements = [
    { icon: Trophy, title: "Course Completionist", description: "Completed 5 courses", unlocked: true },
    { icon: Flame, title: "Learning Streak", description: "15 days in a row", unlocked: true },
    { icon: Brain, title: "Quick Learner", description: "Scored 90%+ on 3 quizzes", unlocked: true },
    { icon: Users, title: "Team Player", description: "Helped 10 peers", unlocked: false },
    { icon: Target, title: "Goal Crusher", description: "Met weekly goals 4 times", unlocked: false },
    { icon: Award, title: "Top Performer", description: "Top 10% this month", unlocked: false }
  ];

  const upcomingTasks = [
    { title: "JavaScript Final Quiz", dueIn: "2 hours", priority: "high" },
    { title: "ML Project Submission", dueIn: "Tomorrow", priority: "medium" },
    { title: "Study Group Meeting", dueIn: "3 days", priority: "low" },
  ];

  const recentActivity = [
    { action: "Completed", item: "Promise Handling Lesson", time: "30 min ago", points: 50 },
    { action: "Scored 95% on", item: "JS Fundamentals Quiz", time: "2 hours ago", points: 100 },
    { action: "Joined", item: "Advanced Learners Study Room", time: "Yesterday", points: 25 }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="space-y-2 animate-fade-in-up">
          <h1 className="text-3xl lg:text-4xl font-poppins font-bold">
            Welcome back, <span className="text-gradient">{studentStats.name}</span>! 
          </h1>
          <p className="text-lg text-muted-foreground">
            Ready to continue your learning journey? You're on a {activeStreak}-day streak! 🔥
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <Star className="w-4 h-4 mr-1" />
            {studentStats.level} Learner
          </Badge>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{studentStats.totalPoints}</div>
            <div className="text-sm text-muted-foreground">Total Points</div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card hover-lift">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-3">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-primary">{studentStats.streak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-xl mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-secondary">{studentStats.coursesInProgress}</div>
            <div className="text-sm text-muted-foreground">Active Courses</div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-xl mx-auto mb-3">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-accent">{studentStats.coursesCompleted}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-xl mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-success">94%</div>
            <div className="text-sm text-muted-foreground">Avg Score</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Courses & Progress */}
        <div className="lg:col-span-2 space-y-6">
          {/* Weekly Goal Progress */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Weekly Learning Goal
                  </CardTitle>
                  <CardDescription>
                    {studentStats.weeklyProgress} / {studentStats.weeklyGoal} points this week
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  71% Complete
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress 
                value={(studentStats.weeklyProgress / studentStats.weeklyGoal) * 100} 
                className="h-3 progress-bar"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Keep going!</span>
                <span>{studentStats.weeklyGoal - studentStats.weeklyProgress} points to go</span>
              </div>
            </CardContent>
          </Card>

          {/* Current Courses */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-primary" />
                  Continue Learning
                </div>
                <Link to="/courses">
                  <Button variant="ghost" size="sm">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentCourses.map((course) => (
                <div key={course.id} className="p-4 rounded-xl border border-card-border bg-gradient-glass hover-lift group cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                      <div className="flex items-center space-x-2 text-sm">
                        <Badge variant="outline">{course.difficulty}</Badge>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-warning fill-current mr-1" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow group-hover:scale-105 transition-all duration-normal">
                      <Play className="w-4 h-4 mr-1" />
                      Continue
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress: {course.progress}%</span>
                      <span className="text-muted-foreground">{course.timeSpent}</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Next: {course.nextLesson}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Tasks */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-warning" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-glass">
                  <div>
                    <p className="font-medium text-sm">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.dueIn}</p>
                  </div>
                  <Badge 
                    variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-warning" />
                  Achievements
                </div>
                <Link to="/analytics">
                  <Button variant="ghost" size="sm">
                    <BarChart3 className="w-4 h-4" />
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.slice(0, 4).map((achievement, index) => (
                <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${achievement.unlocked ? 'bg-success/10' : 'bg-muted/20'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.unlocked ? 'bg-success text-white' : 'bg-muted'}`}>
                    <achievement.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{achievement.description}</p>
                  </div>
                  {achievement.unlocked && <CheckCircle className="w-4 h-4 text-success" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-accent" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.action}</span> {activity.item}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                      <Badge variant="outline">+{activity.points} pts</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;