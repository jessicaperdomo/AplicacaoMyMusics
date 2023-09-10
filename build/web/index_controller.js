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

function upload_musica(){
    event.preventDefault();
    
    let dados = new FormData(document.getElementById("uploadMp3"));
    
    fetch("servlet_upload",{ method: 'post', body: dados})
        .then(response=>response.text())
        .then(mens=>{showFeedback("Salvo com sucesso!", true)})
        .catch(error=>{showFeedback("Não conseguimos salvar!", false)})

    document.getElementById("uploadMp3").reset();
}

function showFeedback(message, isSuccess) {
    var feedbackDiv = document.getElementById("feedback");
    
    feedbackDiv.textContent = message;
    
    if (isSuccess) {
        feedbackDiv.style.backgroundColor = "#4CAF50";
    } else {
        feedbackDiv.style.backgroundColor = "#FF5733";
    }
    
    feedbackDiv.style.display = "block"; 
    
    setTimeout(function() {
        feedbackDiv.style.display = "none";
    }, 5000);
}