// Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => navLinks.classList.toggle("show"));

// Glowing Cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Smoke Parallax
const canvas = document.getElementById("smokeCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let smokeParticles = [];
function createSmoke(x, y) {
    smokeParticles.push({ x, y, alpha:1, radius:Math.random()*20+10, speed:Math.random()*1+0.5, drift:(Math.random()-0.5)*0.5 });
}
function animateSmoke() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    smokeParticles.forEach((p,i)=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fillStyle=`rgba(200,200,200,${p.alpha})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        p.alpha -= 0.004;
        if(p.alpha<=0) smokeParticles.splice(i,1);
    });
    requestAnimationFrame(animateSmoke);
}
canvas.addEventListener("mousemove", e=>createSmoke(e.clientX,e.clientY));
animateSmoke();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", e=>{
        e.preventDefault();
        document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior:"smooth" });
    });
});

// Contact Form Submit
const form = document.querySelector("form");
form.addEventListener("submit", e=>{
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
});
