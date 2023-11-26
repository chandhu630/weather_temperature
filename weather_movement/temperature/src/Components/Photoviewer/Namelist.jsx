// NameList component
import React from 'react';
import './Namelist.css'

const NameList = ({ onNameClick }) => {
  const names = [''];

  return (
    <ul>
      {names.map((name, index) => (
        <div className='name-cursor' key={index} onClick={() => onNameClick(name)}>
          {name}
        </div>
      ))}
    </ul>
  );
};

export default NameList;