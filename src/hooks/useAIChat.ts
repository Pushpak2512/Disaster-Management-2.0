import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "🚨 Emergency AI Assistant Ready! I can help with disaster preparedness, emergency procedures, and real-time guidance. How can I assist you?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          message: text,
          conversationHistory: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }))
        }
      });

      if (error) {
        throw error;
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I apologize, but I'm having trouble processing your request. For immediate emergencies, please call 112.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling AI chat:', error);
      
      // Fallback response
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm currently experiencing technical difficulties. For immediate emergencies, please call:\n\n🚨 112 - Emergency Services\n🔥 101 - Fire Department\n👮 100 - Police\n🏥 108 - Medical Emergency\n\nI'll try to assist you again shortly.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return {
    messages,
    isLoading,
    sendMessage,
  };
}