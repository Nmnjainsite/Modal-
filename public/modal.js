(function () {
  // Function to get the userId from the script URL
  function getQueryParam(param) {
    const scripts = document.getElementsByTagName("script");
    const currentScript = scripts[scripts.length - 1]; // Get the last loaded script (i.e., this one)
    const scriptUrl = new URL(currentScript.src); // Get the script URL
    return scriptUrl.searchParams.get(param); // Get the userId from the script URL
  }

  // Get the userId from the script tag URL
  const userId = getQueryParam("userId");

  // Define the URL of the iframe content, appending the userId as a query parameter
  const iframeUrl = `https://modal-rho-six.vercel.app/?userId=${encodeURIComponent(
    userId
  )}`;

  // Create the iframe element
  const iframe = document.createElement("iframe");

  // Set iframe attributes
  iframe.src = iframeUrl;
  iframe.style.cssText = `
    width: 400px; /* Fixed width */
    height: 550px; /* Fixed height */
    border: none;
    position: fixed;
    bottom: 0; /* 10px space from the bottom */
    right: 10px; /* Align to the bottom-right corner */
    z-index: 99999;
    pointer-events: auto;
  `;

  // Append the iframe to the body
  document.body.appendChild(iframe);
})();
