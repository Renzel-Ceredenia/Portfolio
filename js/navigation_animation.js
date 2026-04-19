
const nav = document.getElementById("floatingNav");

window.addEventListener("scroll", function () {

if (window.scrollY > 300) {
nav.classList.add("scrolled");
} else {
nav.classList.remove("scrolled");
}

});


const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

/* safety check (prevents errors) */
if (searchBtn && searchBox) {

searchBtn.addEventListener("click", function (e) {
e.stopPropagation(); // prevents accidental closing bugs
searchBox.classList.toggle("active");
});

}

/* optional: close when clicking outside */
document.addEventListener("click", function (e) {

if (!searchBox.contains(e.target) && !searchBtn.contains(e.target)) {
searchBox.classList.remove("active");
}

});