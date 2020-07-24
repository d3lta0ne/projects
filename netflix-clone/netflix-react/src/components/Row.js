import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import "../styles/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseURL_img = "https://image.tmdb.org/t/p/original";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${baseURL_img}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={`${movie.original_name}`}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
