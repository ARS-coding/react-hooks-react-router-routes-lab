import React from "react";
import {v4 as uuidv4} from "uuid";
import ActorElement from "./ActorElement";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actorObj => <ActorElement key={uuidv4()} actorObj={actorObj} />)}
    </div>
  )
}

export default Actors;
