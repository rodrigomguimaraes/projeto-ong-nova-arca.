# Projeto ONG Nova Arca - Single Page Application (SPA)

Bem-vindo(a) ao repositório do projeto **Nova Arca**. Esta aplicação é uma Single Page Application (SPA) desenvolvida com foco em performance, acessibilidade, código modular e boas práticas de engenharia de software de Front-End.

## 🚀 Visão Geral e Funcionalidades

A aplicação permite a navegação fluida sem recarregamento de página e possui as seguintes funcionalidades principais:

*   **Roteamento SPA:** Implementação nativa utilizando a History API (`window.history.pushState`) e `fetch` para buscar fragmentos HTML e injetar o conteúdo dinamicamente, suportando também o histórico do navegador (`popstate`).
*   **Componentes Dinâmicos:** Renderização de interface gerada através de *Template Literals* e iteração de arrays com o método `.map().join('')`.
*   **Validação de Formulários:** Interceção do evento `submit` e monitorização do evento `input` em tempo real, utilizando Expressões Regulares (RegEx) para validar e-mails e telefones. Feedback visual imediato com alteração de classes CSS (`.is-valid`, `.is-invalid`).
*   **Persistência de Dados:** Armazenamento local com `localStorage` (via `JSON.stringify` e `JSON.parse`) para reter as submissões do formulário e restaurar o estado da interface.
*   **Modais de Feedback:** Integração da biblioteca **SweetAlert2** para exibir alertas elegantes e responsivos.
*   **Temas (Dark/Light Mode):** Alternância de modos de cor utilizando variáveis CSS na pseudo-classe `:root` e respeito à preferência do sistema através de `@media (prefers-color-scheme: dark)`.

## 🛠️ Tecnologias Utilizadas

*   **HTML5 Semântico:** Uso rigoroso de landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`).
*   **CSS3:** Layouts baseados em Grid e Flexbox, design responsivo e gestão de temas com CSS Custom Properties.
*   **JavaScript (ES6+):** Código Vanilla, estruturado em módulos.
*   **SweetAlert2:** Biblioteca (via CDN) para modais e alertas profissionais.
*   **Vite:** Bundler de módulos rápido utilizado para o ambiente de desenvolvimento e para a otimização/minificação da build de produção.
*   **Vercel:** Plataforma de alojamento com CI/CD integrado.

## 📂 Estrutura de Ficheiros e Organização

O projeto adota o princípio de *Separation of Concerns* (Separação de Responsabilidades), destacando-se a arquitetura modular do JavaScript:
*   `main.js`: Controlador central, importa as funções e gere a delegação de eventos (Event Delegation).
*   `storage.js`: Módulo exclusivo para a manipulação e interações com o `localStorage`.
*   `validation.js`: Módulo focado na lógica de validação de dados via RegEx.
*   `ui.js`: Módulo responsável pela renderização do DOM e invocação de modais visuais.

## ♿ Acessibilidade (A11y)

A aplicação foi rigorosamente adaptada para garantir uma navegação inclusiva:
*   **Atributos ARIA:** Aplicação de `aria-invalid` e `aria-describedby` nos formulários, e `aria-label`/`aria-expanded` em botões e menus interativos.
*   **Navegação por Teclado:** Correção do `tabindex`, implementação de *focus trap* nos modais, suporte à tecla `Escape` e contornos de foco visual nítidos (`:focus`) com alto contraste.
*   **Contraste de Cores:** Testado com WebAIM Contrast Checker e Lighthouse para garantir rácios que cumprem as diretrizes de acessibilidade (ex: Fundo Escuro #121212 e Texto #E0E0E0 com rácio de 13.7:1).

## ⚡ Otimização e Performance

*   **Imagens Responsivas:** Utilização de imagens no formato **WebP** e **SVG**, em conjunto com a tag `<picture>` e atributo `srcset` para adequar o descarregamento à dimensão da *viewport*, reduzindo o peso estático em mais de 50%.
*   **Minificação:** O *build* com o Vite (através do *esbuild*) minificou os ficheiros JS e CSS, reduzindo cerca de 65% do tamanho do código e otimizando métricas críticas como o *Largest Contentful Paint* (LCP).

## 🔀 Versionamento e GitFlow

O projeto adotou as melhores práticas de versionamento de código:
*   **GitFlow:** Uso das branches principais `main` (apenas para *releases* estáveis) e `develop` (para integração). As novas implementações foram feitas em branches isoladas com prefixo `feature/`.
*   **Conventional Commits:** O histórico reflete organização padrão do mercado com o uso sistemático de `feat:`, `fix:` e tags de versão (`v1.0.0`).
*   **Pull Requests & Issues:** Utilizados para revisão de código e rastreio estruturado de correções (como ajustes no menu mobile).

## 💻 Instalação e Execução Local

1. Clone este repositório:
   ```bash
   git clone [https://github.com/rodrigomguimaraes/projeto-ong-nova-arca.git](https://github.com/rodrigomguimaraes/projeto-ong-nova-arca.git)
