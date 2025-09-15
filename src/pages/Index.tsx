import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Bot, 
  Brain, 
  Users, 
  BarChart3, 
  Sparkles,
  Play,
  Star,
  CheckCircle,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Learning",
      description: "Get personalized assistance from EduBot, your intelligent learning companion that adapts to your pace and style."
    },
    {
      icon: Brain,
      title: "Adaptive Pathways", 
      description: "Dynamic learning paths that evolve based on your progress, ensuring optimal knowledge retention and growth."
    },
    {
      icon: Users,
      title: "Collaborative Rooms",
      description: "Join virtual study rooms, collaborate with peers, and learn together in real-time interactive environments."
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Track your progress with detailed insights, performance predictions, and actionable recommendations."
    }
  ];

  const stats = [
    { value: "95%", label: "Student Engagement" },
    { value: "40%", label: "Faster Learning" },
    { value: "24/7", label: "AI Support" },
    { value: "50+", label: "Interactive Features" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Students learning with AI technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Next-Gen Learning Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-poppins font-bold leading-tight">
                <span className="text-gradient">EduMind AI</span>
                <br />
                <span className="text-foreground">Future of</span>
                <br />
                <span className="text-foreground">Education</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience revolutionary AI-powered personalized learning that adapts to your unique style, 
                pace, and goals. Join thousands of students already transforming their education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button 
                    size="lg" 
                    className="btn-gradient text-lg px-8 py-6 rounded-xl"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-glass text-lg px-8 py-6 rounded-xl"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-12 animate-fade-in">
              <div className="relative">
                <div className="glass-card p-8 rounded-3xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <span className="text-sm font-medium">Live Learning Session</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gradient-glass rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Bot className="w-8 h-8 text-primary" />
                          <div>
                            <div className="font-medium">Advanced JavaScript</div>
                            <div className="text-sm text-muted-foreground">68% Complete</div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-success">85%</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          Async/Await Patterns
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          Promise Handling
                        </div>
                        <div className="flex items-center text-sm">
                          <Zap className="w-4 h-4 text-primary mr-2" />
                          Currently: Error Handling
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full opacity-60 floating-element"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-accent rounded-full opacity-40 floating-element" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gradient">
              Revolutionary Learning Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how AI-powered education transforms the way you learn, practice, and achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass-card hover-lift group cursor-pointer border-0 animate-fade-in"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:animate-bounce-gentle">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/dashboard">
              <Button 
                size="lg"
                className="btn-gradient text-lg px-8 py-6 rounded-xl"
              >
                Explore All Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 rounded-3xl space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold">
                Ready to Transform Your
                <span className="text-gradient"> Learning Journey?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join Alex Chen and thousands of other students who are already experiencing 
                the future of education with EduMind AI.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-warning fill-current" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                4.9/5 from 10,000+ students
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="btn-gradient text-lg px-8 py-6 rounded-xl"
                >
                  Start Free Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-glass text-lg px-8 py-6 rounded-xl"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
