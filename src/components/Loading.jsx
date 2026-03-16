import React from 'react';
import './Loading.css';
import ToothIcon from '../assets/icons/tooth.svg';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2>NovaOdonto</h2>
        <p>Carregando...</p>
      </div>
    </div>
  );
};

export default Loading;
