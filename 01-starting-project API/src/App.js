import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setmovies] = useState([]);
  const [loading,setloading]=useState(false);
  const[error,seterror]=useState(null);

  async function fetchmoviehandler() {
    setloading(true);
    seterror(null);

    try{
      const response=await fetch('https://swapi.dev/api/films/');
      
      if(!response.ok)
      {
        throw new error('Ghapala hai!');
      }
      const data= await response.json();
        const transformedmovies = data.results.map(moviedata => {
          return {
            id: moviedata.episode_id,
            title: moviedata.title,
            openingText: moviedata.opening_crawl,
            releaseDate: moviedata.release_date
          }; 
        });
        setmovies(transformedmovies);
      }catch(error){
        seterror(error.message); 
      }
      setloading(false);
  };
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviehandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading &&<MoviesList movies={movies} />}
        {!loading && error && <p>{error}</p>}
        {loading &&<p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
