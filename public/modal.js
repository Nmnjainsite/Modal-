(function () {
  // Utility function to create elements with classes and attributes
  function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    if (options.classes) element.className = options.classes;
    if (options.text) element.textContent = options.text;
    if (options.src) element.src = options.src;
    if (options.alt) element.alt = options.alt;
    if (options.appendTo) options.appendTo.appendChild(element);
    return element;
  }

  // Chatbot component
  const chatbot = () => {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    let input = "";
    let isOpen = false;
    let loading = false;
    let selectedOffer = null;

    // Create elements
    const chatbotContainer = createElement("div", { classes: "relative" });
    const chatBox = createElement("div", {
      classes:
        "fixed bottom-0 left-0 z-[9999] mb-0 h-screen w-full max-w-md rounded-2xl border border-gray-300 bg-white bg-opacity-30 shadow-lg backdrop-blur-lg hidden",
    }); // initially hidden
    const tabGroup = createElement("div", { classes: "TabGroup" });
    const tabList = createElement("div", { classes: "TabList" });
    const messagesContainer = createElement("div", {
      classes: "chat-messages",
    });
    const inputField = createElement("input", {
      classes: "chat-input",
      type: "text",
    });
    const sendButton = createElement("button", {
      classes: "send-button",
      text: "Send",
    });

    const closeButton = createElement("button", {
      classes: "absolute right-6 top-3 text-2xl text-white",
      text: "×",
    });
    const chatIconButton = createElement("button", {
      classes:
        "fixed bottom-4 left-4 z-[9999] p-2 bg-blue-500 text-white rounded-full",
    });

    chatIconButton.innerHTML = '<i class="text-3xl"><MdChat /></i>'; // Chat icon button
    closeButton.addEventListener("click", () => setIsOpen(false));

    sendButton.addEventListener("click", () => handleSend(input));
    inputField.addEventListener("input", (e) => {
      input = e.target.value;
    });

    // Open/close chatbot
    chatIconButton.addEventListener("click", () => {
      setIsOpen(!isOpen);
    });

    const setIsOpen = (open) => {
      isOpen = open;
      chatBox.classList.toggle("hidden", !isOpen); // Show/hide the chat box
    };

    const handleSend = async (message) => {
      const finalMessage = message || input;

      if (finalMessage.trim() === "") return;

      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Add user's message
      messages.push({
        text: finalMessage,
        sender: "user",
        subData: "",
        time: timestamp,
      });

      localStorage.setItem("chatMessages", JSON.stringify(messages));
      input = ""; // Clear input

      loading = true;

      try {
        const response = await fetch(
          "http://ec2-54-235-174-119.compute-1.amazonaws.com:5436/chat",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: finalMessage }),
          }
        );

        if (response.ok) {
          const botResponse = await response.json();
          const botTimestamp = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          // Add bot's response
          messages.push({
            text: botResponse,
            sender: "bot",
            subData: "",
            time: botTimestamp,
          });
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        console.error(error, "error from chatbot");
        messages.push({
          text: "Error: Could not get a response from the bot. Please try again later.",
          sender: "bot",
          subData: "",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      } finally {
        loading = false;
        localStorage.setItem("chatMessages", JSON.stringify(messages));
        updateMessages();
      }
    };

    const updateMessages = () => {
      messagesContainer.innerHTML = "";
      messages.forEach((msg) => {
        const messageDiv = createElement("div", {
          classes: `chat-message ${
            msg.sender === "user" ? "self-end" : "self-start"
          }`,
        });
        const messageContent = createElement("div", {
          classes: "message-content",
          text: msg.text,
        });
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
      });
    };

    chatbotContainer.appendChild(tabGroup);
    tabGroup.appendChild(tabList);
    tabGroup.appendChild(messagesContainer);
    tabGroup.appendChild(inputField);
    tabGroup.appendChild(sendButton);

    // Insert chatbot and chat icon button into the body
    document.body.appendChild(chatbotContainer);
    document.body.appendChild(chatIconButton);

    // Initialize by rendering messages
    updateMessages();
  };

  chatbot(); // Invoke the chatbot immediately
})();
