(function () {
  // Configuration
  const API_ENDPOINT =
    "http://ec2-54-235-174-119.compute-1.amazonaws.com:5436/chat";

  // Create chatbot button
  const openChatbotButton = document.createElement("button");
  openChatbotButton.innerHTML = "Chat with us!";
  openChatbotButton.style.cssText = `
    padding: 10px 20px;
    background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  `;
  openChatbotButton.onclick = toggleChatbot;

  // Hover effect
  openChatbotButton.addEventListener("mouseenter", () => {
    openChatbotButton.style.transform = "scale(1.05)";
  });
  openChatbotButton.addEventListener("mouseleave", () => {
    openChatbotButton.style.transform = "scale(1)";
  });

  // Create the chatbot window
  const chatbotWindow = document.createElement("div");
  chatbotWindow.id = "chatbotWindow";
  chatbotWindow.style.cssText = `
    display: none;
    position: fixed;
    bottom: 70px;
    left: 20px;
    width: 350px;
    height: 500px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    z-index: 1000;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
  `;

  // Create chatbot header
  const chatbotHeader = document.createElement("div");
  chatbotHeader.style.cssText = `
    background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    color: white;
    padding: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  chatbotHeader.innerHTML = `
    <span>Lumi Chat</span>
    <span id="closeButton" style="cursor: pointer; font-size: 24px;">&times;</span>
  `;

  // Create message container
  const chatbotMessages = document.createElement("div");
  chatbotMessages.id = "chatbotMessages";
  chatbotMessages.style.cssText = `
    flex-grow: 1;
    overflow-y: auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  // Create input container
  const inputContainer = document.createElement("div");
  inputContainer.style.cssText = `
    display: flex;
    padding: 10px;
    border-top: 1px solid #eee;
    align-items: center;
  `;

  // Create chatbot input
  const chatbotInput = document.createElement("input");
  chatbotInput.type = "text";
  chatbotInput.placeholder = "Type a message...";
  chatbotInput.style.cssText = `
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-right: 10px;
  `;

  // Create send button with SVG icon
  const sendButton = document.createElement("button");
  sendButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  `;
  sendButton.style.cssText = `
    background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
  `;

  // Append elements
  inputContainer.appendChild(chatbotInput);
  inputContainer.appendChild(sendButton);
  chatbotWindow.appendChild(chatbotHeader);
  chatbotWindow.appendChild(chatbotMessages);
  chatbotWindow.appendChild(inputContainer);

  // Add to body
  document.body.appendChild(openChatbotButton);
  document.body.appendChild(chatbotWindow);

  // Get elements
  const closeButton = document.getElementById("closeButton");
  const messagesContainer = document.getElementById("chatbotMessages");

  // Toggle chatbot visibility
  function toggleChatbot() {
    chatbotWindow.style.display =
      chatbotWindow.style.display === "none" ? "flex" : "none";
  }

  // Close button event
  closeButton.onclick = toggleChatbot;

  // Add message to chat
  function addMessage(text, sender = "bot") {
    const messageElement = document.createElement("div");
    messageElement.style.cssText = `
      max-width: 80%;
      padding: 10px 15px;
      border-radius: 15px;
      align-self: ${sender === "user" ? "flex-end" : "flex-start"};
      background: ${
        sender === "user"
          ? "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)"
          : "#f0f0f0"
      };
      color: ${sender === "user" ? "white" : "black"};
    `;
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Send message function
  async function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, "user");
    chatbotInput.value = "";

    try {
      // Send to API
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Add bot response
      addMessage(data);
    } catch (error) {
      console.error("Error:", error);
      addMessage("Sorry, there was an error processing your request.");
    }
  }

  // Event listeners
  sendButton.onclick = sendMessage;
  chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  // Initial welcome message
  addMessage("Hello! How can I help you today?");
})();
