import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2>Carregando...</h2>
      </div>
    </div>
  );
};

export default Loading;