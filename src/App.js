import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Formulario from './pages/Formulario';
import Plataforma from './pages/Plataforma';
import Informacion from './pages/Informacion';
import Postulante from './pages/Postulante';
import Proceso from './pages/Proceso';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/postulante" element={<Postulante />} />
        <Route path="/proceso" element={<Proceso />} />
      </Routes>
    </Router>
  );
};

export default App;
