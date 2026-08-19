import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <BiCameraMovie />
        <span>CineLib</span>
      </Link>
      <form className="navbar__form" onSubmit={handleSubmit}>
        <input
          className="navbar__input"
          type="text"
          placeholder="Busque um filme..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="navbar__btn" aria-label="Buscar">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
