
import './App.css';
import { useState } from 'react';
import movieList from './movie.json';
import MovieItemList from './MovieItemList';

const flexDiv = {
  display: 'flex',
  flexDirection:'row'
};
const sideContainer1 = {
  width: "48%",
  padding: '2%',
  background:"#f1eeee",
};
const sideContainer2 = {
  width: "48%",
  padding: '2%',
  background:"#e3e7e7",  
};

function App() {
  let movieData = movieList;
  const [visible, setVisible] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [moviePoster, setMoviePoster] = useState('');
  const [movieYr, setMovieYr] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieCasts, setMovieCasts] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
 /*
  const initialvalues = {    fname: "",    lname: ""  };
  const [data, setData] = useState(initialvalues);
  const display = () => console.log(data);

  const handleChange = (e) => {    setData({ ...data, [e.target.name]: e.target.value });  };   */

  const viewMovie = (movieTitleParam, movieParam) => {   
    setMovieTitle(movieTitleParam);
    setMoviePoster(movieParam.poster);    
    setMovieYr(movieParam.year);   
    setMovieDirector(movieParam.director);
    setMovieCasts(movieParam.casts);  
    setMovieGenre(movieParam.genre)
    setVisible(true);
  }
  return (
    <div className="App">
      <div>
          <header className="App-header"> </header>
      </div>
      <div style={flexDiv}>     
        <div style={sideContainer1} >  
            {visible && <div style={{borderRadius:'10px',border:'3px solid #fff', padding:'10px',minHeight:'300px'}}> 
             
              <MovieItemList 
                  movieParamPoster = {moviePoster}
                  movieParamTitle = {movieTitle} 
                  movieParamYr = {movieYr} 
                  movieParamDirection = {movieDirector} 
                  movieParamCasts = {movieCasts} 
                  movieParamGenre = {movieGenre} 
                  />               
            </div>}
        </div>
        <div style={sideContainer2}>
          <ul className='movieUL'>            
            {movieData.map(movieItem => (
                <li key={movieItem.title} onClick={()=>viewMovie(movieItem.title, movieItem)}>
                    {movieItem.title}               
                </li>
            ))}
        </ul>
        </div>
        </div>
    </div>
  );
}

export default App;