const heading = document.querySelector("#heading");
const changeButton = document.querySelector("#changeButton");

changeButton.addEventListener("click", function() {
    heading.textContent = "Goodbye World";
});
