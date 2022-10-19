
const ratingContainer = document.querySelector(".rating-container")
const thankYouContainer = document.querySelector(".thank-you-container")
const submitButton = document.getElementById("submit-button")
const backButton = document.getElementById("back-button")
const ratings = document.querySelectorAll(".btn")
const userRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  ratingContainer.style.display = "none"
  thankYouContainer.classList.remove("hidden")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      userRating.innerHTML = rating.innerHTML
    })
  })
})

backButton.addEventListener("click", () => {
  ratingContainer.style.display = "block"
  thankYouContainer.classList.add("hidden")
})