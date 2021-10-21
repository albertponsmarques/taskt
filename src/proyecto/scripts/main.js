/*CREAR NUEVO ELEMENTO EN LA LISTA*/
function newElement() {
    var ul = document.getElementById("lista_ul");
    var li = document.createElement("li");
    var input = document.createElement("input")
    input.type = "checkbox"
    var inputValue = document.getElementById("inputli").value;
    var img = document.createElement("img");
    img.setAttribute("src","src/proyecto/media/delete.svg")
    img.setAttribute("onerror","this.onerror=null; this.src='src/proyecto/media/delete.png'")
    img.className = "close";

    if (inputValue === '') {
        alert("Debes poner algo en el elemento!");
    } else {
        li.appendChild(input)
        li.appendChild(img)
        li.appendChild(document.createTextNode(inputValue));
        ul.appendChild(li)
    }

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    document.getElementById("inputli").value = "";
}

/*BORRAR ELEMENTO DE LA LISTA*/
var milista = document.getElementsByTagName("li");
var i;
for (i = 0; i < milista.length; i++) {
    var img = document.createElement("img");
    img.setAttribute("src","src/proyecto/media/delete.svg")
    img.setAttribute("onerror","this.onerror=null; this.src='src/proyecto/media/delete.png'")
    img.className = "close";
    milista[i].appendChild(img);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


/*ABRIR Y CERRAR MENU IZQ*/
function openNav() {
    document.getElementById("menuizq").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("menuizq").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/*MOVER ELEMENTO DE LA LISTA*/
const lista = document.getElementById("lista_ul")
Sortable.create(lista,{})