const button = document.querySelector(".container__button");
const modal = document.getElementById("myModal");
const close = document.querySelector(".modal__close");

button.addEventListener("click", () => {
  modal.classList.add("modal-active");
});

close.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});
