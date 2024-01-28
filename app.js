function showInformation(atom) {
    var information = atom.parentElement.getElementsByClassName("information")[0];
    console.log("show: " + information.innerHTML);
    information.style.visibility = "visible";
}

function hideInformation(atom) {
    console.log("hide");
    var information = atom.parentElement.getElementsByClassName("information")[0];
    information.style.visibility = "hidden";
}
