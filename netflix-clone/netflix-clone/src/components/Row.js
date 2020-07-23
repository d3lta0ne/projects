import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import "../styles/Row.css";
const baseURL = "https://api.themoviedb.org/3";
const baseURL_img = "https://image.tmdb.org/t/p/original";
const Row = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(baseURL + props.fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);

  // console.table(movies);
  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`${baseURL_img}${movie.poster_path}`}
          />
        ))}
      </div>

      {/* container -- posters */}
    </div>
  );
};

export default Row;
