let menuBtn = document.getElementById("menuBtn");
let linkNav = document.getElementById("linkNav");



// --------- MenuBtn --------- //

menuBtn.addEventListener("click",function(){
    linkNav.classList.toggle("d-flex");
});