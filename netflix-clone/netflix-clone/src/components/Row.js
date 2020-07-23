import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import "../styles/Row.css";
const baseURL_img = "https://image.tmdb.org/t/p/original";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${baseURL_img}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
