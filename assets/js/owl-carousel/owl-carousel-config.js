const filmesPrincipais = [
    {
        titulo: 'HOUSE OF CARDS',
        descricao: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',
        imagem: 'capa-house-of-cards.jpg',
        trailer: 'https://www.youtube.com/embed/2OdjW2WSfp8'
    },
    {
        titulo: 'LIGA DA JUSTIÇA',
        descricao: 'Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.',
        imagem: 'capa-liga-da-justica.jpg',
        trailer: 'https://www.youtube.com/embed/BifA90UAQtg'
    },
    {
        titulo: 'Nova Ordem Espacial',
        descricao: 'Perseguindo detritos espaciais e sonhos distantes no ano de 2092, quatro desajustados descobrem segredos explosivos durante a tentativa de comércio de um humanoide.‎',
        imagem: 'capa-nova-ordem-espacial.jpg',
        trailer: 'https://www.youtube.com/embed/v6jmKLAW928'
    }
];

let filmesPrincipaisImagem = document.querySelector('.filmes-principais');
let filmePrincipal = document.querySelector('#filme-principal');

filmesPrincipais.forEach(filme => {
    filmePrincipal.innerHTML += `
    <div class="item">
        <h3 class="titulo">${filme.titulo}</h3>
        <p class="descricao">${filme.descricao}</p>
        <div class="botoes">
            <button role="button" class="botao">
                <i class="fas fa-play"></i>
                ASSISTIR AGORA
            </button>
            <button role="button" class="botao btn-trailer" onclick="openTrailer('${filme.trailer}')">
                <i class="far fa-play-circle"></i>
                TRAILER
            </button>
        </div>
    </div>    
    `;
});

function openTrailer(trailer){
    document.querySelector('.trailer').style.display = 'inline-block';
    let iframe = document.querySelector('#iframe-trailer').src = trailer;
}

function closeTrailer(){
    document.querySelector('.trailer').style.display = 'none';
}

$('#filme-principal').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    onChange: callback
});

function callback(event) {
    let indice = event.item.index === 0 ? 0 : event.item.index - 1;
    filmesPrincipaisImagem.style.background = `linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)100%), url(assets/img/${filmesPrincipais[indice].imagem})`;
    filmesPrincipaisImagem.style.backgroundSize = 'cover';
}

$('#filmes').owlCarousel({
    loop: true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

