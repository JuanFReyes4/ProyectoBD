import React from 'react';

const Informacion = () => {
  return (
    <div>
      <h1>TRABAJA CON NOSOTROS</h1>
      <p>CONCURSO DE MÉRITOS Y OPOSICIÓN 2023</p>
      <p onClick={() => window.location.href = '/login'}>Login</p>
    </div>
  );
};

export default Informacion;