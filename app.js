
const mostraFilmes = (data) => {
    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem('db_filmes', data.target.response)
    
    let dadosHTML = '';
    for (let i = 0; i < dadosFilmes.results.length; i++) {
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        <div class="card text-center col-6 col-lg-3 col-xl-3">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="Filme XPTO">
                <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text teste">${filme.overview}</p>
                    <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-outline-light">Veja mais...</a>
                </div>
                <div class="card-footer">
                <small class="text-muted">Avaliação: ${filme.vote_average}</small>
                <br>
                <small class="text-muted">Idioma original: ${filme.original_language}</small>
            </div>
        </div>
        `
    }
    document.getElementById('divListaFilmes').innerHTML = dadosHTML
}

const mostraErro = (data) => {
    alert('Erro na requisição');
}

const init = () => {
    let xhr = new XMLHttpRequest();
    let url = "http://api.themoviedb.org/3/movie/popular?api_key=a8bf1f725f0d452702d7b1955b7e461b&language=pt-BR"
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send ();
}


document.body.onload = init;