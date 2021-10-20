function newElement() {
    var ul = document.getElementById("lista_ul");
    var li = document.createElement("li");
    var input = document.createElement("input")
    input.type = "checkbox"
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("Debes poner algo en el elemento!");
    } else {
        li.appendChild(document.createTextNode(inputValue));
        li.appendChild(input)
        ul.appendChild(li)
    }
    document.getElementById("myInput").value = "";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}