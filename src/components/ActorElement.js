import React from 'react'
import {v4 as uuidv4} from "uuid";

function ActorElement({actorObj}) {
    let {name, movies} = actorObj;
    return (
        <div>
            <hr/>
            <p>{name}</p>
            <ul>
                {movies.map(movie => <li key={uuidv4()}>{movie}</li>)}
            </ul>
        </div>
    )
}

export default ActorElement
