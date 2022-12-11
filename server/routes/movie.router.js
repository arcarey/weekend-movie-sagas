const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  //in this select, we're going to grab not only the movies, but the entire array of their genres

  const query = `SELECT row_to_json(mov) AS movie
                  FROM(
                    SELECT m.id, m.title, m.poster, m.description, 
                      (SELECT json_agg(genr)
                      FROM (
                        SELECT genres.name AS genres FROM genres
                          JOIN movies_genres ON movies_genres.genre_id = genres.id
                          JOIN movies ON movies_genres.movie_id = movies.id
                          WHERE movies_genres.movie_id = m.id
                      ) genr
                  ) AS genres
                      
                  FROM movies AS m) mov;`;
  pool.query(query)
    .then( result => {
      const movies = result.rows
      res.send(movies);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;