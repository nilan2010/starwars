import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'


const Characters = () => {
    const [characters, setCharacters] = useState([]);
  

    useEffect(() => {
      axios.get('https://swapi.dev/api/people').then((response) => {
        setCharacters(response.data.results);
      });
    }, []);
    
    return (
      <div className="container">
        <div className="box">
          {characters.map((character,i ) => (
            <div key={character.url} >
              
              <Card character={character} id={character.url.replace("https://swapi.dev/api/people/","").replace("/","") }/>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Characters;