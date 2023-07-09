import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/esm/Table';
import { obtenerRecetas } from './helpers/queries';
import ItemReceta from './ItemReceta';
import './Admin.css'

const Admin = () => {

    const [recetas, setRecetas] = useState([]);

    useEffect(()=>{
        obtenerRecetas().then((respuesta)=>{
            console.log(respuesta)
            setRecetas(respuesta);
            console.log(recetas)
        })
    },[])
    return (
    <section className='with-background'>
        <section className="container mainSection " >
            <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4">Lista de Recetas</h1>
            <Link className="btn btn-primary" to='/admin/crear'>
                Agregar
            </Link>
            </div>
            <hr />
            <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Receta</th>
                <th>URL de Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    recetas.map((receta)=> <ItemReceta key={receta._id} receta={receta} setRecetas={setRecetas}></ItemReceta>)
                }
            </tbody>
            </Table>
      </section>
    </section>
    );
};

export default Admin;