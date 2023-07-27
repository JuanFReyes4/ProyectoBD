import React from 'react';
import './style.css';

const Popup = ({ mensaje, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>{mensaje}</p>
        <button onClick={() => window.location.href = '/plataforma'}>Aceptar</button>
      </div>
    </div>
  );
};

export default Popup;
