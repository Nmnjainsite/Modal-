(function () {
  // Define the URL of the iframe content
  const iframeUrl = "https://trainkore.com";

  // Create the iframe element
  const iframe = document.createElement("iframe");

  // Set iframe attributes
  iframe.src = iframeUrl;
  iframe.style.cssText = `
    width: 100%;
    height: 600px;
    border: none;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
  `;

  // Append the iframe to the body
  document.body.appendChild(iframe);
})();
