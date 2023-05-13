var customScroll = document.querySelector(".custom-scroll");
var scrollBtn = document.getElementById("scroll-btn");

customScroll.addEventListener("scroll", function() {
    if (customScroll.scrollTop > 100) { 
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", function() {
    customScroll.scrollTo({ top: 0, behavior: "smooth" });
});