<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MyMusics</title>
        <link rel="stylesheet" type="text/css" href="style/styleGlobal.css" />
        <link rel="stylesheet" type="text/css" href="style/styleBuscar.css" />
    </head>
    <body>
        <nav class="navbar">
            <ul class="listaOptions">
                <li class="item">
                    <a href="index.html"><img class="logo_navbar" src="assets/home.svg" alt="Icon-Home">HOME</a>
                </li>
                <li class="item">
                    <a href="#"><img class="logo_navbar" src="assets/lupaNav.svg" alt="Icon-Play">BUSCAR</a>
                </li>
                <li class="item">
                    <a href="uploadMusic.html"><img class="logo_navbar" src="assets/upload.svg" alt="Icon-Upload">ENVIAR MÚSICA</a>
                </li>
            </ul>
        </nav>
        <section class="formBuscarMusica">
            <div class="formBusca">
                <div class="caixaBusca">
                    <label for="pesquisaM"><img src="assets/lupa.svg" alt="lupaBuscar"></label>
                    <input id="pesquisaM" name="pesquisaM" placeholder="Digite a música para buscar">
                </div>
            </div>
            <div class="gridMusicas">
                <h2>Músicas Adicionadas</h2>
                <div class="music">
                    <div class="conteudo-musica">
                        <button>
                            <img src="assets/play.svg" alt="PlayPauseMusic">
                        </button>
                        <div class="info-musica">
                            <p class="titulo-musica">Nome da Música</p>
                            <p class="artista-musica">Artista</p>
                        </div>
                        <button>
                            <img id="mudaFavorito" src="assets/favoritoNO.svg" alt="FavoriteMusic">
                        </button>
                    </div>
                    <audio src=""></audio>
                </div>
            </div>
        </section>
        <footer>
            <p>@MyMusic - Jessica e Leonardo - 2023</p>
        </footer>
        <script src="c_controller.js" type="text/javascript"></script>
    </body>
</html>
