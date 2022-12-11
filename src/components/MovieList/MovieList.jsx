import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    const handlePosterClick = (movie) => {
        console.log(movie.title);
        history.push(`/detail/${movie.id}`)
        // on the click of each movie, load that movie into a global state? 
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={() => handlePosterClick(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;