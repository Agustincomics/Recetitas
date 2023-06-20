import React from 'react';
import { Routes, Route } from "react-router-dom";
import Admin from './Admin';
import CrearReceta from './CrearReceta';
import EditarReceta from './EditarReceta';

const RutasAdmin = () => {
    return (
        <>
            <Routes>
                <Route
                exact
                path="/"
                element={<Admin></Admin>}
                ></Route>
                <Route
                exact
                path="/crear"
                element={<CrearReceta></CrearReceta>}
                ></Route>
                <Route
                exact
                path="/editar/:id"
                element={<EditarReceta></EditarReceta>}
                ></Route>
            </Routes>
        </>
    );
};

export default RutasAdmin;