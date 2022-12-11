import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export default function MovieDetail(props) {
    const params = useParams()
    // so, we have the ID of the movie we want to render in here. We need to select the data based on the 
    const movies = useSelector(store => store.movies)

    useEffect(
        
    )
    
    console.log(movies);
    console.log(params.id);
    const currentMovie = movies.find(movie => movie.id == params.id)
    console.log(currentMovie);

    return (
        <div>
            <img src={currentMovie.poster} alt="" />
        </div>
    )
}