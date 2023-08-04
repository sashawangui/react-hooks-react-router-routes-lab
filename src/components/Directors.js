import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((dir) => {
    const moviesList = dir.movies.map((mov, index) => (
      <li key={index}>{mov}</li>
    ));
    return (
      <div key={dir.name}>
        <h1>{dir.name}</h1>
        <ul>{moviesList}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors;
