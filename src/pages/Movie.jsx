import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = (import.meta.env.VITE_IMG || "https://image.tmdb.org/t/p/w500/").replace(/\/$/, "");
const backdropURL = "https://image.tmdb.org/t/p/w1280";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    if (!number) return "N/A";
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  if (!movie) {
    return (
      <div className="movie-loading">
        <div style={{ width: 48, height: 48, borderRadius: "50%" }} className="skeleton" />
        <span>Carregando...</span>
      </div>
    );
  }

  const posterSrc = movie.poster_path ? `${imagesURL}${movie.poster_path}` : null;
  const backdropSrc = movie.backdrop_path ? `${backdropURL}${movie.backdrop_path}` : null;
  const hasHero = !!backdropSrc;

  return (
    <div className="movie-page">
      {hasHero && (
        <div className="movie-hero">
          <img
            className="movie-hero__img"
            src={backdropSrc}
            alt={`${movie.title} backdrop`}
          />
          <div className="movie-hero__gradient" />
        </div>
      )}

      <div className={`movie-content${hasHero ? "" : " movie-content--no-hero"}`}>
        <div className="movie-poster">
          {posterSrc ? (
            <img src={posterSrc} alt={movie.title} />
          ) : (
            <div className="movie-poster__no-img">Sem imagem</div>
          )}
        </div>

        <div className="movie-info">
          <h1 className="movie-info__title">{movie.title}</h1>

          {movie.tagline && (
            <p className="movie-info__tagline">"{movie.tagline}"</p>
          )}

          {movie.vote_average > 0 && (
            <div className="movie-info__rating">
              <FaStar />
              {movie.vote_average?.toFixed(1)}
              {movie.vote_count > 0 && (
                <span className="movie-info__vote-count">
                  ({movie.vote_count?.toLocaleString()} votos)
                </span>
              )}
            </div>
          )}

          {movie.genres?.length > 0 && (
            <div className="movie-info__genres">
              {movie.genres.map((g) => (
                <span key={g.id} className="genre-tag">
                  {g.name}
                </span>
              ))}
            </div>
          )}

          <hr className="movie-divider" />

          <div className="movie-stats">
            {movie.runtime > 0 && (
              <div className="movie-stat">
                <span className="movie-stat__label">
                  <BsHourglassSplit /> Duracao
                </span>
                <span className="movie-stat__value">{movie.runtime} min</span>
              </div>
            )}
            <div className="movie-stat">
              <span className="movie-stat__label">
                <BsWallet2 /> Orcamento
              </span>
              <span className="movie-stat__value">{formatCurrency(movie.budget)}</span>
            </div>
            <div className="movie-stat">
              <span className="movie-stat__label">
                <BsGraphUp /> Receita
              </span>
              <span className="movie-stat__value">{formatCurrency(movie.revenue)}</span>
            </div>
          </div>

          {movie.overview && (
            <div className="movie-overview">
              <h3>Sinopse</h3>
              <p>{movie.overview}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
