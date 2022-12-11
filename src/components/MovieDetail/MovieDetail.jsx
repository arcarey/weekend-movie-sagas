import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export default function MovieDetail(props) {
    // we'll use params to identify which movie page we are on. This is in the URL
    const params = useParams()
    // we'll bring in the whole array of movies so that we can select which one we are looking at with the ID
    const movies = useSelector(store => store.movies)
    console.log(movies);
    // the current movie is the movie that matches our params ID
    const currentMovie = movies.find(thisMovie => thisMovie.movie.id == params.id).movie
    console.log(currentMovie);
    console.log('genres:', currentMovie.genres);
    // We'll need to fetch the genres of each movie based o

    return (
        <div>
            <h2>{currentMovie.title}</h2>
            <img src={currentMovie.poster} alt={currentMovie.title} />
            <p>{currentMovie.description}</p>
            <ul>
                {currentMovie.genres.map(genre => {
                        return (
                            <li key = {genre.genres}>{genre.genres}</li>
                        )
                    }                    
                )}
            </ul>

        </div>
    )
}