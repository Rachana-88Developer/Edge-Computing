// 1. Dynamic Greeting & Real-Time Clock
function updateUI() {
    const now = new Date();
    
    // Time Logic
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    
    // Add leading zeros
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;

    // Greeting Logic (only needs to run once, but fine here)
    const greetingElement = document.getElementById("greetingText");
    if (h < 12) greetingElement.innerText = "Good Morning! ☀️";
    else if (h < 18) greetingElement.innerText = "Good Afternoon! 🌤️";
    else greetingElement.innerText = "Good Evening! 🌙";
}

// Update clock every second
setInterval(updateUI, 1000);
updateUI(); // Initial call

// 2. Particles.js Config
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            out_mode: "out"
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});
