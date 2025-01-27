import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = {
    background: "#0a192f", // Match the portfolio background
    fontFamily: "Arial, sans-serif",
    headerBgColor: "#64ffda",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#64ffda",
    botFontColor: "#fff",
    userBubbleColor: "#8892b0",
    userFontColor: "#fff",
  };

  // Function to call the backend API
  const callBackendAPI = async (userMessage) => {
    try {
      const response = await fetch("http://localhost:5001/chat", {
        // Update this URL to match your backend deployment (e.g., production or localhost)
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await response.json();
      return data.response || "Sorry, I couldn't fetch a response. Please try again.";
    } catch (error) {
      console.error("Error communicating with the backend:", error);
      return "Oops! Something went wrong. Please try again later.";
    }
  };

  // Custom component to handle chatbot responses
  const CustomChatbotResponse = ({ steps, triggerNextStep }) => {
    const { userInput } = steps;

    const [isReplyFetched, setReplyFetched] = useState(false);

    React.useEffect(() => {
      const fetchReply = async () => {
        if (!isReplyFetched) {
          setReplyFetched(true); // Prevent duplicate fetching
          const botReply = await callBackendAPI(userInput.value);
          triggerNextStep({ value: botReply, trigger: "nextQuestion" });
        }
      };

      fetchReply();
    }, [userInput, triggerNextStep, isReplyFetched]);

    return <span>Processing your question...</span>;
  };

  // Steps for the chatbot
  const steps = [
    {
      id: "intro",
      message: "Hi! I'm here to answer your questions. What would you like to ask?",
      trigger: "userInput",
    },
    {
      id: "userInput",
      user: true,
      trigger: "fetchReply",
    },
    {
      id: "fetchReply",
      component: <CustomChatbotResponse />,
      waitAction: true,
    },
    {
      id: "nextQuestion",
      message: "{previousValue}",
      trigger: "askAgain",
    },
    {
      id: "askAgain",
      message: "Would you like to ask another question?",
      trigger: "userInput",
    },
    {
      id: "end",
      message: "Goodbye! Feel free to return anytime. 👋",
      end: true,
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <button
        style={{
          backgroundColor: "#64ffda",
          color: "#0a192f",
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "–" : "💬"}
      </button>

      {isOpen && (
        <div style={{ marginTop: "10px" }}>
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              headerTitle="Ask Me Anything"
              placeholder="Type your question..."
              floating={false}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
