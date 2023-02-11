import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const { id, medium_cover_image, title, summary, genres } = movie;

  return (
    <div>
      <img src={medium_cover_image} alt="" />
      <h2>
        <Link to={`/movie/${id}`}>
          <h2>{title}</h2>
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
