document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("active");
        menuBtn.classList.toggle("active");

        const opened =
            mainNav.classList.contains("active");

        menuBtn.setAttribute(
            "aria-expanded",
            opened
        );

    });

});