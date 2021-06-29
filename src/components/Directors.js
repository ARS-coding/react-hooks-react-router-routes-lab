import React from "react";
import {v4 as uuidv4} from "uuid";
import DirectorElement from "./DirectorElement";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(directorObj => <DirectorElement key={uuidv4()} directorObj={directorObj} />)}
    </div>
  )
}

export default Directors;
