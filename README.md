<div align="center">

# 🎬 Movies Lib

**Descubra e explore os melhores filmes do cinema**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TMDB](https://img.shields.io/badge/TMDB-API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)

</div>

---

## ✨ Funcionalidades

- **🏆 Top Filmes** — Lista os filmes mais bem avaliados de todos os tempos
- **🔍 Busca** — Pesquise qualquer filme pelo título em tempo real
- **🎥 Detalhes** — Página completa com sinopse, gêneros, duração, orçamento e receita
- **💀 Skeleton Loading** — Placeholders animados durante o carregamento
- **📱 Responsivo** — Layout adaptado para qualquer tela

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js 18+
- Chave de API do [TMDB](https://www.themoviedb.org/settings/api)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/Movies-Lib-React.git
cd Movies-Lib-React

# Instale as dependências
npm install
```

### Rodando

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
```

---

## 🗂️ Estrutura do projeto

```
src/
├── components/
│   ├── Navbar.jsx      # Barra de navegação com busca
│   └── MovieCard.jsx   # Card reutilizável de filme
├── pages/
│   ├── Home.jsx        # Grid dos top-rated
│   ├── Search.jsx      # Resultados da busca
│   └── Movie.jsx       # Detalhes do filme
├── App.jsx             # Layout raiz + rotas
└── main.jsx            # Bootstrap da aplicação
```

---

## 🛠️ Stack

| Tecnologia | Uso |
|---|---|
| React 18 | UI e gerenciamento de estado |
| React Router v6 | Roteamento SPA |
| Vite | Build e dev server |
| TMDB API | Dados e imagens dos filmes |
| CSS Modules | Estilização por componente |

---

## 📄 Rotas

| Rota | Página |
|---|---|
| `/` | Home — filmes mais bem avaliados |
| `/movie/:id` | Detalhes de um filme |
| `/search?q=...` | Resultados da busca |

---

<div align="center">
  <sub>Dados fornecidos por <a href="https://www.themoviedb.org/">The Movie Database (TMDB)</a></sub>
</div>
