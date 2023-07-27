import React from 'react';
import './styles.css';

const Inicio = () => {
  return (
    <div className='inicio'>
      <h1>TRABAJA CON NOSOTROS</h1>
      <p>CONCURSO DE MÉRITOS Y OPOSICIÓN 2023</p>
      <p onClick={() => window.location.href = '/login'}>Iniciar</p>
    </div>
  );
};

export default Inicio;
