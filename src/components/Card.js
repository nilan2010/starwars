import React, {  useState } from 'react';
import { Link } from 'react-router-dom'

const Card = ({ character}) => {
  const [imageError, setImageError] = useState(false);
  const id= character.url.replace("https://swapi.dev/api/people/","").replace("/","") ;
  return (
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
        <h5 className="card-title">{character.name}</h5>
        <Link className="btn btn-primary" to={"/"+id}>Detail</Link>
      </div>
    </div>
  );
};
export default Card;