import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./MovieCard.css";

const imagesURL = (import.meta.env.VITE_IMG || "https://image.tmdb.org/t/p/w500/").replace(/\/$/, "");

const MovieCard = ({ movie, showLink = true }) => {
  const posterSrc = movie.poster_path
    ? `${imagesURL}${movie.poster_path}`
    : null;

  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        {posterSrc ? (
          <img src={posterSrc} alt={movie.title} loading="lazy" />
        ) : (
          <div className="movie-card__no-img">
            <FaStar size={24} color="var(--text-muted)" />
            <span>Sem imagem</span>
          </div>
        )}
        {movie.vote_average > 0 && (
          <span className="movie-card__rating">
            <FaStar />
            {movie.vote_average?.toFixed(1)}
          </span>
        )}
        {showLink && (
          <div className="movie-card__overlay">
            <Link to={`/movie/${movie.id}`} className="movie-card__btn">
              Ver detalhes
            </Link>
          </div>
        )}
      </div>
      <h3 className="movie-card__title">{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
