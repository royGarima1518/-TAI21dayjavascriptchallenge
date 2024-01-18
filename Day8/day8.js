/*Garima Roy*/

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dynamicDiv").innerHTML = "<p> Day 8 </p>";

    const paragraph = document.createElement("p");
    const node = document.createTextNode("21 days JavaScript Challenge");
    
    paragraph.appendChild(node);
    document.getElementById("dynamicDiv").appendChild(paragraph);
});
