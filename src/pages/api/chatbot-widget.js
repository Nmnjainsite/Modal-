// pages/api/chatbot-ui-config.js
export default function handler(req, res) {
  res.status(200).json({
    theme: {
      gradient: "linear-gradient(to right, #ff7e5f, #feb47b)",
      primaryColor: "#4CAF50",
      textColor: "#333333",
      buttonColor: "#4CAF50",
    },
    font: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "14px",
    },
    layout: {
      borderRadius: "10px",
      padding: "15px",
    },
  });
}
