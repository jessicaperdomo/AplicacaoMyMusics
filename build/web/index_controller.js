var formContato = document.getElementById("btnEnviar");
var nomeInput = document.getElementById("nome");
var artistaInput = document.getElementById("artista");

function validarNome() {
    let nameError = document.getElementById("nomeError");
    let nameRegex = /^[a-zA-Z0-9_ ]+$/;

    nameError.textContent = "";

    if (!nameRegex.test(nomeInput.value)) {
        nameError.textContent = "Nome não deve conter caracteres especiais!";
        nomeInput.classList.add("error-border");
        return false;
    } else {
        nomeInput.classList.remove("error-border");
        return true;
    }
}


function validarArtista() {
    let artistError = document.getElementById("artistaError");
    let artistaRegex = /^[a-zA-Z0-9_ ]+$/;

    artistError.textContent = "";

    if (!artistaRegex.test(artistaInput.value)) {
        artistError.textContent = "Artista não deve conter caracteres especiais!";
        artistaInput.classList.add("error-border");
        return false;
    } else {
        artistaInput.classList.remove("error-border");
        return true;
    }
}



function upload_musica(){
    event.preventDefault();
    
    let dados = new FormData(document.getElementById("uploadMp3"));
    console.log(dados);
    
    fetch("servlet_upload",{ method: 'post', body: dados})
        .then(response=>response.text())
        .then(mens=>{document.getElementById("feedback").innerHTML = mens})
        .catch(error=>{document.getElementById("feedback").innerHTML = error})

    document.getElementById("uploadMp3").reset();
}

function validarFormulario(event) {
    let isNomeValid = validarNome();
    let isArtistaValid = validarArtista();
  
    if (!isNomeValid || !isArtistaValid) {
        event.preventDefault();
        btnEnviar.disabled = true;
        btnEnviar.style.backgroundColor =  "#91c6ff";
    } else {
        btnEnviar.disabled = false;
        btnEnviar.style.backgroundColor =  "#007BFF";
    }
}


nomeInput.addEventListener('blur', validarFormulario,false);
artistaInput.addEventListener('blur', validarFormulario,false);

formContato.addEventListener("submit", validarFormulario,false);

btnEnviar.disabled = true;