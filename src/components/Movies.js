import React from "react";
import MovieElement from "./MovieElement";
import { movies } from "../data";
import {v4 as uuidv4} from "uuid";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movieObj) => <MovieElement key={uuidv4()} movieObj={movieObj} />)}
    </div>
  )
}

export default Movies;
