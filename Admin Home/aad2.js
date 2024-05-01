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


  document.getElementById("department").addEventListener("change", function() {
    var selectedValue = this.value;
    var departmentOptions = document.getElementById("department-options");
    if (selectedValue !== "") {
      departmentOptions.style.display = "block"; // Show options when a department is selected
    } else {
      departmentOptions.style.display = "none"; // Hide options if no department is selected
    }
  });