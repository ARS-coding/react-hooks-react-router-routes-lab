import React from 'react'
import {v4 as uuidv4} from "uuid";

function DirectorElement({directorObj}) {
    let {name, movies} = directorObj;
    return (
        <div>
            <hr/>
            <h3>Name: {name}</h3>
            <p>Movies:</p>
            <ul>
                {movies.map(movie => <li key={uuidv4()}>{movie}</li>)}    
            </ul>           
        </div>
    )
}

export default DirectorElement
