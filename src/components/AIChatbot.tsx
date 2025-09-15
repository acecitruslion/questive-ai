import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  X, 
  Send, 
  Mic, 
  Bot, 
  User, 
  Sparkles,
  BookOpen,
  Calculator,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";
import aiAvatar from "@/assets/ai-avatar.png";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface AIChatbotProps {
  onClose: () => void;
}

const AIChatbot = ({ onClose }: AIChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi Alex! I'm EduBot, your AI learning assistant. I can help you with your studies, answer questions, and provide personalized learning recommendations. What would you like to learn today?",
      timestamp: new Date(),
      suggestions: [
        "Explain async/await in JavaScript",
        "Help me with calculus derivatives", 
        "Create a study plan for physics",
        "Quiz me on data structures"
      ]
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Auto-focus input when chatbot opens
    inputRef.current?.focus();
  }, []);

  const simulateTyping = async () => {
    setIsTyping(true);
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    setIsTyping(false);
  };

  const generateResponse = (userMessage: string): Message => {
    const responses = {
      greeting: [
        "Hello! I'm excited to help you learn today. What subject interests you?",
        "Hi there! Ready for another productive learning session? How can I assist you?",
        "Great to see you again! What would you like to explore today?"
      ],
      javascript: [
        "Async/await is a powerful feature in JavaScript that makes asynchronous code easier to read and write. Here's a quick example:\n\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n```\n\nWould you like me to explain how this works step by step?",
        "JavaScript async/await allows you to write asynchronous code that looks synchronous! The 'async' keyword makes a function return a Promise, and 'await' pauses execution until the Promise resolves. This makes your code much more readable than using .then() chains."
      ],
      math: [
        "I'd be happy to help with calculus derivatives! The derivative represents the rate of change of a function. Here are some basic rules:\n\n• Power rule: d/dx(x^n) = nx^(n-1)\n• Sum rule: d/dx(f + g) = f' + g'\n• Product rule: d/dx(fg) = f'g + fg'\n• Chain rule: d/dx(f(g(x))) = f'(g(x)) × g'(x)\n\nWhich specific derivative would you like help with?",
        "Let's tackle derivatives together! What function are you trying to differentiate? I can walk you through it step by step and explain the reasoning behind each step."
      ],
      physics: [
        "I'll help you create a personalized physics study plan! Based on your current progress, I recommend:\n\n📅 Week 1-2: Mechanics (kinematics, forces, energy)\n📅 Week 3-4: Thermodynamics (heat, entropy, ideal gas law)\n📅 Week 5-6: Electricity & Magnetism\n📅 Week 7: Practice problems and review\n\nWould you like me to break down any specific topic or adjust this timeline?",
        "Great choice! Physics builds understanding step by step. What's your current physics level, and which areas feel challenging? I can create a custom study schedule that matches your pace."
      ],
      dataStructures: [
        "Time for a data structures quiz! Here's your first question:\n\n❓ What's the time complexity of inserting an element at the beginning of a linked list?\n\nA) O(1)\nB) O(n)\nC) O(log n)\nD) O(n²)\n\nTake your time and explain your reasoning!",
        "Let's test your knowledge! Quick question: What's the main advantage of using a hash table over an array for lookups? Think about time complexity and explain why!"
      ],
      default: [
        "That's an interesting question! Let me think about that and provide you with a comprehensive answer. Could you give me a bit more context about what specific aspect you'd like me to focus on?",
        "I'm here to help you learn and grow! Can you tell me more about what you're working on? I can provide explanations, create study materials, or even quiz you on topics.",
        "Great question! I love helping students explore new concepts. What subject area is this related to, and what's your current understanding of the topic?"
      ]
    };

    const message = userMessage.toLowerCase();
    let responseArray = responses.default;
    let suggestions: string[] = [];

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      responseArray = responses.greeting;
      suggestions = ["Show me my progress", "Start a new lesson", "Help with homework"];
    } else if (message.includes('javascript') || message.includes('async') || message.includes('await')) {
      responseArray = responses.javascript;
      suggestions = ["More JS examples", "Explain promises", "Practice coding problems"];
    } else if (message.includes('calculus') || message.includes('derivative') || message.includes('math')) {
      responseArray = responses.math;
      suggestions = ["Practice problems", "Integration next", "Graph visualization"];
    } else if (message.includes('physics') || message.includes('study plan')) {
      responseArray = responses.physics;
      suggestions = ["Start with mechanics", "Physics simulations", "Formula reference"];
    } else if (message.includes('quiz') || message.includes('data structure')) {
      responseArray = responses.dataStructures;
      suggestions = ["More questions", "Explain algorithms", "Code examples"];
    }

    const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];

    return {
      id: Date.now().toString(),
      type: 'bot',
      content: randomResponse,
      timestamp: new Date(),
      suggestions: suggestions.length > 0 ? suggestions : undefined
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    await simulateTyping();
    
    const botResponse = generateResponse(inputValue);
    setMessages(prev => [...prev, botResponse]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input simulation - in real app would use Speech Recognition API
    if (!isListening) {
      setTimeout(() => {
        setInputValue("Can you help me with JavaScript promises?");
        setIsListening(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[600px] glass-card rounded-2xl flex flex-col overflow-hidden animate-scale-in z-50">
      {/* Header */}
      <div className="p-4 border-b border-glass-border bg-gradient-primary/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={aiAvatar} 
                alt="EduBot AI Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-foreground">EduBot</h3>
              <p className="text-xs text-muted-foreground">AI Learning Assistant</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-destructive/20 rounded-full"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start space-x-2",
              message.type === 'user' ? "justify-end" : "justify-start"
            )}
          >
            {message.type === 'bot' && (
              <img 
                src={aiAvatar} 
                alt="EduBot"
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
            )}
            
            <div
              className={cn(
                "max-w-[80%] p-3 rounded-2xl",
                message.type === 'user'
                  ? "bg-primary text-primary-foreground ml-auto"
                  : "bg-card border border-card-border"
              )}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              
              {message.suggestions && (
                <div className="mt-3 space-y-2">
                  <p className="text-xs text-muted-foreground">Suggested actions:</p>
                  <div className="flex flex-wrap gap-2">
                    {message.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs h-7 hover:bg-primary/10"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {message.type === 'user' && (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start space-x-2">
            <img 
              src={aiAvatar} 
              alt="EduBot"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-card border border-card-border p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t border-glass-border">
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="flex-1 text-xs">
            <BookOpen className="w-3 h-3 mr-1" />
            Lesson
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-xs">
            <Calculator className="w-3 h-3 mr-1" />
            Quiz
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-xs">
            <Lightbulb className="w-3 h-3 mr-1" />
            Explain
          </Button>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-glass-border">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your studies..."
              className="pr-12 border-glass-border focus:border-primary"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleVoiceInput}
              className={cn(
                "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0",
                isListening && "text-destructive animate-pulse"
              )}
            >
              <Mic className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            size="sm"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-normal"
            disabled={!inputValue.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;