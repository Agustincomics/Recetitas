import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { obtenerRecetas } from './helpers/queries';
import { consultaBorrarReceta } from './helpers/queries';

const ItemReceta = ({receta, setRecetas}) => {

    const borrarReceta =()=>{
        Swal.fire({
            title: '¿Esta seguro de eliminar la receta?',
            text: "No se puede revertir este paso",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
            
              consultaBorrarReceta(receta._id).then( (respuesta) =>{
                if(respuesta.status === 200){
                  Swal.fire(
                    'Producto eliminado',
                    `La receta ${receta.nombreReceta} fue eliminado`,
                    'success'
                  );
                  obtenerRecetas().then((respuesta)=> setRecetas(respuesta) )

                }else{
                  Swal.fire(
                    'Se produjo un error',
                    `Intente realizar esta operacion mas tarde`,
                    'error'
                  )
                }
              })
            }
          })
    }

    return (
        <tr>
            <td>{receta._id}</td>
            <td>{receta.nombreReceta}</td>
            <td>{receta.Instrucciones}</td>
            <td>
                <Link className="btn btn-warning me-2" to={`/admin/editar/${receta._id}`}>Editar</Link>
                <Button variant="danger" onClick={borrarReceta}>
                Borrar
                </Button>
            </td>
        </tr>
    );
};

export default ItemReceta;