
import './Photo.css'
import React from 'react';

const Photo = ({ photoUrl }) => {
  return (
    <div>
      <img  className = " photo-size" src={photoUrl} alt="Selected" />
    </div>
  );
};

export default Photo;