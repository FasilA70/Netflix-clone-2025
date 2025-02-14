import React from "react";
import requests from "../../utils/requests"
import Rows from "../Rows/Rows"

const RowList = () => {
  return (
    <>
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      {/* /<Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} /> */}
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Rows title="Tv Shows" fetchUrl={requests.fetchTvShow} />
    </>
  );
};

export default RowList;
