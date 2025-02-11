import axios from "../../utils/axios";
import React , { useEffect, useState } from 'react'
import requests from "../utils/requests";

function Banner() {
    let {movie, setMovie} =useState([]);
    useEffect(() => {
        (async () => {
            try {
                let requests = await axios.get(requestsfetchNetflixOriginals);
                console.log(requests);
                setMovie(requests.data.results)[
                    Math.floor(Math.random() . requests.data.results.length)
                ]);
            } catch (error) {
                console.log("error", error);
            }
        })()
    }, []);
  return (
    <div className="banner"style={{
        backgroundSize: "cover",
        backgroundImage:



    }}>




    </div>
  )
}

export default Banner