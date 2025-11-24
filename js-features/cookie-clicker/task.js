const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

const normalSize = 200;
const smallSize = 170;

let isSmall = false;

cookie.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;

    if (isSmall) {
        cookie.width = normalSize;
    } else {
        cookie.width = smallSize;
    }

    isSmall = !isSmall;
};
