import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Card = (props) => {

  const { photo, index } = props;

  const dispatch = useDispatch();

  const handleIsFavorited = (ind, id) => {

    let isFavObj = {
      ind,
      id,
    };

    dispatch({ type: "TOGGLE_FAVOURITE", isFavObj });

    console.log("Update Array Property isFavourited");
    console.log("Add Item To Cart");

  };

  return (
    <div className="card">
      <img src={photo.url} alt={photo.id} style={{ width: "100%", height: "200px" }} />
      <div className="card-icon-wrp">
        {!photo.isFavorite && <FaRegHeart onClick={() => handleIsFavorited(index, photo.id)} />}
        {photo.isFavorite && <FaHeart />}
        <div>
          <FaRegPlusSquare />
        </div>
      </div>
    </div>
  );
}

export default Card;