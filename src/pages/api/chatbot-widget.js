import React from "react";
import ReactDOMServer from "react-dom/server";
import Chatbot from "../components/chatbot";

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/javascript");

  const script = `
    (function() {
      const chatbotDiv = document.createElement('div');
      chatbotDiv.id = "chatbot-container";
      document.body.appendChild(chatbotDiv);

      const script = document.createElement('script');
      script.src = "https://unpkg.com/react@17/umd/react.production.min.js";
      script.crossOrigin = true;
      document.head.appendChild(script);

      const reactDomScript = document.createElement('script');
      reactDomScript.src = "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js";
      reactDomScript.crossOrigin = true;
      document.head.appendChild(reactDomScript);

      script.onload = () => {
        reactDomScript.onload = () => {
          const chatbotContainer = document.getElementById("chatbot-container");
          const ChatbotComponent = ${ReactDOMServer.renderToString(
            <Chatbot />
          )};

          ReactDOM.render(
            React.createElement(() => ${ChatbotComponent}),
            chatbotContainer
          );
        };
      };
    })();
  `;
  res.send(script);
}
