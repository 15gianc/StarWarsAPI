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




const getData = (api) =>{
    
    return fetch(api)
    .then((response) => response.json())
    .then ((json) =>{
        fillData(json);
    })
    .catch((error) =>{
        console.log("Error in the API", error);
    })

}




const fillData = (data) =>{ 
    let html = ""; 
    

    data.results.forEach(sw => {



        html += '<div class="col">';
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

    document.getElementById("dataAlbum").innerHTML = html;

}







getData(API);