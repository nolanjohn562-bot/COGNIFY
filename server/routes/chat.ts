import { RequestHandler } from "express";
import { ChatRequest, ChatResponse } from "@shared/api";

export const handleChat: RequestHandler = async (req, res) => {
  try {
    const { message } = req.body as ChatRequest;

    if (!message || message.trim() === "") {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      res.status(500).json({ error: "Groq API key not configured" });
      return;
    }

    // Call Groq API
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${groqApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [
          {
            role: "system",
            content: "You are C.O.G.N.I.F.Y, a helpful, friendly AI assistant. Your name stands for 'Cognitive Optimization & Generation Network Interface For You'. You provide clear, concise, and helpful responses. You are intelligent, knowledgeable, and creative.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 512,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Groq API error:", error);
      res.status(500).json({ error: "Failed to get response from AI" });
      return;
    }

    const data = await response.json() as {
      choices: Array<{ message: { content: string } }>;
    };
    const aiMessage = data.choices[0]?.message?.content || "Sorry, I couldn't process that request.";

    const chatResponse: ChatResponse = {
      message: aiMessage,
    };

    res.json(chatResponse);
  } catch (error) {
    console.error("Chat endpoint error:", error);
    res.status(500).json({ error: "An error occurred processing your request" });
  }
};
