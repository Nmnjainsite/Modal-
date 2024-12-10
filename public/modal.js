(function () {
  // Create chatbot button
  const openChatbotButton = document.createElement("button");
  openChatbotButton.innerHTML = "Chat with us!";
  openChatbotButton.style.padding = "10px 20px";
  openChatbotButton.style.backgroundColor = "#3498db";
  openChatbotButton.style.color = "white";
  openChatbotButton.style.border = "none";
  openChatbotButton.style.borderRadius = "5px";
  openChatbotButton.style.cursor = "pointer";
  openChatbotButton.style.position = "fixed";
  openChatbotButton.style.bottom = "20px";
  openChatbotButton.style.left = "20px";
  openChatbotButton.style.zIndex = "1000";
  openChatbotButton.onclick = toggleChatbot;

  // Add the chatbot button to the body
  document.body.appendChild(openChatbotButton);

  // Create the chatbot window
  const chatbotWindow = document.createElement("div");
  chatbotWindow.id = "chatbotWindow";
  chatbotWindow.style.display = "none"; // Initially hidden
  chatbotWindow.style.position = "fixed";
  chatbotWindow.style.bottom = "70px"; // Position above the button
  chatbotWindow.style.left = "20px";
  chatbotWindow.style.width = "300px";
  chatbotWindow.style.height = "400px";
  chatbotWindow.style.backgroundColor = "#fff";
  chatbotWindow.style.border = "1px solid #ccc";
  chatbotWindow.style.borderRadius = "10px";
  chatbotWindow.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  chatbotWindow.style.zIndex = "1000";

  // Create chatbot header
  const chatbotHeader = document.createElement("div");
  chatbotHeader.style.backgroundColor = "#3498db";
  chatbotHeader.style.color = "white";
  chatbotHeader.style.padding = "10px";
  chatbotHeader.style.borderTopLeftRadius = "10px";
  chatbotHeader.style.borderTopRightRadius = "10px";
  chatbotHeader.style.textAlign = "center";
  chatbotHeader.innerHTML = "Chat with us";

  // Create chatbot close button
  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "20px";
  closeButton.style.fontSize = "20px";
  closeButton.style.cursor = "pointer";
  closeButton.onclick = toggleChatbot;

  // Create chatbot message container
  const chatbotMessages = document.createElement("div");
  chatbotMessages.style.padding = "10px";
  chatbotMessages.style.height = "calc(100% - 40px)";
  chatbotMessages.style.overflowY = "auto";
  chatbotMessages.innerHTML = "<p>Hello! How can we help you?</p>";

  // Create chatbot input area
  const chatbotInput = document.createElement("input");
  chatbotInput.type = "text";
  chatbotInput.placeholder = "Type a message...";
  chatbotInput.style.width = "100%";
  chatbotInput.style.padding = "10px";
  chatbotInput.style.boxSizing = "border-box";
  chatbotInput.style.border = "none";
  chatbotInput.style.borderTop = "1px solid #ccc";

  // Append elements to chatbot window
  chatbotWindow.appendChild(chatbotHeader);
  chatbotHeader.appendChild(closeButton);
  chatbotWindow.appendChild(chatbotMessages);
  chatbotWindow.appendChild(chatbotInput);

  // Append chatbot window to the body
  document.body.appendChild(chatbotWindow);

  // Function to toggle chatbot visibility
  function toggleChatbot() {
    if (chatbotWindow.style.display === "none") {
      chatbotWindow.style.display = "block";
    } else {
      chatbotWindow.style.display = "none";
    }
  }
})();
