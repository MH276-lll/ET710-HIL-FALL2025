const myForm = document.forms["exampleForm"];
const outputContainer = document.getElementById("output1");
myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    run();
});

function display(text) {
    outputContainer.innerHTML = text;
}