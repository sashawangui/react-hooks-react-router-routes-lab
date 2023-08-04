import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((act) => {
    const moviesList = act.movies.map((mov, index) => (
      <li key={index}>{mov}</li>
    ));
    return (
      <div key={act.name}>
        <h1>{act.name}</h1>
        <ul>{moviesList}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
