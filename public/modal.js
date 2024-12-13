(function () {
  // Define the URL of the iframe content
  const iframeUrl = "https://modal-rho-six.vercel.app/";

  // Create the iframe element
  const iframe = document.createElement("iframe");

  // Set iframe attributes
  iframe.src = iframeUrl;
  iframe.style.cssText = `
    width: 400px; /* Fixed width */
    height: 400px; /* Fixed height */
    border: none;
    position: fixed;
    bottom: 10px; /* 10px space from the bottom */
    right: 10px; /* Align to the bottom-right corner */
    z-index: 99999;
    pointer-events: auto;
  `;

  // Append the iframe to the body
  document.body.appendChild(iframe);
})();
