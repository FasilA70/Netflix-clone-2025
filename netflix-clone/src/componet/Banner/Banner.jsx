import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";
import React, { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomMovie =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  if (!movie) return null;

  const { title, name, original_name, overview, backdrop_path } = movie;

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:` url("https://image.tmdb.org/t/p/original${backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{title || name || original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner;
