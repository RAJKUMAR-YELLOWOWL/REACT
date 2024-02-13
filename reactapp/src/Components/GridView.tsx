import React from 'react';
import '../Css/GridView.css';

function GridView() {
  return (
    <div className='GridView'>
      <div className='title'>
        <h1>LOGIN PAGE</h1>  
      </div>
      <div className='body'>
        <div className="input-container">
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="text" />
        </div>
      </div>
    </div>  
  );
}

export default GridView;

