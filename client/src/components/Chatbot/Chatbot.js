import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "./Chatbot.css";

const API_KEY = process.env.REACT_APP_CHATBOT_KEY;
const systemMessage = {
  role: "system",
  content: "Yor are a Proffessioanl AI assitant that will help users in medical related queries",
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Medico! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });

      const data = await response.json();
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
      }]);
    } catch (error) {
      console.error("Error communicating with ChatGPT API:", error);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div>
      {/* Circular Chatbot Icon */}
      {!isChatbotOpen && (
        <button
          className="chatbot-icon"
          onClick={() => setIsChatbotOpen(true)}
        >
          💬
        </button>
      )}

      {/* Chatbot Dialog Box */}
      {isChatbotOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Medical Assisstant
            <button
              className="chatbot-close"
              onClick={() => setIsChatbotOpen(false)}
            >
              ✖
            </button>
          </div>
          <div className="chatbot-body">
            <div style={{ position: "relative", height: "400px", width: "100%" }}>
              <MainContainer>
                <ChatContainer>
                  <MessageList
                    scrollBehavior="smooth"
                    typingIndicator={isTyping ? <TypingIndicator content="Medico is typing" /> : null}
                  >
                    {messages.map((message, i) => (
                      <Message key={i} model={message} />
                    ))}
                  </MessageList>
                  <MessageInput placeholder="Type your message..." onSend={handleSend} />
                </ChatContainer>
              </MainContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
