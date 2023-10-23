import React, { useEffect, useState } from "react";
import Post from "./Post";

const API = "https://rickandmortyapi.com/api/character";

const Posts = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <Post
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              origin={character.origin.name}
              location={character.location.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
