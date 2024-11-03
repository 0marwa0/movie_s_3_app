import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./movies.css";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

function Movies() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en&page=1";
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchMoives() {
    // let data = await fetch(url).then((res) => {
    //   return res.json();
    // });
    setIsLoading(true);

    try {
      let data = await fetch(url);
      let movies = await data.json(); // this line is equal to the one above with the .then
      setMoviesData(movies.results);
      console.log(movies.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMoives();
  }, []);
  return (
    <div className="d-flex gap-4 flex-wrap mt-4 justify-content-center">
      {isLoading ? (
        <PacmanLoader
          color="teal"
          loading={isLoading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        moviesData.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Button variant="primary">Add to fav</Button>
              </Card.Body>
            </Card>
          </Link>
        ))
      )}
    </div>
  );
}

export default Movies;
