function changeText() {
    var x = document.getElementById("showHideComments");
    if (x.innerHTML === "Show Comments") {
        x.innerHTML = "Hide Comments";
    } else {
        x.innerHTML = "Show Comments";
    }
}