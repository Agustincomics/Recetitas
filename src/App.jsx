/* Crea una aplicación web, que permita mostrar un blog de recetas de cocina en una página, desde otra pagina debo poder agregar, 
modificar o quitar las recetas y estas deben estar almacenadas en el localstorage o json-server. */
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Admin from './components/Admin';
import Error404 from './components/Error404';
import RutasAdmin from './components/RutasAdmin';
import CrearReceta from './components/CrearReceta';
import RutasProtegidas from './components/RutasProtegidas';
import DetalleReceta from './components/DetalleReceta';
import Inicio from './components/Inicio';
import Registro from './components/Registro';
import Footer from './components/Footer';

function App() {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);
  return (
    <BrowserRouter>
      <Header usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Header>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/registro' element={<Registro></Registro>}></Route>
          <Route exact path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route exact path='/detalle/:id' element={<DetalleReceta></DetalleReceta>}></Route>
          <Route exact path='/admin/*' element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }></Route>
          <Route exact path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
