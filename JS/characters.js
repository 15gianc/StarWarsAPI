const login = document.getElementById("login");
const logout = document.getElementById("logout");
const loginuser = document.getElementById("loginuser");

const iniciarSesion = () =>{
    let usuario = prompt ("Ingresa un Nickname").toLocaleUpperCase();
    localStorage.setItem("nickname", usuario);
    loginuser.innerHTML = usuario;
};
if (localStorage.getItem("nickname")) {
    loginuser.innerHTML = localStorage.getItem("nickname");
}

const cerrarSesion = () =>{
    loginuser.innerHTML = " ";
    localStorage.clear();
};

login.onclick = function () {
    iniciarSesion();
};
logout.onclick = function () {
    cerrarSesion();
}



//API personajes

const API = "https://swapi.dev/api/people/";



//Obteniendo los resultados de la API, es decir la URL
const getData = (api,api2) =>{
    //Retorna el resultado de la API, ya que el fetch se encarga de consumir la API, es decir (api), que tiene la url
    return fetch(api,api2)
    .then((response) => response.json())//guarda esos json(las fotos) en la palabra json <= hay 5000 fotos
    .then ((json) =>{
        fillData(json);//Se envian esas 5000 fotos a lafuncion fillData para ya dibujarlos en el html

    })
    .catch((error) =>{
        console.log("Error in the API", error);//En caso tal de que haya un error
    })

}


//Funcion para comenzar a dibujar las cards de las fotos

const fillData = (data) =>{ //data es el mismo json(recibe las 5k fotos)
    let html = ""; //Creamos la variable html en la cual agregaremos las cards
    //let limit = 20;//Creamos una variable limite de 20 fotos (Para no poner las 5k fotos porque podria colapsar el sistema)

    data.results.forEach(sw => {


//utilizamos el for normal porque tiene limites con la condicion que le agregamos (el forEach es para cuando no tengamos que establecer un limite)
        html += '<div class="col">'; //Se recomienda comillas simples
        html += '<div class="card h-100">';
       
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${sw.name}</h5>`;
        html += `<p class="card-text"> ${sw.gender} </p>`;
        html += `<p class="card-text">Height : ${sw.height} </p>`;
        html += `<p class="card-text">Hair Color : ${sw.hair_color} </p>`;
        html += `<p class="card-text">Eye Color : ${sw.eye_color} </p>`;
        html += `<p class="card-text">Birth Year : ${sw.birth_year} </p>`;

        






        html += "</div>";
        html += "</div>";
        html += "</div>";

    });

    document.getElementById("dataAlbum").innerHTML = html;//Se toma la variable html y se le agrega al div contenedor de las 20 cards

}






//Se invoca la funcion automaticamente, ya que no tenemos el boton
//Se le envia la variable API
getData(API);