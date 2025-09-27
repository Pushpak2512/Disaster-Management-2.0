import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAIChat } from "@/hooks/useAIChat";

export function EmergencyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const { messages, isLoading, sendMessage } = useAIChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;
    
    const messageToSend = inputText;
    setInputText(""); // Clear input immediately for better UX
    
    await sendMessage(messageToSend);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Emergency Chatbot Toggle - Always Visible */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 rounded-full bg-emergency hover:bg-emergency/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        )}
      </div>

      {/* Emergency Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4">
          <Card className="w-96 h-[500px] shadow-xl border-2 border-emergency/20">
            <CardHeader className="bg-emergency text-emergency-foreground p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <CardTitle className="text-lg">Emergency AI Assistant</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-emergency-foreground hover:bg-emergency-foreground/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <AlertTriangle className="h-3 w-3" />
                <span>24/7 Emergency Support</span>
              </div>
            </CardHeader>

            <CardContent className="p-0 h-[400px] flex flex-col">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                       <div
                         className={`max-w-[80%] p-3 rounded-lg ${
                           message.sender === "user"
                             ? "bg-primary text-primary-foreground"
                             : "bg-muted text-foreground"
                         }`}
                       >
                         <div className="text-sm whitespace-pre-line">{message.text}</div>
                         <p className="text-xs opacity-70 mt-1">
                           {message.timestamp.toLocaleTimeString()}
                         </p>
                       </div>
                    </div>
                   ))}
                   {isLoading && (
                     <div className="flex justify-start">
                       <div className="bg-muted text-foreground p-3 rounded-lg flex items-center space-x-2">
                         <Loader2 className="h-4 w-4 animate-spin" />
                         <span className="text-sm">AI is thinking...</span>
                       </div>
                     </div>
                   )}
                   <div ref={scrollRef} />
                 </div>
               </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your emergency question..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                   <Button
                     onClick={handleSendMessage}
                     size="icon"
                     disabled={isLoading}
                     className="bg-emergency hover:bg-emergency/90 disabled:opacity-50"
                   >
                     {isLoading ? (
                       <Loader2 className="h-4 w-4 animate-spin" />
                     ) : (
                       <Send className="h-4 w-4" />
                     )}
                   </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  For immediate emergencies, call 112
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}