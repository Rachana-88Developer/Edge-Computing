// 1. Dynamic Greeting
const greetingElement = document.getElementById("greetingText");
const hours = new Date().getHours();

let message = "";
if (hours < 12) message = "Good Morning! ☀️";
else if (hours < 18) message = "Good Afternoon! 🌤️";
else message = "Good Evening! 🌙";

greetingElement.innerText = `${message} Welcome to my project.`;

// 2. Particles.js Configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } }
        }
    },
    retina_detect: true
});
