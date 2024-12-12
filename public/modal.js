(function () {
  // Create chatbot button
  const chatbotButton = document.createElement("button");
  chatbotButton.innerHTML = "Chat with us";
  chatbotButton.style.padding = "10px 20px";
  chatbotButton.style.backgroundColor = "#3498db";
  chatbotButton.style.color = "white";
  chatbotButton.style.border = "none";
  chatbotButton.style.borderRadius = "5px";
  chatbotButton.style.cursor = "pointer";
  chatbotButton.style.position = "fixed";
  chatbotButton.style.bottom = "20px";
  chatbotButton.style.right = "20px";
  chatbotButton.style.zIndex = "1000";
  chatbotButton.onclick = toggleChatbot;

  // Add the button to the body
  document.body.appendChild(chatbotButton);

  // Create chatbot container
  const chatbotContainer = document.createElement("div");
  chatbotContainer.id = "chatbotContainer";
  chatbotContainer.style.position = "fixed";
  chatbotContainer.style.bottom = "80px";
  chatbotContainer.style.right = "20px";
  chatbotContainer.style.width = "300px";
  chatbotContainer.style.height = "400px";
  chatbotContainer.style.backgroundColor = "white";
  chatbotContainer.style.borderRadius = "10px";
  chatbotContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  chatbotContainer.style.display = "none";
  chatbotContainer.style.zIndex = "1000";

  // Create chatbot header
  const chatbotHeader = document.createElement("div");
  chatbotHeader.style.padding = "10px";
  chatbotHeader.style.backgroundColor = "#3498db";
  chatbotHeader.style.color = "white";
  chatbotHeader.style.borderTopLeftRadius = "10px";
  chatbotHeader.style.borderTopRightRadius = "10px";
  chatbotHeader.innerHTML = "Chatbot";

  // Create close button for chatbot
  const closeChatbotButton = document.createElement("span");
  closeChatbotButton.innerHTML = "&times;";
  closeChatbotButton.style.fontSize = "20px";
  closeChatbotButton.style.cursor = "pointer";
  closeChatbotButton.style.position = "absolute";
  closeChatbotButton.style.top = "10px";
  closeChatbotButton.style.right = "10px";
  closeChatbotButton.onclick = toggleChatbot;

  // Create message area for chatbot
  const messageArea = document.createElement("div");
  messageArea.style.padding = "10px";
  messageArea.style.height = "300px";
  messageArea.style.overflowY = "auto";
  messageArea.style.borderBottom = "1px solid #ddd";

  // Create input field for typing messages
  const inputField = document.createElement("input");
  inputField.style.width = "100%";
  inputField.style.padding = "10px";
  inputField.style.border = "none";
  inputField.style.borderBottomLeftRadius = "10px";
  inputField.style.borderBottomRightRadius = "10px";
  inputField.placeholder = "Type a message...";

  // Append elements to chatbot container
  chatbotContainer.appendChild(chatbotHeader);
  chatbotContainer.appendChild(closeChatbotButton);
  chatbotContainer.appendChild(messageArea);
  chatbotContainer.appendChild(inputField);

  // Append chatbot container to the body
  document.body.appendChild(chatbotContainer);

  // Function to toggle chatbot visibility
  function toggleChatbot() {
    if (chatbotContainer.style.display === "none") {
      chatbotContainer.style.display = "block";
    } else {
      chatbotContainer.style.display = "none";
    }
  }
})();
