
document.addEventListener("DOMContentLoaded", function(event) {
    let clickCount = 0;
    document.getElementById("btnAlert").addEventListener("click", function() {
        alert("Hello World!");
    });

    document.getElementById("btnCounter").addEventListener("click", function() {
        setCounter(++clickCount);
    });
    setCounter(clickCount);
});

function setCounter(value) {
    document.getElementById("clickCounter").innerHTML = value.toString();
}