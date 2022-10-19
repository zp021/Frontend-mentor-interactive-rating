
const ratingContainer = document.querySelector(".rating-container")
const thankYouContainer = document.querySelector(".thank-you-container")
const submitButton = document.getElementById("submit-button")
const backButton = document.getElementById("back-button")
const ratings = document.querySelectorAll(".btn")
const userRating = document.getElementById("rating")

window.addEventListener("load", () => {
  submitButton.disabled = true
})

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
  submitButton.disabled = false
  userRating.innerHTML = rating.innerHTML;
  })
})

submitButton.addEventListener("click", () => {
  ratingContainer.style.display = "none"
  thankYouContainer.classList.remove("hidden")
})

backButton.addEventListener("click", () => {
  ratingContainer.style.display = "block"
  thankYouContainer.classList.add("hidden")
  submitButton.disabled = true
})