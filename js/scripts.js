var link = document.querySelector(".login");

var popup = document.querySelector(".enter-form");
var close = popup.querySelector(".close");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("enter-form-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("enter-form-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("enter-form-show")) {
            popup.classList.remove("enter-form-show");
        }
    }
});