import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCharacter } from './reducers/favouritesSlice';

function FavouriteCharacter({ character }) {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);
  const id= character.url.replace("https://swapi.dev/api/people/","").replace("/","") ;
  const handleRemove = () => {
    dispatch(removeCharacter(character));
  };

  return (
    <div className="favourite">
       <div className="card">
      {imageError ? (
        <img
          src="https://via.placeholder.com/150"
          alt="Fallback"
          className="card-img-top"
        />
      ) : (
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={character.name}
          width={150} height={150}
          className="card-image"
          onError={() => setImageError(true)}
        />
      )}
      <div className="card-body">
        Name : {character.name} <br/>
        Height : {character.height}<br/>
        Mass : {character.mass}<br/>
        
       
      </div>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

function Favourites() {
  const favourites = useSelector(state => state);

  return (
    <div>
      <h2>Favourites</h2>
      {favourites.map(character => (
        <FavouriteCharacter key={character.url} character={character} />
      ))}
    </div>
  );
}

export default Favourites;