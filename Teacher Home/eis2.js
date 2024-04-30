function updateDateTime() {
    const dateContainer = document.getElementById('date');
    const timeContainer = document.getElementById('time');
    const now = new Date();
    
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
  
    dateContainer.textContent = dateString;
    timeContainer.textContent = timeString;
  }
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  
  // Initial call to display date and time immediately
  updateDateTime();

  function toggleOptions() {
    var options = document.getElementById("options");
    options.classList.toggle("show");
  }

  function showMessage(optionName) {
    var popup = document.getElementById("popup");
    popup.textContent = "Your request for " + optionName + " has been sent.";
    popup.style.display = "block";
    setTimeout(function() {
      popup.style.display = "none";
    }, 2000); // Close the popup after 2 seconds
  }