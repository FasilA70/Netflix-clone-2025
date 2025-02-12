import React, { useCallback, useEffect, useState } from 'react'
import requests from '../../utils/requests';

function Banner() {
    const [movie, setMovie] =useState(null);
    const fetchData = useCallback(async() =>{
        try{
            const{data}=await axios.get(requests.fetchNetflixOriginals);
            if(data?.results?.length) {
                setMovie(data.results[Math.floor(Math.raundom()*data.results.length)]);

            }
        }catch(error) {
            console.error(error)

        }


    },[]);

    useEffect(() =>{
        fetchData();
    },[fetchData])

    const truncate=(str, n) =>(str?.length >n?str.slice(0,n-1)+"...":str);
    if(!movie) return null;
    const {title, name, original_name, overview, backdrop_path}= movie 

  return (
    <div className='banner'
    style={{
        backgroundSize: "Cover",
        backgroundImage: url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}"),
        backgroundPosition: "Center",
        backgroundRepeat: "no-repeat", 

    }}
    
    >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button play">play</button>
                <button className="banner_button play">My List</button>
            </div>
            {/" <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1> "}
            </div>
            <div className="banner_fadeBottom" />
            </div>
  )
}

export default Banner























// import axios from "../../utils/axios";
// import React , { useEffect, useState } from 'react'
// import requests from "../utils/requests";

// function Banner() {
//     let {movie, setMovie} =useState([]);
//     useEffect(() => {
//         (async () => {
//             try {
//                 let requests = await axios.get(requestsfetchNetflixOriginals);
//                 console.log(requests);
//                 setMovie(requests.data.results)[
//                     Math.floor(Math.random() . requests.data.results.length)
//                 ]);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         })()
//     }, []);
//   return (
//     <div className="banner"style={{
//         backgroundSize: "cover",
//         backgroundImage:



//     }}>




//     </div>
//   )
// }

// export default Banner