import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const SKELETON_COUNT = 12;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="page-section">
      <div className="section-header">
        <h2 className="section-title">Resultados</h2>
        <p className="query-label">
          para: <span>"{query}"</span>
        </p>
      </div>

      {loading ? (
        <div className="movies-grid--skeleton">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <div key={i} className="skeleton-card skeleton" />
          ))}
        </div>
      ) : movies.length === 0 ? (
        <div className="movies-grid">
          <div className="empty-state">
            <h3>Nenhum resultado</h3>
            <p>Tente buscar por outro titulo.</p>
          </div>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
