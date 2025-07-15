let ratingBtns = document.querySelectorAll(".rating-btn button")
let submitBtn = document.querySelector(".submit")
let ratingInfo = document.querySelector(".rating-info")
let number = ""

// Only if rating buttons exist (main page) so we need to check for them since it js file will be for both the html files
if (ratingBtns.length && submitBtn) {
  ratingBtns.forEach((button, index) => {
    button.addEventListener("click", function () {
      number = index + 1
    });
  });

  submitBtn.addEventListener("click", () => {
    if (number === "") {
      alert("Kindly give a rating")
    } else {
      localStorage.setItem("rating", number)
      window.location.href = "thankyou.html"
    }
  });
}

// Only if ratingInfo exists (thank you page)
if (ratingInfo) {
  const rating = localStorage.getItem("rating")
  if (rating) {
    ratingInfo.style.display="block"
    ratingInfo.textContent = `You selected ${rating} out of 5`
    console.log(rating)
    localStorage.removeItem("rating")
  }
}
