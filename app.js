let amigo = [];

function agregarAmigo(){
    let ingresarAmigo = document.getElementById("amigo");
    let nombreAmigo = ingresarAmigo.value;

    if(!nombreAmigo){
        alert("Debes ingresar el nombre de un amigo");
        return;
    }
    amigo.push(nombreAmigo);
    ingresarAmigo.value = "";
    ingresarAmigo.focus();
    mostrarAmigos();

};

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
};

function sortearAmigo() {
    if(amigo.length === 0){
        alert("No hay amigos para realizar el sorteo");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado   = document.getElementById("resultado");
    resultado.innerHTML = `El amigo seleccionado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}

