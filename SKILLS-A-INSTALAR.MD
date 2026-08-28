# 📦 Recomendações de Skills para o Projeto "Minha Biblioteca"

Este documento apresenta uma análise técnica da base de código atual do projeto **Minha Biblioteca** (HTML5, Vanilla CSS3 e Vanilla JavaScript com LocalStorage), diagnostica os problemas e bugs existentes e define as **Skills** recomendadas dos repositórios **rmyndharis** e **agentic-awesome-skills** para estruturar, corrigir e elevar o nível da aplicação.

---

## 🔍 Diagnóstico do Projeto Atual

### ⚠️ Bugs e Pontos Críticos Identificados no Código:

1. **Vulnerabilidade a XSS (Cross-Site Scripting):**
   - No arquivo `assets/js/script.js` (linhas 49-73), o método `renderizarLivros()` concatena strings diretamente no `container.innerHTML += cartao` usando `${livro.titulo}` e `${livro.autor}` sem sanitização.
2. **Uso frágil de índices (`index`) do Array:**
   - As ações de remoção (`removerLivro(index)`) e alternar status (`alternarStatus(index)`) dependem da posição no array. Ao implementar busca, ordenação ou filtros, o índice renderizado não corresponderá ao índice do array original. O ideal é utilizar identificadores únicos (`id: crypto.randomUUID()` ou `Date.now()`).
3. **Validação de Entrada Incompleta:**
   - O `if (tituloInput.value === "" ...)` não trata espaços em branco com `.trim()` e não valida se a URL da capa é válida.
4. **Falta de Fallback para Imagens Quebradas:**
   - Se uma URL de capa for inválida ou o link expirar, o card exibe uma imagem quebrada sem tratamento (`onerror` ou capa padrão).
5. **Bloqueio de Thread com `alert()` e `confirm()`:**
   - O uso de diálogos nativos síncronos prejudica a experiência do usuário (UX). Modais estilizados ou toasts assíncronos são recomendados.
6. **Acessibilidade (a11y) e Semântica:**
   - Inputs no formulário não possuem `<label>` associados;
   - Botão de remover contém apenas o emoji 🗑️ sem `aria-label` descritivo para leitores de tela.

---

## 🛠️ Skills Recomendadas para Instalação

Abaixo estão as skills dos repositórios **rmyndharis** e **agentic-awesome-skills** selecionadas para suprir todas as necessidades deste projeto:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MAPA DE SKILLS SUGERIDAS                        │
├────────────────────────────┬───────────────────────────────────────────┤
│ 🐛 Debugging & Refactoring │ javascript-pro, clean-code, dom-expert    │
│ 🎨 UI/UX & Estilização     │ modern-css, ui-ux-design, web-components  │
│ 🛡️ Segurança & Validação   │ web-security-owasp, input-validation      │
│ ♿ Acessibilidade (a11y)   │ web-accessibility-wcag                    │
│ 🧪 Testes & Qualidade      │ frontend-testing (vitest/playwright)      │
└────────────────────────────┴───────────────────────────────────────────┘
```

---

### 1. 🐛 Correção de Bugs e JavaScript Moderno

#### 🔹 `javascript-pro` / `vanilla-js-master`
- **Origem:** *agentic-awesome-skills / rmyndharis*
- **Por que usar:** Orienta a aplicação dos padrões modernos de ES6+, modularização de código, manipulação segura de estado em memória e sincronização com `localStorage` com tratamento de exceções (`try/catch` para quota excedida ou JSON corrompido).
- **Aplicações no projeto:**
  - Substituição de variáveis globais por módulos ou closures organizadas.
  - Implementação de IDs únicos nos objetos de livros.
  - Delegação de eventos (`Event Delegation`) em vez de atributos `onclick` no HTML gerado.

#### 🔹 `dom-manipulation-expert` / `clean-code`
- **Origem:** *rmyndharis*
- **Por que usar:** Focado em manipulação performática do DOM sem recriar nós desnecessariamente e evitando `innerHTML` perigoso.
- **Aplicações no projeto:**
  - Renderização via `DocumentFragment` ou `createElement` / `template tags`.
  - Separação de responsabilidades (Camada de Dados vs. Camada de UI).

---

### 2. 🛡️ Segurança e Validação

#### 🔹 `web-security-owasp` / `xss-prevention`
- **Origem:** *agentic-awesome-skills*
- **Por que usar:** Fornece regras rigorosas contra injeção de HTML/JavaScript em aplicações front-end cliente.
- **Aplicações no projeto:**
  - Sanitização de inputs do usuário antes de renderizar ou salvar no `localStorage`.
  - Tratamento seguro de atributos `src` e `href` de URLs externas.

#### 🔹 `form-validation-toolkit`
- **Origem:** *agentic-awesome-skills*
- **Por que usar:** Boas práticas de validação de formulários client-side com mensagens de erro inline amigáveis.
- **Aplicações no projeto:**
  - Validação de URLs reais de imagens com fallback para placeholder.
  - Validação de campos obrigatórios com `.trim()`.

---

### 3. 🎨 UI/UX, Design Moderno e CSS

#### 🔹 `modern-css-styling` / `css-architecture`
- **Origem:** *rmyndharis / agentic-awesome-skills*
- **Por que usar:** Auxilia na criação de CSS moderno utilizando CSS Custom Properties (variáveis), tema Dark/Light, Glassmorphism, Micro-interações e Layouts Flex/Grid fluidos.
- **Aplicações no projeto:**
  - Criação de um Design System com paleta HSL harmoniosa e variáveis `:root`.
  - Adição de transições suaves ao alternar status "Lido / Não Lido".
  - Animações ao adicionar e remover cards.
  - Implementação de suporte a Dark Mode.

#### 🔹 `ui-ux-design-patterns`
- **Origem:** *agentic-awesome-skills*
- **Por que usar:** Focado em experiência do usuário de alto padrão.
- **Aplicações no projeto:**
  - Substituição de `alert()` e `confirm()` por um Modal de Confirmação customizado e Toasts de notificação não-bloqueantes.
  - Implementação de filtros (Todos, Lidos, Não Lidos) e barra de busca de livros por título/autor.
  - Estado vazio (*Empty State*) atraente quando a estante estiver vazia.

---

### 4. ♿ Acessibilidade e SEO

#### 🔹 `web-accessibility-wcag` / `a11y-auditor`
- **Origem:** *agentic-awesome-skills / rmyndharis*
- **Por que usar:** Garante conformidade com os critérios WCAG 2.1 AA (contraste de cores, navegação por teclado, leitores de tela).
- **Aplicações no projeto:**
  - Adição de `<label>` e `aria-label` nos botões de ação e inputs.
  - Gerenciamento de foco ao abrir modais de exclusão.
  - Garantia de contraste adequado nos botões de status.

---

### 5. 🧪 Testes e Qualidade

#### 🔹 `frontend-testing` (Vitest / Playwright)
- **Origem:** *agentic-awesome-skills*
- **Por que usar:** Estrutura testes para verificar a integridade da manipulação de dados e persistência no `localStorage`.
- **Aplicações no projeto:**
  - Testes unitários para as funções CRUD (`adicionarLivro`, `removerLivro`, `alternarStatus`, `salvarDados`).

---

## 📥 Como Instalar as Skills no Antigravity

No Antigravity, as skills podem ser adicionadas localmente no projeto (`.agents/skills/`) ou no escopo global (`C:\Users\Viktor\.gemini\config\skills/`).

### Estrutura de Pastas Recomendada:

```text
biblioteca/
├── .agents/
│   └── skills/
│       ├── javascript-pro/
│       │   └── SKILL.md
│       ├── modern-css/
│       │   └── SKILL.md
│       ├── web-security/
│       │   └── SKILL.md
│       ├── ui-ux-design/
│       │   └── SKILL.md
│       └── web-accessibility/
│           └── SKILL.md
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── index.html
└── SKILLS-A-INSTALAR.MD
```

### Passo a passo para ativar as Skills:
1. Crie a pasta da skill desejada dentro de `.agents/skills/<nome-da-skill>/` (ex.: `.agents/skills/javascript-pro/`).
2. Adicione o arquivo `SKILL.md` contendo as diretrizes e instruções de boas práticas correspondentes.
3. O Antigravity carregará automaticamente a skill para guiar as implementações no projeto.

---

## 📋 Roteiro de Correções Recomendado

1. **JavaScript & Segurança:**
   - Trocar índices por IDs únicos (`id: Date.now()`).
   - Evitar `innerHTML` com interpolação direta para prevenir XSS.
   - Tratar `localStorage` com `try/catch`.
   - Adicionar tratamento de fallback para imagem quebrada (`onerror`).
2. **Interface & UX:**
   - Implementar Toasts e Modal customizado substituindo `alert` e `confirm`.
   - Adicionar barra de busca e filtros de status ("Todos", "Lidos", "Não lidos").
   - Aplicar variáveis CSS com suporte a modo escuro/claro.
