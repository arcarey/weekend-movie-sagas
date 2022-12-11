import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <ScrollToTop/>
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path = "/detail/:id">
          <MovieDetail/>
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
