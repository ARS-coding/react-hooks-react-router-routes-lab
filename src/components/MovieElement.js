import React from 'react'
import {v4 as uuidv4} from "uuid";

function MovieElement({movieObj}) {
    let {title, time, genres} = movieObj;
    return (
        <div>
            <hr/>
            <p>Name: {title}, Time: {time}.</p>

            <h3>Genres:</h3>
            <ul className="genres">
                {genres.map((genre) => <li key={uuidv4()}>{genre}</li>)}
            </ul>   
        </div>
    )
}

export default MovieElement
