var customScroll = document.querySelector(".custom-scroll");
var homeBtn = document.getElementById("home-btn");

homeBtn.addEventListener("click", function() {
    customScroll.scrollTo({ top: 0, behavior: "smooth" });
});