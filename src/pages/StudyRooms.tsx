import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Users,
  Plus,
  Search,
  Clock,
  BookOpen,
  Mic,
  Video,
  MessageSquare,
  UserPlus,
  Crown,
  Lock,
  Globe,
  Calendar,
  Target,
  Zap,
  Star
} from "lucide-react";

const StudyRooms = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const studyRooms = [
    {
      id: 1,
      name: "JavaScript Mastery Group",
      description: "Collaborative learning for advanced JavaScript concepts. Working through async/await and promises.",
      subject: "Programming",
      participants: 8,
      maxParticipants: 12,
      isLive: true,
      isPublic: true,
      host: "Sarah Johnson",
      timeRemaining: "2h 15m",
      topic: "Async/Await Patterns",
      difficulty: "Intermediate",
      tags: ["JavaScript", "Async", "Programming"],
      avatar: "🚀"
    },
    {
      id: 2,
      name: "ML Study Circle",
      description: "Deep dive into machine learning algorithms. Currently exploring neural networks and backpropagation.",
      subject: "AI & ML",
      participants: 15,
      maxParticipants: 20,
      isLive: true,
      isPublic: true,
      host: "Dr. Michael Chen",
      timeRemaining: "1h 45m",
      topic: "Neural Network Fundamentals",
      difficulty: "Advanced",
      tags: ["Machine Learning", "Neural Networks", "Python"],
      avatar: "🤖"
    },
    {
      id: 3,
      name: "Data Structures Practice",
      description: "Solving algorithmic problems together. Focus on trees, graphs, and dynamic programming.",
      subject: "Computer Science",
      participants: 6,
      maxParticipants: 10,
      isLive: true,
      isPublic: true,
      host: "Alex Rodriguez",
      timeRemaining: "45m",
      topic: "Graph Algorithms",
      difficulty: "Intermediate",
      tags: ["Algorithms", "Data Structures", "Problem Solving"],
      avatar: "📊"
    },
    {
      id: 4,
      name: "React Development Workshop",
      description: "Building modern React applications with hooks, context, and performance optimization.",
      subject: "Web Development",
      participants: 12,
      maxParticipants: 15,
      isLive: false,
      isPublic: true,
      host: "Emma Wilson",
      scheduledTime: "Tomorrow, 2:00 PM",
      topic: "React Performance Optimization",
      difficulty: "Intermediate",
      tags: ["React", "JavaScript", "Web Development"],
      avatar: "⚛️"
    },
    {
      id: 5,
      name: "Calculus Study Group",
      description: "Working through calculus problems and concepts. Derivatives, integrals, and applications.",
      subject: "Mathematics",
      participants: 4,
      maxParticipants: 8,
      isLive: false,
      isPublic: false,
      host: "Prof. Lisa Park",
      scheduledTime: "Today, 7:00 PM",
      topic: "Integration Techniques",
      difficulty: "Advanced",
      tags: ["Calculus", "Mathematics", "Problem Solving"],
      avatar: "📐"
    },
    {
      id: 6,
      name: "UI/UX Design Critique",
      description: "Share your designs and get feedback from fellow designers. Portfolio reviews and tips.",
      subject: "Design",
      participants: 9,
      maxParticipants: 12,
      isLive: true,
      isPublic: true,
      host: "James Park",
      timeRemaining: "3h 20m",
      topic: "Portfolio Reviews",
      difficulty: "Beginner",
      tags: ["Design", "UI/UX", "Feedback"],
      avatar: "🎨"
    }
  ];

  const myRooms = studyRooms.filter(room => ["JavaScript Mastery Group", "ML Study Circle"].includes(room.name));
  const liveRooms = studyRooms.filter(room => room.isLive);
  const upcomingRooms = studyRooms.filter(room => !room.isLive);

  const filteredRooms = studyRooms.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 animate-fade-in-up">
        <div className="space-y-2">
          <h1 className="text-4xl font-poppins font-bold">
            <span className="text-gradient">Study Rooms</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Join collaborative learning sessions and study with peers worldwide
          </p>
        </div>
        
        <Dialog open={showCreateRoom} onOpenChange={setShowCreateRoom}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              <Plus className="w-5 h-5 mr-2" />
              Create Room
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-card border-0 max-w-md">
            <DialogHeader>
              <DialogTitle>Create Study Room</DialogTitle>
              <DialogDescription>
                Set up a collaborative learning space for you and your peers
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Room name" />
              <Textarea placeholder="Description" className="resize-none" rows={3} />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Subject" />
                <Input placeholder="Max participants" type="number" />
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1" onClick={() => setShowCreateRoom(false)}>
                  Cancel
                </Button>
                <Button className="flex-1 bg-gradient-primary">
                  Create Room
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card className="glass-card">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search study rooms, subjects, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-glass-border focus:border-primary"
            />
          </div>
        </CardContent>
      </Card>

      {/* My Study Rooms */}
      {myRooms.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-poppins font-bold flex items-center">
            <Crown className="w-6 h-6 mr-2 text-warning" />
            My Study Rooms
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myRooms.map((room) => (
              <Card key={room.id} className="glass-card hover-lift group cursor-pointer border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{room.avatar}</div>
                      <div className="flex items-center space-x-2">
                        {room.isLive && (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1"></div>
                            <span className="text-xs font-medium text-red-500">LIVE</span>
                          </div>
                        )}
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Joined
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {room.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{room.participants}/{room.maxParticipants}</span>
                    </div>
                    <Badge variant="outline">{room.difficulty}</Badge>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span className="truncate">{room.topic}</span>
                  </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {room.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                  
                  <Button className="w-full bg-gradient-primary hover:shadow-glow group-hover:scale-105 transition-all duration-normal">
                    {room.isLive ? "Rejoin Room" : "Join Scheduled"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Live Study Rooms */}
      <section className="space-y-4">
        <h2 className="text-2xl font-poppins font-bold flex items-center">
          <Zap className="w-6 h-6 mr-2 text-red-500" />
          Live Now ({liveRooms.length})
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveRooms.map((room) => (
            <Card key={room.id} className="glass-card hover-lift group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{room.avatar}</div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1"></div>
                      <span className="text-xs font-medium text-red-500">LIVE</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {room.isPublic ? (
                      <Globe className="w-4 h-4 text-success" />
                    ) : (
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {room.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {room.description}
                </p>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{room.participants}/{room.maxParticipants}</span>
                  </div>
                  <div className="flex items-center text-red-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{room.timeRemaining}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span className="font-medium">Host:</span>
                  <span className="ml-1">{room.host}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Target className="w-4 h-4 mr-1" />
                  <span className="truncate">{room.topic}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {room.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-gradient-primary hover:shadow-glow group-hover:scale-105 transition-all duration-normal">
                    Join Room
                  </Button>
                  <Button variant="outline" size="sm" className="btn-glass">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Study Rooms */}
      <section className="space-y-4">
        <h2 className="text-2xl font-poppins font-bold flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-accent" />
          Upcoming Sessions
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingRooms.map((room) => (
            <Card key={room.id} className="glass-card hover-lift group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl opacity-60">{room.avatar}</div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Scheduled
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    {room.isPublic ? (
                      <Globe className="w-4 h-4 text-success" />
                    ) : (
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {room.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {room.description}
                </p>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{room.participants}/{room.maxParticipants}</span>
                  </div>
                  <div className="flex items-center text-accent">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-xs">{room.scheduledTime}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span className="font-medium">Host:</span>
                  <span className="ml-1">{room.host}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Target className="w-4 h-4 mr-1" />
                  <span className="truncate">{room.topic}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {room.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 btn-glass">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join Queue
                  </Button>
                  <Button variant="outline" size="sm" className="btn-glass">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card text-center p-4">
          <div className="text-2xl font-bold text-primary">24</div>
          <div className="text-sm text-muted-foreground">Active Rooms</div>
        </Card>
        <Card className="glass-card text-center p-4">
          <div className="text-2xl font-bold text-secondary">156</div>
          <div className="text-sm text-muted-foreground">Online Learners</div>
        </Card>
        <Card className="glass-card text-center p-4">
          <div className="text-2xl font-bold text-accent">8</div>
          <div className="text-sm text-muted-foreground">Subjects Covered</div>
        </Card>
        <Card className="glass-card text-center p-4">
          <div className="text-2xl font-bold text-success">92%</div>
          <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
        </Card>
      </section>
    </div>
  );
};

export default StudyRooms;