import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Play,
  Clock,
  Users,
  Star,
  BookOpen,
  Code,
  Brain,
  Database,
  Palette,
  Smartphone,
  Globe,
  TrendingUp,
  ChevronRight,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", icon: BookOpen },
    { id: "programming", name: "Programming", icon: Code },
    { id: "ai-ml", name: "AI & Machine Learning", icon: Brain },
    { id: "data", name: "Data Science", icon: Database },
    { id: "design", name: "Design", icon: Palette },
    { id: "mobile", name: "Mobile Development", icon: Smartphone },
    { id: "web", name: "Web Development", icon: Globe },
  ];

  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript Concepts",
      description: "Master modern JavaScript with async/await, closures, and advanced patterns",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12847,
      duration: "8 hours",
      lessons: 42,
      level: "Intermediate",
      category: "programming",
      price: "Free",
      thumbnail: "🚀",
      tags: ["JavaScript", "ES6+", "Async/Await"],
      progress: 68,
      enrolled: true
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      description: "Learn the basics of ML algorithms, neural networks, and practical applications",
      instructor: "Dr. Michael Chen",
      rating: 4.9,
      students: 8932,
      duration: "12 hours",
      lessons: 56,
      level: "Advanced",
      category: "ai-ml",
      price: "$49",
      thumbnail: "🤖",
      tags: ["Python", "TensorFlow", "Neural Networks"],
      progress: 34,
      enrolled: true
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Essential DSA concepts for coding interviews and competitive programming",
      instructor: "Alex Rodriguez",
      rating: 4.7,
      students: 15634,
      duration: "15 hours",
      lessons: 68,
      level: "Intermediate",
      category: "programming",
      price: "$29",
      thumbnail: "📊",
      tags: ["Algorithms", "Data Structures", "Problem Solving"],
      progress: 89,
      enrolled: true
    },
    {
      id: 4,
      title: "React & Next.js Mastery",
      description: "Build modern web applications with React, Next.js, and TypeScript",
      instructor: "Emma Wilson",
      rating: 4.8,
      students: 9876,
      duration: "10 hours",
      lessons: 45,
      level: "Intermediate",
      category: "web",
      price: "$39",
      thumbnail: "⚛️",
      tags: ["React", "Next.js", "TypeScript"],
      progress: 0,
      enrolled: false
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      description: "Create beautiful, user-centered designs with modern design tools",
      instructor: "James Park",
      rating: 4.6,
      students: 7234,
      duration: "6 hours",
      lessons: 28,
      level: "Beginner",
      category: "design",
      price: "$24",
      thumbnail: "🎨",
      tags: ["Figma", "Design Systems", "Prototyping"],
      progress: 0,
      enrolled: false
    },
    {
      id: 6,
      title: "Python for Data Science",
      description: "Analyze data and create insights using Python, pandas, and visualization libraries",
      instructor: "Dr. Lisa Chang",
      rating: 4.9,
      students: 11543,
      duration: "14 hours",
      lessons: 62,
      level: "Beginner",
      category: "data",
      price: "$44",
      thumbnail: "🐍",
      tags: ["Python", "Pandas", "Data Visualization"],
      progress: 0,
      enrolled: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level.toLowerCase() === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const enrolledCourses = courses.filter(course => course.enrolled);
  const recommendedCourses = courses.filter(course => !course.enrolled && course.rating >= 4.7);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4 animate-fade-in-up">
        <h1 className="text-4xl font-poppins font-bold">
          <span className="text-gradient">Explore Courses</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover your next learning adventure with AI-powered recommendations
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search courses, topics, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-glass-border focus:border-primary"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <div className="flex items-center">
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="btn-glass">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Continue Learning Section */}
      {enrolledCourses.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-poppins font-bold">Continue Learning</h2>
            <Link to="/dashboard">
              <Button variant="ghost">
                View Progress <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="glass-card hover-lift group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-2">{course.thumbnail}</div>
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      {course.progress}% Complete
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                    <div className="mx-2">•</div>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                  
                  <Button className="w-full bg-gradient-primary hover:shadow-glow group-hover:scale-105 transition-all duration-normal">
                    <Play className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Recommended Courses */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-poppins font-bold">
            <TrendingUp className="w-6 h-6 inline mr-2 text-primary" />
            Recommended for You
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.slice(0, 3).map((course) => (
            <Card key={course.id} className="glass-card hover-lift group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{course.thumbnail}</div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-warning fill-current mr-1" />
                    <span>{course.rating}</span>
                    <span className="text-muted-foreground ml-1">({course.students.toLocaleString()})</span>
                  </div>
                  <Badge variant="outline">{course.level}</Badge>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{course.duration}</span>
                  <div className="mx-2">•</div>
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>{course.lessons} lessons</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                  <Button className="bg-gradient-primary hover:shadow-glow group-hover:scale-105 transition-all duration-normal">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Courses */}
      <section className="space-y-4">
        <h2 className="text-2xl font-poppins font-bold">
          All Courses ({filteredCourses.length})
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="glass-card hover-lift group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{course.thumbnail}</div>
                  <div className="flex items-center space-x-2">
                    {course.enrolled && (
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        Enrolled
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-warning fill-current mr-1" />
                    <span>{course.rating}</span>
                    <span className="text-muted-foreground ml-1">({course.students.toLocaleString()})</span>
                  </div>
                  <Badge variant="outline">{course.level}</Badge>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{course.duration}</span>
                  <div className="mx-2">•</div>
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>{course.lessons} lessons</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                  <Button className="bg-gradient-primary hover:shadow-glow group-hover:scale-105 transition-all duration-normal">
                    {course.enrolled ? (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Continue
                      </>
                    ) : (
                      "Enroll Now"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;