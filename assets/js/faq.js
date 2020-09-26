function growDiv(text) {
    // console.log(text[4]);
    var growDiv = document.getElementById(text);
    if (growDiv.clientHeight) {
        growDiv.style.height = 0;
    } else {
        var wrapper = document.querySelector('.measuringWrapper' + text[4]);
        growDiv.style.height = wrapper.clientHeight + "px";
    }
}