* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

/* Particle Background */
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #667eea, #764ba2);
    z-index: -1;
}

/* Glass Card */
.glass-card {
    width: 90%;
    max-width: 900px;
    margin: 80px auto;
    padding: 30px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    text-align: center;
    color: white;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.glass-card h1 {
    font-size: 36px;
}

.glass-card h2 {
    font-size: 20px;
    margin-top: 5px;
}

#greeting {
    margin: 15px 0;
    font-size: 18px;
}

/* Slider */
.slider {
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    margin-top: 20px;
}

.slides {
    display: flex;
    width: 500%;
    animation: slide 15s infinite;
}

.slides img {
    width: 100%;
    border-radius: 15px;
}

/* Sliding Animation */
@keyframes slide {
    0% { transform: translateX(0); }
    20% { transform: translateX(0); }

    25% { transform: translateX(-100%); }
    45% { transform: translateX(-100%); }

    50% { transform: translateX(-200%); }
    70% { transform: translateX(-200%); }

    75% { transform: translateX(-300%); }
    95% { transform: translateX(-300%); }

    100% { transform: translateX(-400%); }
}

/* Responsive */
@media (max-width: 600px) {
    .glass-card h1 {
        font-size: 26px;
    }
}
