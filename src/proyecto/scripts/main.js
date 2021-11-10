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

/*BORRAR ELEMENTO*/
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



//Proves fetch
function getItems() {
    console.log("getItems()");
    var endpoint_list = 'https://tolistoapi.herokuapp.com/todoitems';

    fetch(endpoint_list)
        .then(response => response.json())
        .then(data => console.log(data));
    return '[{"id":1,"description":"Manzanas","done":true,"position":0},{"id":2,"description":"Naranjas","done":true,"position":1},{"id":3,"description":"Yogurt","done":false,"position":2}]';
}

function renderItems() {
    var items = JSON.parse('[{"id":1,"description":"Manzanas","done":false,"position":0},{"id":2,"description":"Naranjas","done":true,"position":1},{"id":3,"description":"Yogurt","done":false,"position":2}]');
    for (i = 0; i < items.length; i++) {
        renderItem(items[i]);
    }
}

function renderItem(element) {
    var t = document.createTextNode(element.description);

    var li = document.createElement("li");
    li.classList.add('list-group-item');
    li.appendChild(t);

    document.getElementById("llista").appendChild(li);

    if (element.done) {
        console.log(element.description + " DONE")
        li.classList.add('task-done')
    }

    li.addEventListener('click', function () {
        this.classList.toggle('task-done');
    });

}








fetch("https://taskt-api.herokuapp.com/")
    .then((resp) => resp.json())
    .then(function(data) {
        let list = data.results
        return list.map(function (list) {
            var json = JSON.parse(list)
            var ul = document.getElementById("lista_ul");
            var li = document.createElement("li");
            var input = document.createElement("input")
            input.type = "checkbox"
            var img = document.createElement("img");
            img.setAttribute("src", "src/proyecto/media/delete.svg")
            img.setAttribute("onerror", "this.onerror=null; this.src='src/proyecto/media/delete.png'")
            img.className = "close";


            li.appendChild(input)
            li.appendChild(img)
            li.appendChild(document.createTextNode(""));
            ul.appendChild(li)
        })
    })


//function getDades() {
//    var data = {}
//    var json = JSON.parse(data)
//
//}
//
//
//
//async function getlList() {
//    let url = "https://taskt-api.herokuapp.com/todolists/";
//    try {
//        let res = await fetch(url);
//        return await res.json();
//    } catch (error) {
//        console.log(error);
//    }
//}
//
//async function renderUsers() {
//    let users = await getUsers();
//    users.forEach(user => {
//        let htmlSegment = `<div class="user">
//                            <img src="${user.profileURL}" >
//                            <h2>${user.firstName} ${user.lastName}</h2>
//                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                        </div>`;
//        var ul = document.getElementById("lista_ul");
//        var li = document.createElement("li");
//        var input = document.createElement("input")
//        input.type = "checkbox"
//        var img = document.createElement("img");
//        img.setAttribute("src", "src/proyecto/media/delete.svg")
//        img.setAttribute("onerror", "this.onerror=null; this.src='src/proyecto/media/delete.png'")
//        img.className = "close";
//
//
//        li.appendChild(input)
//        li.appendChild(img)
//        li.innerHTML = '${}'
//        ul.appendChild(li)
//    });
//
//
//}
//
//renderUsers();