
/* Aplicación de hover con javaScript para el HEADER */

const menuHover1 = document.querySelector(".menu-hover-option");
console.log(menuHover1);

const option1 = document.getElementById("header-option1");
console.log(option1);

/*------- mouseover  y mouseout   -----------*/

option1.addEventListener("mouseover", triggerHover);

function triggerHover() {
    menuHover1.classList.remove("inactive");       
}

option1.addEventListener("mouseout", dissappearHover);

function dissappearHover() {
    menuHover1.classList.add("inactive");
}




/*

*/