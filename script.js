const menuToggle = document.getElementById("menuToggle");
const menuSection = document.getElementById("menu");
const backBtn = document.getElementById("backMenuBtn");

menuToggle.addEventListener("click", function (e) {
    e.preventDefault();

    menuSection.style.display = "none";
    backBtn.style.display = "block";
});

backBtn.addEventListener("click", function () {
    menuSection.style.display = "block";
    backBtn.style.display = "none";

    menuSection.scrollIntoView({ behavior: "smooth" });
});
