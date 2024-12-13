(function () {
  // Define the URL of the iframe content
  const iframeUrl = "https://modal-rho-six.vercel.app/";

  // Create the iframe element
  const iframe = document.createElement("iframe");

  // Set iframe attributes
  iframe.src = iframeUrl;
  iframe.style.cssText = `
    width: 400px; /* Fixed width */
    height: auto;
    max-height: 70vh; /* To limit the height if necessary */
    border: none;
    position: fixed;
    bottom: 10px; /* Fixed at the bottom */
    right: 10px; /* Fixed on the right side */
    z-index: 99999; /* Ensure it appears above other elements */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px; /* Smooth rounded edges */
  `;

  // Append the iframe to the body
  document.body.appendChild(iframe);
})();
