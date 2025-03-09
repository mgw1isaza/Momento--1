document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-hamburguesa");
    const navMenu = document.querySelector(".barranav");

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
