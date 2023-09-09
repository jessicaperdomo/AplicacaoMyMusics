document.addEventListener("DOMContentLoaded", buscarMusica);

var pesq = document.getElementById("pesquisaM");
pesq.addEventListener("keyup", buscarMusica);

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
                    var musicaElement = document.createElement('div');
                    musicaElement.classList.add('music');

                    var conteudoMusica = document.createElement('div');
                    conteudoMusica.classList.add('conteudo-musica');

                    var playButton = document.createElement('button');
                    var playImg = document.createElement('img');
                    playImg.src = 'assets/play.svg';
                    playImg.alt = 'PlayPauseMusic';
                    playButton.appendChild(playImg);

                    var infoMusica = document.createElement('div');
                    infoMusica.classList.add('info-musica');

                    var tituloMusica = document.createElement('p');
                    tituloMusica.classList.add('titulo-musica');
                    tituloMusica.textContent = nomeMusica;

                    var artistaMusica = document.createElement('p');
                    artistaMusica.classList.add('artista-musica');
                    artistaMusica.textContent = 'Artista';

                    infoMusica.appendChild(tituloMusica);
                    infoMusica.appendChild(artistaMusica);

                    var favoritoButton = document.createElement('button');
                    var favoritoImg = document.createElement('img');
                    favoritoImg.src = 'assets/favoritoNO.svg';
                    favoritoImg.alt = 'FavoriteMusic';
                    favoritoButton.appendChild(favoritoImg);

                    conteudoMusica.appendChild(playButton);
                    conteudoMusica.appendChild(infoMusica);
                    conteudoMusica.appendChild(favoritoButton);

                    var audioElement = document.createElement('audio');
                    audioElement.src = nomeMusica;

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
