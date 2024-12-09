(function () {
  // Create modal button
  const openModalButton = document.createElement("button");
  openModalButton.innerHTML = "Open Modal";
  openModalButton.style.padding = "10px 20px";
  openModalButton.style.backgroundColor = "#3498db";
  openModalButton.style.color = "white";
  openModalButton.style.border = "none";
  openModalButton.style.borderRadius = "5px";
  openModalButton.style.cursor = "pointer";
  openModalButton.onclick = toggleModal;

  // Add the button to the body
  document.body.appendChild(openModalButton);

  // Create the modal
  const modal = document.createElement("div");
  modal.id = "myModal";
  modal.style.display = "none"; // Initially hidden
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.5)";
  modal.style.zIndex = "1000";
  modal.style.display = "none";

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.style.margin = "15% auto";
  modalContent.style.padding = "20px";
  modalContent.style.backgroundColor = "white";
  modalContent.style.borderRadius = "10px";
  modalContent.style.maxWidth = "400px";
  modalContent.style.textAlign = "center";

  // Create modal close button
  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "20px";
  closeButton.style.fontSize = "30px";
  closeButton.style.cursor = "pointer";
  closeButton.onclick = toggleModal;

  // Create the modal message
  const modalMessage = document.createElement("p");
  modalMessage.innerHTML = "Welcome to the Modal!";

  // Append elements to modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalMessage);

  // Append modal content to modal
  modal.appendChild(modalContent);

  // Append modal to the body
  document.body.appendChild(modal);

  // Function to toggle modal visibility
  function toggleModal() {
    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
})();
