// PhotoViewer.js
import React, { useState } from 'react';
import Photo from './Photo';
import NameList from './Namelist';
import './PhotoViewer.css';

const PhotoViewer = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handlePhotoClick = () => {
    const nextPhotoIndex = getNextPhotoIndex();
    setSelectedPhotoIndex(nextPhotoIndex);
  };

  const getNextPhotoIndex = () => {
    const totalImages = 4;
    return (selectedPhotoIndex + 1) % totalImages;
  };

  const getPhotoUrlByIndex = (index) => {
    const photoMappings = [
      'https://innovationorigins.com/app/uploads/2018/10/20130523_180620-1-scaled.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53TJydFhG7PsXdYsWwStz1AlSq8e4LjxHng&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGT6fdfDBVXh-rzWV_oMR2Xb_WDCHPYPtPg&usqp=CAU',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWP67Gyi9exq0s6nm_llYi1HiUuuRv1nKzQ&usqp=CAU',
    ];

    return photoMappings[index] || '';
  };

  const selectedPhotoUrl = getPhotoUrlByIndex(selectedPhotoIndex);

  return (
    <div className="photo-viewer-container" onClick={handlePhotoClick}>
      <Photo className="photo" photoUrl={selectedPhotoUrl} />
      <NameList className="name-list" />
    </div>
  );
};

export default PhotoViewer;