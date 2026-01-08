  // Dynamic greeting based on time
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.innerText = "Good Morning! Welcome to my website 🌞";
} else if (hour < 18) {
    greeting.innerText = "Good Afternoon! Welcome to my website ☀️";
} else {
    greeting.innerText = "Good Evening! Welcome to my website 🌙";
}

// Image carousel
let index = 0;
const images = document.querySelectorAll(".carousel img");

setInterval(() => {
    images[index].style.display = "none";
    index = (index + 1) % images.length;
    images[index].style.display = "block";
}, 2000);
