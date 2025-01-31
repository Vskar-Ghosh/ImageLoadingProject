const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = ((load - 0) * (0 - 1)) / (100 - 0) + 1;
  bg.style.filter = `blur(${((load - 0) * (0 - 30)) / (100 - 0) + 30}px)`;
}
