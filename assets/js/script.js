const livros = [
    {
        titulo: "Ninguém pode me ferir",
        autor: "David Goggins",
        capa: "https://m.media-amazon.com/images/I/71wdbq8NbFL._AC_UF1000,1000_QL80_.jpg",
        lido: true
    },
    {
        titulo: "Arrume sua cama",
        autor: "William H. McRaven",
        capa: "https://m.media-amazon.com/images/I/816GgWf3JfL._UF1000,1000_QL80_.jpg",
        lido: true 
    },
    {
        titulo: "Hábitos Atômicos",
        autor: "James Clear",
        capa: "https://m.media-amazon.com/images/I/81eT2pjx4jL.jpg",
        lido: true
    },
    {
        titulo:"Essencialismo" ,
        autor:"Greg McKeown" ,
        capa: "https://m.media-amazon.com/images/I/71HuZRl-XeL.jpg",
        lido: false
    },
    {
        titulo:"Entendendo algoritmos",
        autor:"Aditya Y. Bhargava",
        capa:"https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY425_.jpg",
        lido: false
    }
];

const container = document.getElementById('estante-container');

function renderizarLivros() {
    container.innerHTML = '';

    livros.forEach((livro, index) => {
        const classeBotao = livro.lido ? 'botao-lido' : 'botao-nao-lido';
        const textoBotao = livro.lido ? 'Lido ✅' : 'Não Lido ❌';

        const cartao = `
            <article class="infomacoes-da-capa">
                <img src="${livro.capa}" alt="${livro.titulo}" class="capa-do-livro">
                
                <button class="botao-remover" onclick="removerLivro(${index})" title="Remover livro">
                    🗑️
                </button>

                <div class="infomacoes-do-livro">
                    <div>
                        <h3 class="titulo-do-livro">${livro.titulo}</h3>
                        <p class="autor-do-livro">${livro.autor}</p>
                    </div>
                    
                    <div class="botoes-container">
                        <button class="${classeBotao}" onclick="alternarStatus(${index})">
                            ${textoBotao}
                        </button>
                    </div>
                </div>
            </article>
        `;
        
        container.innerHTML += cartao;
    });
}

function alternarStatus(index) {
    livros[index].lido = !livros[index].lido;
   
    renderizarLivros();
}

renderizarLivros();

function adicionarNovoLivro() {
   
    const tituloInput = document.getElementById('input-titulo').value;
    const autorInput = document.getElementById('input-autor').value;
    const capaInput = document.getElementById('input-capa').value;

    
    if (tituloInput === "" || autorInput === "" || capaInput === "") {
        alert("Por favor, preencha todos os campos!");
        return; 
    }

    
    const novoLivro = {
        titulo: tituloInput,
        autor: autorInput,
        capa: capaInput,
        lido: false 
    };

    
    livros.push(novoLivro);

    
    renderizarLivros();

   
    document.getElementById('input-titulo').value = '';
    document.getElementById('input-autor').value = '';
    document.getElementById('input-capa').value = '';
}

function removerLivro(index) {
    const confirmar = confirm(`Tem certeza que deseja remover "${livros[index].titulo}"?`);

    if (confirmar) {
        livros.splice(index, 1);

        
        renderizarLivros();
    }
}