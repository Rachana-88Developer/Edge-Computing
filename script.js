function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds(); // Included for precise per-minute updates
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    
    // Add leading zero to minutes
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Create the time string
    const timeString = `${hours}:${minutes} ${ampm}`;
    
    // Update the HTML
    document.getElementById('clock').textContent = timeString;

    // Dynamic Greeting
    const greeting = document.getElementById("greetingText");
    const currentHour = now.getHours();
    if (currentHour < 12) greeting.innerText = "Good Morning! ☀️";
    else if (currentHour < 18) greeting.innerText = "Good Afternoon! 🌤️";
    else greeting.innerText = "Good Evening! 🌙";
}

// Initial call and set interval to check every second to ensure accuracy
updateClock();
setInterval(updateClock, 1000);

// Particles.js Config
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#ffffff" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        line_linked: { enable: true, color: "#ffffff", opacity: 0.2 },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
    }
});
