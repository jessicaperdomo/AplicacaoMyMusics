document.addEventListener("DOMContentLoaded", buscarMusica);

var pesq = document.getElementById("pesquisaM");
pesq.addEventListener("keyup", buscarMusica);

function criarBotaoPlayPause(audio) {
    var playPauseButton = document.createElement('button');
    playPauseButton.classList.add('play-pause-button');
    
    var playImg = document.createElement('img');
    
    playImg.src = 'assets/play.svg';
    playImg.alt = 'PlayPauseMusic';
    playPauseButton.appendChild(playImg);

    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playImg.src = 'assets/pause.svg';
        } else {
            audio.pause();
            playImg.src = 'assets/play.svg';
        }
    });

    return playPauseButton;
}

function criarBotaoFavorito() {
    var favBtn = document.createElement('button');
    favBtn.classList.add('mudaFavorito');
    
    var favImg = document.createElement('img');
    
    favImg.src = 'assets/favoritoNO.svg';
    favImg.alt = 'mudaFavorito';
    favBtn.appendChild(favImg);

    favBtn.addEventListener('click', function () {
        if (favImg.src.includes('assets/favoritoYES.svg')) {
            favImg.src = 'assets/favoritoNO.svg';
        } else {
            favImg.src = 'assets/favoritoYES.svg';
        }
    });

    return favBtn;
}

function buscarMusica() {
    event.preventDefault();
    let chave = document.getElementById("pesquisaM").value;

    fetch("servlet_busca_musica?chave=" + chave, { method: 'GET' })
        .then(response => response.text())
        .then(data => {
            var musicContainer = document.querySelector(".gridMusicas");
            var musicElements = data.split("#");

            musicContainer.innerHTML = '';

            for (var i = 0; i < musicElements.length; i++) {
                var nomeMusica = musicElements[i].trim();

                if (nomeMusica !== "") {
                    var dados = nomeMusica.split("&");
                    
                    var musicaElement = document.createElement('div');
                    musicaElement.classList.add('music');

                    var conteudoMusica = document.createElement('div');
                    conteudoMusica.classList.add('conteudo-musica');

                    var infoMusica = document.createElement('div');
                    infoMusica.classList.add('info-musica');

                    var tituloMusica = document.createElement('p');
                    tituloMusica.classList.add('titulo-musica');
                    tituloMusica.textContent = dados[1];

                    var artistaMusica = document.createElement('p');
                    artistaMusica.classList.add('artista-musica');
                    artistaMusica.textContent = dados[2].split(".")[0];

                    infoMusica.appendChild(tituloMusica);
                    infoMusica.appendChild(artistaMusica);

                    var favoritoButton = criarBotaoFavorito();

                    var audioElement = document.createElement('audio');
                    audioElement.src = nomeMusica;
                    
                    var playButton = criarBotaoPlayPause(audioElement);

                    conteudoMusica.appendChild(playButton);
                    conteudoMusica.appendChild(infoMusica);
                    conteudoMusica.appendChild(favoritoButton);
                    
                    musicaElement.appendChild(conteudoMusica);
                    musicaElement.appendChild(audioElement);
                    musicContainer.appendChild(musicaElement);
                }
            }
        })
        .catch(error => {
            console.error(error);
        });
}
