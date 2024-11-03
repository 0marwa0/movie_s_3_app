import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ThemeContext } from "./App";
import { useContext } from "react";
function SingleMovie() {
  let theme = useContext(ThemeContext);
  console.log(theme);
  let { id } = useParams();
  let [movie, setMovie] = useState({});
  async function fetchSingleMoive() {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=01947fdc028668cbba608f3d08618bef&language=en&page=1`;
    let data = await fetch(url);
    let movie = await data.json();
    setMovie(movie);
    // console.log(movie);
  }

  useEffect(() => {
    fetchSingleMoive();
  }, []);
  return (
    <div className="d-flex container mt-4 gap-4">
      <img
        width="300"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      <div className="card p-4" style={{ width: "50%" }}>
        <p> {movie.title}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default SingleMovie;
