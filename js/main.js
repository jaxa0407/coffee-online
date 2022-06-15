var elHeader = document.querySelector(".header__inner-wrap");
var elBtn = document.querySelector(".header__btn");

elBtn.addEventListener("click", ( )=>{
    elHeader.classList.toggle("header__inner-wrap--active")
})