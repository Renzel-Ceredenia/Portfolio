
// Search Functionality
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

if (searchBtn && searchBox) {

    searchBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        searchBox.classList.toggle("active");
    });

}

document.addEventListener("click", function (e) {

    if (!searchBox.contains(e.target) &&
        !searchBtn.contains(e.target)) {

        searchBox.classList.remove("active");
    }

});

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", function () {

        const animations = [
            "popAnimation1",
            "popAnimation2",
            "popAnimation3"
        ];

        const random =
            animations[Math.floor(Math.random() * animations.length)];

        const element = document.getElementById(random);

        // Reset animation
        element.classList.remove(random);
        void element.offsetWidth;

        // Run animation
        element.classList.add(random);

    });

}

const homeBtn = document.getElementById("homeBtn");

if(homeBtn){

    homeBtn.addEventListener("click", function(){

        alert("YOU ARE HERE!");

    });

}
