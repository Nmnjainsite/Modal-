// pages/chatbot-test.js
import { useEffect } from "react";

const ChatbotTestPage = () => {
  useEffect(() => {
    // Dynamically load the chatbot script after the page is rendered
    const script = document.createElement("script");
    script.src = "/public/modal.js"; // Path to your bundled script in the public folder
    script.async = true;
    script.onload = () => {
      console.log("Chatbot script loaded successfully.");
      if (window.Chatbot) {
        window.Chatbot.init(); // Initialize the chatbot if needed
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up when the component is unmounted
    };
  }, []);

  return (
    <div>
      <h1>Test Chatbot</h1>
      <p>If the chatbot is working, it should appear below.</p>
    </div>
  );
};

export default ChatbotTestPage;
