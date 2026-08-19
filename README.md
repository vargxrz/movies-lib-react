# Movies Lib

Aplicação para descobrir e explorar filmes usando a API do TMDB.

---

## Funcionalidades

- **Top Filmes** — lista os filmes mais bem avaliados de todos os tempos
- **Busca** — pesquise qualquer filme pelo título em tempo real
- **Detalhes** — sinopse, gêneros, duração, orçamento e receita
- **Skeleton Loading** — placeholders animados durante o carregamento
- **Responsivo** — layout adaptado para qualquer tela

---

## Como rodar

**Pré-requisitos:** Node.js 18+ e uma chave de API do [TMDB](https://www.themoviedb.org/settings/api).

```bash
git clone https://github.com/seu-usuario/Movies-Lib-React.git
cd Movies-Lib-React
npm install
```

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # preview do build
```

---

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx      # barra de navegação com busca
│   └── MovieCard.jsx   # card reutilizável de filme
├── pages/
│   ├── Home.jsx        # grid dos top-rated
│   ├── Search.jsx      # resultados da busca
│   └── Movie.jsx       # detalhes do filme
├── App.jsx             # layout raiz + rotas
└── main.jsx            # bootstrap da aplicação
```

---

## Stack

| Tecnologia | Uso |
|---|---|
| React 18 | UI e gerenciamento de estado |
| React Router v6 | Roteamento SPA |
| Vite | Build e dev server |
| TMDB API | Dados e imagens dos filmes |
| CSS Modules | Estilização por componente |

---

## Rotas

| Rota | Página |
|---|---|
| `/` | Home — filmes mais bem avaliados |
| `/movie/:id` | Detalhes de um filme |
| `/search?q=...` | Resultados da busca |

---

<div align="center">
  <sub>Dados fornecidos por <a href="https://www.themoviedb.org/">The Movie Database (TMDB)</a></sub>
</div>
