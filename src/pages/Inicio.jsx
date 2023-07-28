import React from 'react';
import './styles.css';

const Inicio = () => {
  return (
    <div className='inicio'>
      <div className='recuadro-blanco'>
        <h1>TRABAJA CON NOSOTROS</h1>
        <h2>CONCURSO DE MÉRITOS Y OPOSICIÓN 2023</h2>
        <button onClick={() => window.location.href = '/login'}>Comenzar</button>
      </div>
    </div>
  );
};

export default Inicio;
