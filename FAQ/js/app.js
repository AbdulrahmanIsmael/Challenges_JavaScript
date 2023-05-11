const i = document.querySelectorAll("#btn>i");

i.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (
      e.target.parentElement.parentElement.classList.contains("collapse") ===
      false
    ) {
      e.target.parentElement.parentElement.classList.add("collapse");
    } else {
      e.target.parentElement.parentElement.classList.remove("collapse");
    }
  });
});
