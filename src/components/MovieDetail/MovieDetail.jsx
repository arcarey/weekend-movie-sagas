import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './MovieDetail.css'



export default function MovieDetail(props) {
    // we'll use params to identify which movie page we are on. This is in the URL
    const params = useParams()
    // we'll bring in the whole array of movies so that we can select which one we are looking at with the ID
    const [movies, setMovies] = useState(useSelector(store => store.movies))
    // the current movie is the movie that matches our params ID
    const [currentMovie, setCurrentMovie] = useState(movies.find(thisMovie => thisMovie.movie.id == params.id).movie)

    const history = useHistory();

    const returnToList = () => {
        history.push('/');
    }

    return (
        <div className="view-port">
            <button onClick={() => returnToList()}>Back To List!</button>
            <div className="info">
                <img className="poster" src={currentMovie.poster} alt={currentMovie.title} />
                <div className="title-detail">
                    <h2>{currentMovie.title}</h2>
                    <br/>
                    <h4 className="genres">Genres:</h4>
                            {currentMovie.genres.map(genre => {
                                    return (
                                        <div key = {genre.genres}>{genre.genres}</div>
                                    )
                                }                    
                            )}
                </div>
            </div>
            <p>{currentMovie.description}</p>

        </div>
    )
}