const colors = ["lightseagreen", "royalblue", "white"];
const animation = ["fall-1", "fall-2", "fall-3"];
let lastPosition = { x: 0, y: 0 }; // Store the last mouse position

window.onmousemove = e => {
    const current = {
        x: e.clientX,
        y: e.clientY,
    };

    // Calculate the difference between current and last mouse positions
    const diffX = Math.abs(current.x - lastPosition.x);
    const diffY = Math.abs(current.y - lastPosition.y);

    // If the difference is 100 pixels or more, create a new star
    if (diffX >= 10 || diffY >= 10) {
        createStar(current.x, current.y);
        // createStar(current.x-5, current.y-5);
        lastPosition = current; // Update last mouse position
    }


    let coursor = document.querySelector(".coursor");
    coursor.style.left = e.clientX + "px";
    coursor.style.top = e.clientY + "px";
    // let glow = document.createElement("div");
    // glow.classList.add("glow");
    // document.body.appendChild(glow);
    // glow.style.left = e.clientX + "px";
    // glow.style.top = e.clientY + "px";

    // setTimeout(() => {
    //     document.body.removeChild(glow);
    // }, 100);
}

function createStar(x, y) {
    let star = document.createElement("i");
    star.classList.add("star");
    star.classList.add("fa-solid");
    star.classList.add("fa-star");

    star.style.left = x + "px";
    star.style.top = y + "px";
    
    star.style.color = colors[selectRandom()];
    star.style.textShadow = `0 0 10px ${colors[selectRandom()]}`;
    star.style.animationName = animation[selectRandom()];
    document.body.appendChild(star);
    setTimeout(() => {
        document.body.removeChild(star);
    }, 1500);
}

function selectRandom() {
    let randomNo = Math.floor(Math.random() * 3);
    return randomNo;
}
