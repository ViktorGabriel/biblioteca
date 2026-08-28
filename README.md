<div align="center">

# 📚 Minha Biblioteca Pessoal v2.0
### *Gerenciador Moderno de Leituras & Estante Virtual de Livros*

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-10b981?style=for-the-badge&logo=checkmarx&logoColor=white" alt="Status">
  <img src="https://img.shields.io/badge/Vers%C3%A3o-2.0.0-4f46e5?style=for-the-badge" alt="Versão">
  <img src="https://img.shields.io/badge/Acessibilidade-WCAG%202.1%20AA-059669?style=for-the-badge&logo=w3c&logoColor=white" alt="Acessibilidade">
  <img src="https://img.shields.io/badge/Seguran%C3%A7a-OWASP%20Top%2010%20Safe-6366f1?style=for-the-badge&logo=shield" alt="Segurança">
  <img src="https://img.shields.io/badge/Licen%C3%A7a-MIT-blue?style=for-the-badge" alt="Licença">
</p>

<p align="center">
  Uma aplicação web interativa, segura e totalmente responsiva para organizar leituras, acompanhar o progresso de livros lidos e manter uma estante digital personalizada com suporte a <b>Dark Mode</b>, busca dinâmica e persistência de dados.
</p>

</div>

---

## 📸 Demonstração Visual

| ☀️ Modo Claro (Light Theme) | 🌙 Modo Escuro (Dark Theme) |
| :---: | :---: |
| ![Modo Claro](./assets/github%20imgs/image.png) | *Interface com alto contraste e suporte a tema escuro* |

---

## ✨ Principais Funcionalidades

| Recurso | Descrição |
| :--- | :--- |
| 📖 **CRUD Completo de Livros** | Adicione novos títulos com autor e URL da capa, alterne o status de leitura com um clique e exclua itens da estante. |
| 🌓 **Dark & Light Mode** | Alternância instantânea de tema com detecção automática da preferência do sistema (`prefers-color-scheme`) e persistência. |
| 🔍 **Busca em Tempo Real** | Filtragem instantânea por título ou autor com debounce integrado para máxima fluidez. |
| 🏷️ **Filtros por Status** | Filtros rápidos (*Todos*, *Lidos ✅*, *Não Lidos 📖*) com contadores dinâmicos sincronizados no topo da página. |
| 🛡️ **Segurança contra XSS** | Manipulação segura do DOM sem `innerHTML` vulnerável, validação de URLs seguras (`http:`/`https:`) e sanitização de inputs. |
| 🖼️ **Fallback de Imagens** | Tratamento inteligente com `onerror` e geração automática de capa SVG personalizada quando o link da imagem estiver quebrado. |
| 🍞 **Sistema de Toasts** | Notificações elegantes e não-bloqueantes para confirmação imediata das ações do usuário. |
| 🗑️ **Modal Acessível** | Confirmação de exclusão customizada usando elemento nativo `<dialog>`, com suporte a teclado (`ESC`) e clique externo. |
| 💾 **Persistência Confiável** | Sincronização automática com `LocalStorage` protegida por blocos `try/catch` para evitar travamentos por quota ou corrupção de dados. |

---

## 🛠️ Tecnologias & Arquitetura

```
┌────────────────────────────────────────────────────────────────────────┐
│                          STACK TECNOLÓGICA                             │
├───────────────────┬────────────────────────────────────────────────────┤
│ 🌐 HTML5          │ Estrutura semântica (<header>, <main>, <dialog>)   │
│ 🎨 CSS3 Moderno   │ Variáveis (:root), Glassmorphism, Flexbox, Grid    │
│ ⚡ JavaScript     │ ES6+, Clean Code, State Management, Delegated DOM  │
│ 💾 Storage        │ LocalStorage API com fallback e sanitização        │
└───────────────────┴────────────────────────────────────────────────────┘
```

### 📁 Estrutura do Projeto

```text
biblioteca/
├── .agents/                    # Skills e configurações do Antigravity
│   └── skills/
│       ├── dom-manipulation-expert/
│       ├── javascript-pro/
│       ├── modern-css/
│       ├── readme-craftsman/
│       ├── ui-ux-design/
│       ├── web-accessibility/
│       └── web-security-owasp/
├── assets/
│   ├── css/
│   │   └── style.css          # Design System e variáveis de tema
│   ├── github imgs/
│   │   └── image.png          # Imagens de preview do repositório
│   └── js/
│       └── script.js          # Lógica, State Management e Event Delegation
├── index.html                 # Página principal acessível
├── README.md                  # Documentação oficial do projeto
└── SKILLS-A-INSTALAR.MD       # Diagnóstico técnico e guia de skills
```

---

## 🚀 Como Executar Localmente

Como o projeto foi construído utilizando tecnologias nativas da Web, **não é necessária nenhuma instalação de dependências ou servidor**:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ViktorGabriel/biblioteca.git
   ```
2. **Acesse a pasta:**
   ```bash
   cd biblioteca
   ```
3. **Abra o arquivo `index.html`:**
   - Dê um duplo clique no arquivo `index.html` ou abra-o em qualquer navegador moderno (Chrome, Edge, Firefox, Brave, Safari).
   - Ou utilize uma extensão como o *Live Server* no VS Code / Antigravity IDE.

---

## 🧠 Boas Práticas e Padrões Aplicados

- **Event Delegation:** Um único listener centralizado para gerenciar todas as ações dos cards da estante, reduzindo o consumo de memória.
- **IDs Únicos:** Uso de identificadores exclusivos (`crypto.randomUUID()`), garantindo que buscas e ordenações não afetem o item errado ao remover ou editar.
- **Acessibilidade (a11y):** Conformidade com WCAG 2.1 AA através de atributos `aria-label`, `aria-pressed`, labels explícitos e foco gerenciado.
- **Design System Modular:** Variáveis CSS centralizadas para facilitar manutenção de cores, espaçamentos e temas.

---

## 📝 Licença

Este projeto é de código aberto e está sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se à vontade para utilizar, modificar e contribuir!

---

<div align="center">
  <sub>Desenvolvido com dedicação por <b>Viktor Gabriel Gonçalves de Oliveira</b> 🚀</sub>
</div>
