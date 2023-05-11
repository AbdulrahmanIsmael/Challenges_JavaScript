const buttons = ["Arcade", "Dog", "Alarm", "Laugh", "Roar"];

buttons.forEach((button) => {
  let btn = document.createElement("button");
  btn.innerHTML = button;
  btn.classList.add("btn");
  btn.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach((a) => {
      a.pause();
    });
    document.getElementById(button.toLowerCase()).play();
  });
  document.querySelector(".container").appendChild(btn);
});
