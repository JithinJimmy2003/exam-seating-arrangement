// Get the current date and time and update the content of the designated element
function updateDateTime() {
    const dateTimeContainer = document.getElementById('date-time');
    const now = new Date();
    
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
  
    dateTimeContainer.textContent = dateString + ' ' + timeString;
  }
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  
  // Initial call to display date and time immediately
  updateDateTime();
  