function setsates(accuracy, winRate, consistency) {
    const circle_dot = document.getElementById("accuracy");
    const number = document.querySelector(".strong");
    let current = 0;
    const animation = setInterval(() => {
        current++;
        number.textContent = current + "%";
        const degrees = current * 3.6;
        circle_dot.style.background = `
            conic-gradient(
                #b6ff5c 0deg ${degrees}deg,
                #111 ${degrees}deg 360deg
            )
        `;
        if (current >= accuracy) {
            clearInterval(animation);
        }

    }, 20);
  let number2 = document.getElementById("winRate")
  let current2 = 0;
  const animation2 = setInterval(() => {
    current2++;
    number2.textContent = current2 + "%";
    if(current >= winRate){
        clearInterval(animation2)
    }
  },20)
  let number3 = document.getElementById("consistency")
  let current3 = 0;
 
  const animation3 = setInterval(() => {
    current3++;
     number3.textContent = current3 + "%";
     if(current3 >= consistency){
        clearInterval(animation3)
     }
  },20)
    
}
setsates(75, 62, 85);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({

    trigger: ".stats-section",

    start: "top 75%",

    once: true,

    onEnter: () => {
        setsates(75, 62, 85);
    }

});

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