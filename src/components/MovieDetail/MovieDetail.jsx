import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export default function MovieDetail(props) {
    const params = useParams()
    // so, we have the ID of the movie we want to render in here. We need to select the data based on the 
    const movies = useSelector(store => store.movies)

    
    console.log(movies);
    console.log(params.id);
    const currentMovie = movies.find(movie => movie.id == params.id)
    console.log(currentMovie);

    return (
        <div>
            <h2>{currentMovie.title}</h2>
            <img src={currentMovie.poster} alt={currentMovie.title} />
            <p>{currentMovie.description}</p>
            <ul>
                
            </ul>

        </div>
    )
}