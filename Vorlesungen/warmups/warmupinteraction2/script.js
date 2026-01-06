let counter = 0;

document.querySelector("button").addEventListener("click", function() {
    counter++;
    console.log("Button wurde " + counter + " mal gedrückt");
});