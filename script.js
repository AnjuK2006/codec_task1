function toggleDevice(device) {
  const statusId = `${device}-status`;
  const statusText = document.getElementById(statusId).innerText;
  const newStatus = statusText.includes("OFF") ? "ON" : "OFF";
  document.getElementById(statusId).innerText = `Status: ${newStatus}`;
}

function updateTemp() {
  const value = document.getElementById('thermo-slider').value;
  document.getElementById('temp-status').innerText = `Temperature: ${value}°C`;
}
