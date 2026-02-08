import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import { ChatRequest, ChatResponse } from "@shared/api";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface ChatWindowProps {
  title?: string;
  height?: string;
}

export function ChatWindow({
  title = "C.O.G.N.I.F.Y Assistant",
  height = "h-[500px]",
}: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm C.O.G.N.I.F.Y, your Cognitive Optimization & Generation Network Interface. I'm here to help you with any questions or tasks. What can I assist you with today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call the chat API
      const request: ChatRequest = { message: input };
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API error response:", errorData);
        throw new Error(
          (errorData as any).error || "Failed to get response from API"
        );
      }

      const data = (await response.json()) as ChatResponse;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Sorry, I encountered an error processing your request. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm opacity-90">Powered by advanced cognitive technology</p>
      </div>

      {/* Messages Container */}
      <div className={`flex-1 overflow-y-auto ${height} p-6 space-y-4 bg-gray-50`}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } animate-fade-in`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-primary to-secondary text-white rounded-br-none"
                  : "bg-white text-gray-900 border border-gray-200 rounded-bl-none"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span
                className={`text-xs mt-1 block opacity-70 ${
                  message.sender === "user" ? "text-right" : ""
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white text-gray-900 border border-gray-200 rounded-lg rounded-bl-none px-4 py-3">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Container */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-shadow"
          >
            <SendIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
