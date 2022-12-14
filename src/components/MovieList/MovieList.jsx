import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    // the click of a poster sends you to the detail page for that movie
    const handlePosterClick = (movie) => {
        console.log(movie.title);
        
        history.push(`/detail/${movie.id}`)

    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.movie.id} 
                            className='card'>
                            <h3 className='title'>{movie.movie.title}</h3>
                            <img 
                                src={movie.movie.poster} 
                                alt={movie.movie.title}
                                onClick={() => handlePosterClick(movie.movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;