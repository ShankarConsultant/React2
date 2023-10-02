import { useState } from 'react';
import App from './App';

const MovieItemList = (param) => {  
    return <>
        <div>
            <div> <img alt="" style={{borderRadius:'30px'}} src={param.movieParamPoster}/>  </div>
            <div> <h4>{param.movieParamTitle}  ({param.movieParamYr})</h4>         </div>
            <div> <h4> Director: {param.movieParamDirection} </h4>       </div>
            <div> <h4> Casts: {param.movieParamCasts} </h4>              </div>
            <div> <h4> Genre: {param.movieParamGenre} </h4>              </div>
        </div> 
    </>;
};

export default MovieItemList;