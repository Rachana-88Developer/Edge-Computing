// Function to update Time and Greeting
function updateUI() {
    const now = new Date();
    
    // Get hours and minutes
    let h = now.getHours();
    let m = now.getMinutes();
    
    // Formatting: add leading zero if needed
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    
    // Display Time
    document.getElementById('clock').textContent = `${h}:${m}`;

    // Update Greeting based on time
    const greetingElement = document.getElementById("greetingText");
    if (h < 12) {
        greetingElement.innerText = "Good Morning! ☀️";
    } else if (h < 18) {
        greetingElement.innerText = "Good Afternoon! 🌤️";
    } else {
        greetingElement.innerText = "Good Evening! 🌙";
    }
}

// Initial call to set time immediately
updateUI();

// Update every 60,000 milliseconds (1 minute)
setInterval(updateUI, 60000);

// Particles.js Setup
particlesJS("particles-js", {
    particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        opacity: { value: 0.3 },
        size: { value: 2 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
        },
        move: { enable: true, speed: 1 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "grab" } }
    }
});
