(function () {
  let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  let input = "";
  let isOpen = false;
  let products = [];
  let selectedOffer = null;
  let loading = false;

  function updateLocalStorage() {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }

  async function handleSend(message) {
    const finalMessage = message || input;

    if (finalMessage.trim() === "") return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add the user's message
    messages.push({
      text: finalMessage,
      sender: "user",
      subData: "",
      time: timestamp,
    });
    input = ""; // Clear input
    loading = true; // Set loading to true
    updateLocalStorage();

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

      const data = await response.json();

      if (response.status === 200 && data) {
        const botResponse = data;
        const botTimestamp = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        messages.push({
          text: botResponse,
          sender: "bot",
          subData: "",
          time: botTimestamp,
        });
        updateLocalStorage();
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
      updateLocalStorage();
    } finally {
      loading = false; // Reset loading state
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  }

  function handleOffer(offerType) {
    const offerTimestamp = new Date().toLocaleTimeString();

    // Add user message with subData
    messages.push({
      text: offerType,
      sender: "user",
      time: offerTimestamp,
      subData: "",
    });

    const botResponse = "Sure, what are you interested in?";
    const botTimestamp = new Date().toLocaleTimeString();

    messages.push({
      text: botResponse,
      sender: "bot",
      time: botTimestamp,
      subData: "",
    });

    const accordionMessages = [
      {
        subData: "Men's Fashions",
        sender: "bot",
        time: botTimestamp,
        text: "",
      },
      {
        subData: "Women's Special Fashions",
        sender: "bot",
        time: botTimestamp,
        text: "",
      },
      {
        subData: "Summer Special",
        sender: "bot",
        time: botTimestamp,
        text: "",
      },
    ];

    messages.push(...accordionMessages);
    selectedOffer = offerType;
    updateLocalStorage();
  }

  // Example of setting input and triggering keydown (replace this with actual DOM event logic)
  document.addEventListener("keydown", handleKeyDown);

  // Framer Motion integration
  import("https://cdn.jsdelivr.net/npm/framer-motion@11.13.5/+esm").then(
    (framerMotion) => {
      const { motion, AnimatePresence } = framerMotion;

      let isOpen = true;

      // Create the main container div
      const container = document.createElement("div");
      container.style.position = "relative";
      document.body.appendChild(container);

      // Function to create the motion div element
      const createMotionDiv = () => {
        if (isOpen) {
          // AnimatePresence logic for opening
          const motionDiv = document.createElement("div");
          motionDiv.style.position = "fixed";
          motionDiv.style.bottom = "0";
          motionDiv.style.right = "0";
          motionDiv.style.zIndex = "9999";
          motionDiv.style.height = "100vh";
          motionDiv.style.width = "100%";
          motionDiv.style.background = "rgba(255, 255, 255, 0.3)";
          motionDiv.style.backdropFilter = "blur(10px)";
          motionDiv.style.borderRadius = "16px";
          motionDiv.style.transition = "all 0.4s ease";
          motionDiv.style.opacity = "0";
          motionDiv.style.transform = "translateY(50px)";

          container.appendChild(motionDiv);

          // Animate in
          requestAnimationFrame(() => {
            motionDiv.style.opacity = "1";
            motionDiv.style.transform = "translateY(0)";
          });

          // Add content inside the motion div (example content)
          const content = document.createElement("div");
          content.style.padding = "20px";
          content.style.background = "white";
          content.style.borderRadius = "10px";
          content.innerText = "This is a motion div using Framer Motion!";
          motionDiv.appendChild(content);

          // Add close button
          const closeButton = document.createElement("button");
          closeButton.innerText = "Close";
          closeButton.style.position = "absolute";
          closeButton.style.top = "10px";
          closeButton.style.right = "10px";
          closeButton.style.background = "red";
          closeButton.style.color = "white";
          closeButton.style.border = "none";
          closeButton.style.padding = "10px";
          closeButton.style.cursor = "pointer";
          motionDiv.appendChild(closeButton);

          closeButton.addEventListener("click", () => {
            // Animate out
            motionDiv.style.opacity = "0";
            motionDiv.style.transform = "translateY(50px)";
            setTimeout(() => {
              container.removeChild(motionDiv);
              isOpen = false;
            }, 400);
          });
        }
      };

      // Open the motion div
      createMotionDiv();
    }
  );
})();
