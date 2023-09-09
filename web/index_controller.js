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