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
