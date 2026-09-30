/**
 * ==========================================================================
 * MINHA BIBLIOTECA - JAVASCRIPT PRINCIPAL (ES6+ & CLEAN ARCHITECTURE)
 * ==========================================================================
 * - Arquitetura de Estado Centralizado
 * - Persistência Segura com LocalStorage e try/catch
 * - Prevenção contra XSS e Manipulação Segura do DOM
 * - Delegação de Eventos (Event Delegation)
 * - Busca em Tempo Real e Filtros de Status
 * - Sistema de Toasts e Modal Acessível de Confirmação
 * - Suporte a Tema Claro/Escuro com persistência
 */

'use strict';

// --------------------------------------------------------------------------
// 1. Constantes & Dados Iniciais Padrão
// --------------------------------------------------------------------------
const STORAGE_KEY_BOOKS = 'minhaBiblioteca_v3';
const STORAGE_KEY_THEME = 'minhaBiblioteca_theme';

const LIVROS_PADRAO = [
    {
        id: 'book-1',
        titulo: 'Ninguém Pode Me Ferir',
        autor: 'David Goggins',
        capa: 'https://m.media-amazon.com/images/I/71wdbq8NbFL._AC_UF1000,1000_QL80_.jpg',
        lido: true,
        criadoEm: 1700000000000
    },
    {
        id: 'book-2',
        titulo: 'Arrume a Sua Cama',
        autor: 'William H. McRaven',
        capa: 'https://m.media-amazon.com/images/I/816GgWf3JfL._UF1000,1000_QL80_.jpg',
        lido: true,
        criadoEm: 1700000001000
    },
    {
        id: 'book-3',
        titulo: 'Hábitos Atômicos',
        autor: 'James Clear',
        capa: 'https://m.media-amazon.com/images/I/81eT2pjx4jL.jpg',
        lido: true,
        criadoEm: 1700000002000
    },
    {
        id: 'book-4',
        titulo: 'Essencialismo',
        autor: 'Greg McKeown',
        capa: 'https://m.media-amazon.com/images/I/71HuZRl-XeL.jpg',
        lido: false,
        criadoEm: 1700000003000
    },
    {
        id: 'book-5',
        titulo: 'Entendendo Algoritmos',
        autor: 'Aditya Y. Bhargava',
        capa: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY425_.jpg',
        lido: false,
        criadoEm: 1700000004000
    },
    {
        id: 'book-6',
        titulo: 'Meditações',
        autor: 'Marco Aurélio',
        capa: 'https://covers.openlibrary.org/b/id/13202688-L.jpg',
        lido: true,
        criadoEm: 1700000005000
    },
    {
        id: 'book-7',
        titulo: 'Manifesto Comunista',
        autor: 'Karl Marx e Friedrich Engels',
        capa: 'https://covers.openlibrary.org/b/id/11048623-L.jpg',
        lido: false,
        criadoEm: 1700000006000
    },
    {
        id: 'book-8',
        titulo: 'O Príncipe',
        autor: 'Nicolau Maquiavel',
        capa: 'https://covers.openlibrary.org/b/id/15142439-L.jpg',
        lido: false,
        criadoEm: 1700000007000
    },
    {
        id: 'book-9',
        titulo: 'A Lei',
        autor: 'Frédéric Bastiat',
        capa: 'https://covers.openlibrary.org/b/id/8819903-L.jpg',
        lido: false,
        criadoEm: 1700000008000
    },
    {
        id: 'book-10',
        titulo: 'Manual de Persuasão do FBI',
        autor: 'Jack Schafer e Marvin Karlins',
        capa: 'https://covers.openlibrary.org/b/id/10299599-L.jpg',
        lido: false,
        criadoEm: 1700000009000
    },
    {
        id: 'book-11',
        titulo: 'A Psicologia Financeira',
        autor: 'Morgan Housel',
        capa: 'https://covers.openlibrary.org/b/id/10389354-L.jpg',
        lido: false,
        criadoEm: 1700000010000
    },
    {
        id: 'book-12',
        titulo: 'Como Fazer Amigos e Influenciar Pessoas',
        autor: 'Dale Carnegie',
        capa: 'https://covers.openlibrary.org/b/id/13314878-L.jpg',
        lido: false,
        criadoEm: 1700000011000
    },
    {
        id: 'book-13',
        titulo: 'Noites Brancas',
        autor: 'Fiódor Dostoiévski',
        capa: 'https://covers.openlibrary.org/b/id/3293338-L.jpg',
        lido: false,
        criadoEm: 1700000012000
    },
    {
        id: 'book-14',
        titulo: 'Cartas de um Diabo a seu Aprendiz',
        autor: 'C. S. Lewis',
        capa: 'https://covers.openlibrary.org/b/id/9779-L.jpg',
        lido: false,
        criadoEm: 1700000013000
    },
    {
        id: 'book-15',
        titulo: 'Crime e Castigo',
        autor: 'Fiódor Dostoiévski',
        capa: 'https://covers.openlibrary.org/b/id/9411873-L.jpg',
        lido: false,
        criadoEm: 1700000014000
    },
    {
        id: 'book-16',
        titulo: 'Rápido e Devagar: Duas Formas de Pensar',
        autor: 'Daniel Kahneman',
        capa: 'https://covers.openlibrary.org/b/id/13290711-L.jpg',
        lido: false,
        criadoEm: 1700000015000
    },
    {
        id: 'book-17',
        titulo: 'O Homem Mais Rico da Babilônia',
        autor: 'George S. Clason',
        capa: 'https://covers.openlibrary.org/b/id/10491331-L.jpg',
        lido: false,
        criadoEm: 1700000016000
    },
    {
        id: 'book-18',
        titulo: 'Em Busca de Sentido',
        autor: 'Viktor E. Frankl',
        capa: 'https://covers.openlibrary.org/b/id/8516506-L.jpg',
        lido: false,
        criadoEm: 1700000017000
    },
    {
        id: 'book-19',
        titulo: 'Nação Dopamina',
        autor: 'Anna Lembke',
        capa: 'https://covers.openlibrary.org/b/id/11757830-L.jpg',
        lido: false,
        criadoEm: 1700000018000
    },
    {
        id: 'book-20',
        titulo: 'A Startup Enxuta',
        autor: 'Eric Ries',
        capa: 'https://covers.openlibrary.org/b/id/7104760-L.jpg',
        lido: false,
        criadoEm: 1700000019000
    },
    {
        id: 'book-21',
        titulo: 'O Existencialismo é um Humanismo',
        autor: 'Jean-Paul Sartre',
        capa: 'https://covers.openlibrary.org/b/id/2355635-L.jpg',
        lido: false,
        criadoEm: 1700000020000
    },
    {
        id: 'book-22',
        titulo: 'A Arte da Guerra',
        autor: 'Sun Tzu',
        capa: 'https://covers.openlibrary.org/b/id/4849549-L.jpg',
        lido: false,
        criadoEm: 1700000021000
    },
    {
        id: 'book-23',
        titulo: 'A Lição Final',
        autor: 'Randy Pausch',
        capa: 'https://covers.openlibrary.org/b/id/6423395-L.jpg',
        lido: false,
        criadoEm: 1700000022000
    },
    {
        id: 'book-24',
        titulo: 'Antifrágil: Coisas que se Beneficiam com o Caos',
        autor: 'Nassim Nicholas Taleb',
        capa: 'https://covers.openlibrary.org/b/id/9180157-L.jpg',
        lido: false,
        criadoEm: 1700000023000
    },
    {
        id: 'book-25',
        titulo: 'Como Estudar e Como Aprender',
        autor: 'Emilio Mira y López',
        capa: 'https://static.cedet.com.br/produtos_imagem_principal_large/13490-525x791.jpg',
        lido: false,
        criadoEm: 1700000024000
    },
    {
        id: 'book-26',
        titulo: 'O Clube das 5 da Manhã',
        autor: 'Robin Sharma',
        capa: 'https://covers.openlibrary.org/b/id/10326643-L.jpg',
        lido: false,
        criadoEm: 1700000025000
    },
    {
        id: 'book-27',
        titulo: 'Nunca Deixe de Tentar',
        autor: 'Michael Jordan',
        capa: 'https://covers.openlibrary.org/b/id/48582-L.jpg',
        lido: false,
        criadoEm: 1700000026000
    },
    {
        id: 'book-28',
        titulo: 'De Quanta Terra Precisa um Homem?',
        autor: 'Liev Tolstói',
        capa: 'https://covers.openlibrary.org/b/id/104052-L.jpg',
        lido: false,
        criadoEm: 1700000027000
    },
    {
        id: 'book-29',
        titulo: 'Dopamina: A Molécula do Desejo',
        autor: 'Daniel Z. Lieberman e Michael E. Long',
        capa: 'https://covers.openlibrary.org/b/id/10648753-L.jpg',
        lido: false,
        criadoEm: 1700000028000
    },
    {
        id: 'book-30',
        titulo: 'O Conde de Monte Cristo',
        autor: 'Alexandre Dumas',
        capa: 'https://covers.openlibrary.org/b/id/14566393-L.jpg',
        lido: false,
        criadoEm: 1700000029000
    }
];

// --------------------------------------------------------------------------
// 2. Estado da Aplicação (Single Source of Truth)
// --------------------------------------------------------------------------
const state = {
    livros: [],
    filtroAtual: 'all', // 'all' | 'read' | 'unread'
    buscaQuery: '',
    livroParaRemoverId: null
};

// --------------------------------------------------------------------------
// 3. Utilitários & Helpers
// --------------------------------------------------------------------------

/**
 * Normaliza textos removendo acentuação e pontuação para busca e comparação seguras.
 */
function normalizarTexto(texto) {
    return String(texto || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
}

/**
 * Gera um ID estável e único para novos itens.
 */
function gerarIdUnico() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Validação de URL segura (http / https).
 */
function isUrlValida(string) {
    if (!string) return false;
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
}

/**
 * Sistema de Notificações Toast não-bloqueante.
 */
function showToast(mensagem, tipo = 'info', duracao = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    
    const icones = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };
    
    const iconSpan = document.createElement('span');
    iconSpan.textContent = icones[tipo] || 'ℹ️';
    iconSpan.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.textContent = mensagem;

    toast.appendChild(iconSpan);
    toast.appendChild(textSpan);
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-hide');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, duracao);
}

// --------------------------------------------------------------------------
// 4. Camada de Persistência (Storage Service)
// --------------------------------------------------------------------------

function carregarLivrosDoStorage() {
    try {
        // Tenta buscar da chave v3 ou migra da v2/legada 'minhaBiblioteca'
        let dados = localStorage.getItem(STORAGE_KEY_BOOKS);
        if (!dados) {
            dados = localStorage.getItem('minhaBiblioteca_v2') || localStorage.getItem('minhaBiblioteca');
        }

        if (dados) {
            const parsed = JSON.parse(dados);
            if (Array.isArray(parsed) && parsed.length > 0) {
                const livrosCarregados = parsed.map((item, index) => ({
                    id: item.id || `legacy-${index}-${Date.now()}`,
                    titulo: String(item.titulo || '').trim(),
                    autor: String(item.autor || '').trim(),
                    capa: item.capa || '',
                    lido: Boolean(item.lido),
                    criadoEm: item.criadoEm || (Date.now() + index)
                }));

                // Garante que novos livros da lista padrão sejam incorporados sem duplicações
                let novosAdicionados = false;
                LIVROS_PADRAO.forEach(padrao => {
                    const normPadrao = normalizarTexto(padrao.titulo);
                    const jaExiste = livrosCarregados.some(existente => {
                        const normExistente = normalizarTexto(existente.titulo);
                        return normExistente === normPadrao ||
                               (normExistente.length > 4 && normPadrao.length > 4 && 
                                (normExistente.includes(normPadrao) || normPadrao.includes(normExistente)));
                    });

                    if (!jaExiste) {
                        livrosCarregados.push({ ...padrao });
                        novosAdicionados = true;
                    }
                });

                if (novosAdicionados || !localStorage.getItem(STORAGE_KEY_BOOKS)) {
                    try {
                        localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(livrosCarregados));
                    } catch (_) {}
                }

                return livrosCarregados;
            }
        }
    } catch (erro) {
        console.error('Erro ao ler livros do localStorage:', erro);
        showToast('Erro ao carregar dados salvos. Usando dados padrão.', 'error');
    }
    return [...LIVROS_PADRAO];
}

function salvarLivrosNoStorage() {
    try {
        localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(state.livros));
    } catch (erro) {
        console.error('Erro ao salvar livros no localStorage:', erro);
        showToast('Não foi possível salvar os dados (espaço cheio ou bloqueio).', 'error');
    }
}

// --------------------------------------------------------------------------
// 5. Gerenciamento do Tema (Dark / Light Mode)
// --------------------------------------------------------------------------

function inicializarTema() {
    const temaSalvo = localStorage.getItem(STORAGE_KEY_THEME);
    const prefereEscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const temaInicial = temaSalvo || (prefereEscuro ? 'dark' : 'light');

    aplicarTema(temaInicial);

    const btnTheme = document.getElementById('btn-theme-toggle');
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            const temaAtual = document.documentElement.getAttribute('data-theme') || 'light';
            const novoTema = temaAtual === 'light' ? 'dark' : 'light';
            aplicarTema(novoTema);
            showToast(`Tema ${novoTema === 'dark' ? 'escuro' : 'claro'} ativado!`, 'info', 2000);
        });
    }
}

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    try {
        localStorage.setItem(STORAGE_KEY_THEME, tema);
    } catch (_) {}
}

// --------------------------------------------------------------------------
// 6. Camada de Renderização Segura do DOM
// --------------------------------------------------------------------------

/**
 * Cria o elemento de imagem ou placeholder seguro para o card.
 */
function criarElementoCapa(livro) {
    const wrapper = document.createElement('div');
    wrapper.className = 'book-cover-wrapper';

    if (livro.capa && isUrlValida(livro.capa)) {
        const img = document.createElement('img');
        img.className = 'book-cover-img';
        img.src = livro.capa;
        img.alt = `Capa do livro: ${livro.titulo}`;
        img.loading = 'lazy';

        // Fallback suave caso o link da imagem quebre
        img.onerror = () => {
            img.remove();
            wrapper.appendChild(criarPlaceholderCapa(livro.titulo));
        };

        wrapper.appendChild(img);
    } else {
        wrapper.appendChild(criarPlaceholderCapa(livro.titulo));
    }

    return wrapper;
}

function criarPlaceholderCapa(titulo) {
    const placeholder = document.createElement('div');
    placeholder.className = 'book-cover-placeholder';

    const icon = document.createElement('span');
    icon.className = 'placeholder-icon';
    icon.textContent = '📖';
    icon.setAttribute('aria-hidden', 'true');

    const title = document.createElement('span');
    title.className = 'placeholder-title';
    title.textContent = titulo;

    placeholder.appendChild(icon);
    placeholder.appendChild(title);
    return placeholder;
}

/**
 * Cria com segurança o nó DOM completo de um card de livro.
 */
function criarCardLivro(livro) {
    const article = document.createElement('article');
    article.className = 'book-card';
    article.dataset.id = livro.id;

    // 1. Capa
    const coverWrapper = criarElementoCapa(livro);

    // 2. Botão Flutuante de Exclusão
    const btnRemover = document.createElement('button');
    btnRemover.className = 'btn-delete-card';
    btnRemover.dataset.action = 'remover';
    btnRemover.dataset.id = livro.id;
    btnRemover.setAttribute('aria-label', `Remover livro: ${livro.titulo}`);
    btnRemover.title = 'Remover livro da estante';
    btnRemover.innerHTML = '<span aria-hidden="true">🗑️</span>';

    // 3. Informações Textuais (Usando textContent para prevenir XSS)
    const infoContainer = document.createElement('div');
    infoContainer.className = 'book-info';

    const headerText = document.createElement('div');
    
    const h3 = document.createElement('h3');
    h3.className = 'book-title';
    h3.textContent = livro.titulo;

    const pAutor = document.createElement('p');
    pAutor.className = 'book-author';
    pAutor.textContent = livro.autor;

    headerText.appendChild(h3);
    headerText.appendChild(pAutor);

    // 4. Botão de Alternar Status (Lido / Não Lido)
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'book-card-actions';

    const btnStatus = document.createElement('button');
    btnStatus.className = `btn-status-toggle ${livro.lido ? 'is-read' : 'is-unread'}`;
    btnStatus.dataset.action = 'toggle-status';
    btnStatus.dataset.id = livro.id;
    btnStatus.setAttribute('aria-pressed', livro.lido ? 'true' : 'false');
    
    btnStatus.innerHTML = livro.lido 
        ? '<span aria-hidden="true">✅</span> Lido' 
        : '<span aria-hidden="true">📖</span> Não Lido';

    actionsContainer.appendChild(btnStatus);

    infoContainer.appendChild(headerText);
    infoContainer.appendChild(actionsContainer);

    article.appendChild(coverWrapper);
    article.appendChild(btnRemover);
    article.appendChild(infoContainer);

    return article;
}

/**
 * Renderiza a lista filtrada de livros e atualiza estatísticas.
 */
function renderizarLivros() {
    const container = document.getElementById('estante-container');
    const emptyState = document.getElementById('empty-state');
    const emptyTitle = document.getElementById('empty-title');
    const emptyDesc = document.getElementById('empty-description');

    if (!container) return;

    // Atualiza contadores e estatísticas
    atualizarEstatisticas();

    // Filtra os livros de acordo com status e busca
    const buscaNorm = state.buscaQuery.toLowerCase().trim();
    const livrosFiltrados = state.livros.filter(livro => {
        const atendeFiltroStatus = 
            state.filtroAtual === 'all' || 
            (state.filtroAtual === 'read' && livro.lido) || 
            (state.filtroAtual === 'unread' && !livro.lido);

        const atendeBusca = 
            !buscaNorm || 
            livro.titulo.toLowerCase().includes(buscaNorm) || 
            livro.autor.toLowerCase().includes(buscaNorm);

        return atendeFiltroStatus && atendeBusca;
    });

    // Limpa o container
    container.innerHTML = '';

    if (livrosFiltrados.length === 0) {
        if (emptyState) {
            emptyState.hidden = false;
            if (state.livros.length === 0) {
                emptyTitle.textContent = 'Sua estante está vazia';
                emptyDesc.textContent = 'Adicione seu primeiro livro no formulário acima para começar!';
            } else {
                emptyTitle.textContent = 'Nenhum livro encontrado';
                emptyDesc.textContent = 'Tente ajustar os termos de busca ou selecione outro filtro.';
            }
        }
        return;
    }

    if (emptyState) emptyState.hidden = true;

    // Utiliza DocumentFragment para renderização de alta performance
    const fragment = document.createDocumentFragment();
    livrosFiltrados.forEach(livro => {
        fragment.appendChild(criarCardLivro(livro));
    });

    container.appendChild(fragment);
}

/**
 * Atualiza os contadores no Header e nos Filtros.
 */
function atualizarEstatisticas() {
    const total = state.livros.length;
    const lidos = state.livros.filter(l => l.lido).length;
    const naoLidos = total - lidos;

    const elStatTotal = document.getElementById('stat-total');
    const elStatRead = document.getElementById('stat-read');
    const elCountAll = document.getElementById('count-all');
    const elCountRead = document.getElementById('count-read');
    const elCountUnread = document.getElementById('count-unread');

    if (elStatTotal) elStatTotal.textContent = total;
    if (elStatRead) elStatRead.textContent = lidos;
    if (elCountAll) elCountAll.textContent = total;
    if (elCountRead) elCountRead.textContent = lidos;
    if (elCountUnread) elCountUnread.textContent = naoLidos;
}

// --------------------------------------------------------------------------
// 7. Ações de Negócio (CRUD & Manipulação de Estado)
// --------------------------------------------------------------------------

function adicionarNovoLivro(evento) {
    if (evento) evento.preventDefault();

    const inputTitulo = document.getElementById('input-titulo');
    const inputAutor = document.getElementById('input-autor');
    const inputCapa = document.getElementById('input-capa');
    const errorTitulo = document.getElementById('error-titulo');
    const errorAutor = document.getElementById('error-autor');
    const errorCapa = document.getElementById('error-capa');

    // Limpa erros anteriores
    if (errorTitulo) errorTitulo.textContent = '';
    if (errorAutor) errorAutor.textContent = '';
    if (errorCapa) errorCapa.textContent = '';
    inputTitulo.classList.remove('input-invalid');
    inputAutor.classList.remove('input-invalid');
    inputCapa.classList.remove('input-invalid');

    const titulo = inputTitulo.value.trim();
    const autor = inputAutor.value.trim();
    const capa = inputCapa.value.trim();

    let temErro = false;

    if (!titulo) {
        if (errorTitulo) errorTitulo.textContent = 'Por favor, informe o título do livro.';
        inputTitulo.classList.add('input-invalid');
        temErro = true;
    }

    if (!autor) {
        if (errorAutor) errorAutor.textContent = 'Por favor, informe o nome do autor.';
        inputAutor.classList.add('input-invalid');
        temErro = true;
    }

    if (capa && !isUrlValida(capa)) {
        if (errorCapa) errorCapa.textContent = 'A URL da capa deve iniciar com http:// ou https://';
        inputCapa.classList.add('input-invalid');
        temErro = true;
    }

    if (temErro) {
        showToast('Preencha os campos obrigatórios corretamente.', 'error');
        return;
    }

    // Validação contra duplicação de livros
    const normNovo = normalizarTexto(titulo);
    const jaExiste = state.livros.some(l => normalizarTexto(l.titulo) === normNovo);
    if (jaExiste) {
        showToast(`O livro "${titulo}" já está na sua estante!`, 'info');
        return;
    }

    const novoLivro = {
        id: gerarIdUnico(),
        titulo: titulo,
        autor: autor,
        capa: capa,
        lido: false,
        criadoEm: Date.now()
    };

    // Adiciona no início da lista
    state.livros.unshift(novoLivro);

    salvarLivrosNoStorage();
    renderizarLivros();

    // Limpa formulário
    inputTitulo.value = '';
    inputAutor.value = '';
    inputCapa.value = '';

    showToast(`"${novoLivro.titulo}" adicionado com sucesso!`, 'success');
}

function alternarStatusLivro(id) {
    const livro = state.livros.find(l => l.id === id);
    if (!livro) return;

    livro.lido = !livro.lido;

    salvarLivrosNoStorage();
    renderizarLivros();

    const msg = livro.lido 
        ? `Parabéns! "${livro.titulo}" marcado como lido. ✅` 
        : `"${livro.titulo}" marcado como não lido. 📖`;
    showToast(msg, 'info', 2500);
}

// --------------------------------------------------------------------------
// 8. Modal de Confirmação para Remoção
// --------------------------------------------------------------------------

function solicitarRemocaoLivro(id) {
    const livro = state.livros.find(l => l.id === id);
    if (!livro) return;

    state.livroParaRemoverId = id;

    const modal = document.getElementById('modal-confirmacao');
    const desc = document.getElementById('modal-descricao');
    
    if (desc) {
        desc.textContent = `Tem certeza de que deseja remover "${livro.titulo}" da sua estante? Esta ação não pode ser desfeita.`;
    }

    if (modal) {
        if (typeof modal.showModal === 'function') {
            modal.showModal();
        } else {
            // Fallback para navegadores sem dialog nativo
            modal.setAttribute('open', '');
        }
    }
}

function fecharModalRemocao() {
    const modal = document.getElementById('modal-confirmacao');
    state.livroParaRemoverId = null;

    if (modal) {
        if (typeof modal.close === 'function') {
            modal.close();
        } else {
            modal.removeAttribute('open');
        }
    }
}

function confirmarRemocaoLivro() {
    if (!state.livroParaRemoverId) return;

    const id = state.livroParaRemoverId;
    const index = state.livros.findIndex(l => l.id === id);

    if (index !== -1) {
        const tituloRemovido = state.livros[index].titulo;
        state.livros.splice(index, 1);
        salvarLivrosNoStorage();
        renderizarLivros();
        showToast(`"${tituloRemovido}" foi removido da estante.`, 'info');
    }

    fecharModalRemocao();
}

// --------------------------------------------------------------------------
// 9. Inicialização e Event Listeners (Event Delegation)
// --------------------------------------------------------------------------

function configurarEventListeners() {
    // 1. Formulário de Cadastro
    const formLivro = document.getElementById('form-livro');
    if (formLivro) {
        formLivro.addEventListener('submit', adicionarNovoLivro);
    }

    // 2. Delegação de Eventos na Estante (para Toggle Status e Remover)
    const estanteContainer = document.getElementById('estante-container');
    if (estanteContainer) {
        estanteContainer.addEventListener('click', (evento) => {
            const botaoAcao = evento.target.closest('[data-action]');
            if (!botaoAcao) return;

            const acao = botaoAcao.dataset.action;
            const id = botaoAcao.dataset.id;

            if (acao === 'toggle-status') {
                alternarStatusLivro(id);
            } else if (acao === 'remover') {
                solicitarRemocaoLivro(id);
            }
        });
    }

    // 3. Barra de Busca em Tempo Real (com debounce simples)
    const inputBusca = document.getElementById('input-busca');
    const btnLimparBusca = document.getElementById('btn-limpar-busca');

    let debounceTimer;
    if (inputBusca) {
        inputBusca.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            const valor = e.target.value;
            if (btnLimparBusca) {
                btnLimparBusca.hidden = !valor;
            }

            debounceTimer = setTimeout(() => {
                state.buscaQuery = valor;
                renderizarLivros();
            }, 180);
        });
    }

    if (btnLimparBusca) {
        btnLimparBusca.addEventListener('click', () => {
            if (inputBusca) {
                inputBusca.value = '';
                inputBusca.focus();
            }
            btnLimparBusca.hidden = true;
            state.buscaQuery = '';
            renderizarLivros();
        });
    }

    // 4. Filtros por Status (Chips)
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => {
                c.classList.remove('active');
                c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');

            state.filtroAtual = chip.dataset.filter || 'all';
            renderizarLivros();
        });
    });

    // 5. Modal de Confirmação
    const btnCancelarModal = document.getElementById('btn-modal-cancelar');
    const btnConfirmarModal = document.getElementById('btn-modal-confirmar');
    const modalConfirmacao = document.getElementById('modal-confirmacao');

    if (btnCancelarModal) {
        btnCancelarModal.addEventListener('click', fecharModalRemocao);
    }
    if (btnConfirmarModal) {
        btnConfirmarModal.addEventListener('click', confirmarRemocaoLivro);
    }
    if (modalConfirmacao) {
        // Fecha modal ao clicar fora do conteúdo (no backdrop)
        modalConfirmacao.addEventListener('click', (e) => {
            if (e.target === modalConfirmacao) {
                fecharModalRemocao();
            }
        });
        // Suporte à tecla ESC
        modalConfirmacao.addEventListener('cancel', (e) => {
            e.preventDefault();
            fecharModalRemocao();
        });
    }
}

// --------------------------------------------------------------------------
// 10. Inicialização da Aplicação
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    inicializarTema();
    state.livros = carregarLivrosDoStorage();
    configurarEventListeners();
    renderizarLivros();
});