import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCharacter } from './reducers/favouritesSlice';

const CardDetail = () => {
    const {id}= useParams();
    const [character, setCharacter] = useState([]);
    const [imageError, setImageError] = useState(false);
    

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/'+id).then((response) => {
            setCharacter(response.data);
        });
      }, [id]);
      
      const dispatch = useDispatch();
      const favourites = useSelector(state => state);
     
     
       const handleAddToFavourites = () => {
         const isAlreadyFavourite = favourites.some(
           favourite => favourite.url === character.url
         );
         if (!isAlreadyFavourite) {
           dispatch(addCharacter(character));
         }
       };

      return (
        <div className="container">
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
        <p>Gender: {character.gender}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <h3>Movies:</h3>
        <ul>
   
        </ul>
      </div>
      <div>
        <button onClick={handleAddToFavourites} > Add to Favourites</button>
      </div>
    </div>
        </div>
      );
    };
    
    export default CardDetail
