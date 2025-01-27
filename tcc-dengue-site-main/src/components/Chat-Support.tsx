/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Send } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "./chat/Chat-bubble";
import { ChatInput } from "./chat/Chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "./chat/Chat-expandable";
import { ChatMessageList } from "./chat/Chat-message-list";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: string;
}

const initialChatSupportMessages: Message[] = [
  {
    id: "1",
    content: "Olá, como posso te ajudar hoje?",
    sender: "ai",
    timestamp: new Date().toLocaleTimeString(),
  },
];

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>(
    initialChatSupportMessages,
  );
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: inputMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      const loadingMessage: Message = {
        id: Date.now().toString(),
        content: "Gerando resposta...", // Mostrando que a resposta está sendo gerada
        sender: "ai",
        timestamp: new Date().toLocaleTimeString(),
      };
  
      setMessages((prevMessages) => [...prevMessages, loadingMessage]);
      setIsLoading(true); // Mostrar que está carregando
  
      try {
        // Fazer a requisição para a API de forma assíncrona
        const response = await axios.post(
          "http://localhost:3000/chat",
          { pergunta: inputMessage }, 
          {
            headers: { 'Content-Type': 'application/json' }
          }
        );
  
        const data = response.data;
  
        // Remover a mensagem de "carregando" e adicionar a resposta da API
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // Remove a última mensagem (loading)
          {
            id: Date.now().toString(),
            content: data.resposta, // A resposta da API
            sender: "ai",
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // Remove a última mensagem (loading)
          {
            id: Date.now().toString(),
            content: "Erro ao gerar resposta.",
            sender: "ai",
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      } finally {
        setIsLoading(false); // Esconde o status de carregamento
        setInputMessage(''); // Limpar o input
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ExpandableChat
      icon={<Bot className="h-6 w-6" />}
      size="lg"
      position="bottom-right"
    >
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat com AI ✨</h1>
        <p>Retire suas dúvidas sobre doenças do Aedes aegypti</p>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList
          ref={messagesContainerRef}
          className="dark:bg-muted/40"
        >
          <AnimatePresence>
            {messages.map((message, index) => {
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 1, y: 10, x: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                  transition={{
                    opacity: { duration: 0.1 },
                    layout: {
                      type: "spring",
                      bounce: 0.3,
                      duration: index * 0.05 + 0.2,
                    },
                  }}
                  style={{ originX: 0.5, originY: 0.5 }}
                  className="flex flex-col"
                >
                  <ChatBubble
                    key={message.id}
                    variant={message.sender === "user" ? "sent" : "received"}
                  >
                    <ChatBubbleAvatar
                      src={
                        message.sender === "user"
                          ? "../assets/images.png"
                          : ""
                      }
                      fallback={message.sender === "user" ? "EU" : "🤖"}
                    />
                    <ChatBubbleMessage
                      variant={message.sender === "user" ? "sent" : "received"}
                    >
                      {message.content}
                    </ChatBubbleMessage>
                  </ChatBubble>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex relative gap-2"
        >
          <ChatInput
            onKeyDown={onKeyDown}
            value={inputMessage}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <Button
            disabled={!inputMessage.trim()}
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 shrink-0"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}