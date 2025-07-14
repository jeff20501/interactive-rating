let ratingBtns = document.querySelectorAll(".rating-btn button")


ratingBtns.forEach((button, index)=>{
    button.addEventListener("click", function(){
        alert("clicked!!")
    })
})