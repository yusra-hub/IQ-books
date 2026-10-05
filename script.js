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
