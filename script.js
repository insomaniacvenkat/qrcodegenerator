window.addEventListener('DOMContentLoaded', () => {
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    width: 300,
    height: 300,
  });

  // Generate a random device ID
  const deviceId = generateDeviceId();

  // Generate a URL for the jokes website with the device ID as a query parameter
  const jokesUrl = "https://www.example.com/jokes?deviceId=" + deviceId;

  // Update the QR code with the jokes website URL
  qrcode.makeCode(jokesUrl);

  // Display the device ID in the HTML
  const deviceIdElement = document.getElementById('device-id');
  deviceIdElement.textContent = deviceId;

  // Function to open the jokes website
  function openJokesWebsite() {
    window.location.href = jokesUrl;
  }

  // Attach an event listener to the QR code container
  const qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.addEventListener('click', openJokesWebsite);

  // Function to generate a unique device identifier
  function generateDeviceId() {
    const randomString = Math.random().toString(36).substring(2, 8);
    return "venk" + randomString;
  }
});
