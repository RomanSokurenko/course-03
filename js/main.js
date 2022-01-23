const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("close_pop_up");
const popUp = document.getElementById("pop_up");

openPopUp.addEventListener("click", () => {
  popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});
