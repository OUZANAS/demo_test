const plusIcon = document.getElementById("plus");
const aside = document.getElementById("aside");
const menu = document.getElementById("barre");
const nav = document.getElementById("nav");

plusIcon.addEventListener("mouseover", () => {
   aside.style.visibility="visible";
});

plusIcon.addEventListener("mouseout", () => {
    aside.style.visibility="hidden";
});

menu.addEventListener("click", () => {
    if (nav.style.width === "120px"){
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block"
        nav.style.width = "120px"
        nav.style.height = "75%"
    }
});