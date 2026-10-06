window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").classList.add("hide");

    }, 2000);

});

const fallingItems = document.getElementById("fallingItems");

const objects = [
    "🎁",
    "⭐",
    "🎓",
    "✨",
    "🌟",
    "🎁",
    "📚"
];

function createFallingItem() {

    const item = document.createElement("div");

    item.classList.add("fall-item");

    // Random object
    item.innerHTML =
        objects[Math.floor(Math.random() * objects.length)];

    // Random horizontal position
    item.style.left = Math.random() * 100 + "%";

    // Random falling speed
    const duration = Math.random() * 8 + 7;

    item.style.animationDuration = duration + "s";

    // Random delay
    item.style.animationDelay =
        Math.random() * 5 + "s";

    // Random size
    item.style.fontSize =
        Math.random() * 13 + 15 + "px";

    fallingItems.appendChild(item);

    // Remove after animation
    setTimeout(() => {
        item.remove();
    }, (duration + 5) * 1000);
}

// Create objects continuously
setInterval(createFallingItem, 600);

gsap.utils.toArray(".reveal-section").forEach((section) => {

    gsap.from(section.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

});