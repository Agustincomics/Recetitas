import React from 'react';
import { useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {useParams, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {consultaeditarReceta, obtenerReceta} from './helpers/queries'


const EditarReceta = () => {
    const {id}= useParams();
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
      } = useForm();
      
      useEffect(()=>{
        obtenerReceta(id).then( (respuesta)=>{
            console.log(respuesta);
            setValue('nombreReceta', respuesta.nombreReceta)
            setValue('imagen', respuesta.imagen)
            setValue('Instrucciones', respuesta.Instrucciones)
        })  
        console.log(id)
      }, [])

      const onSubmit = (recetaEditada) =>{
        console.log(recetaEditada);
        consultaeditarReceta(recetaEditada, id).then((respuesta)=>{
            if (respuesta) {
                if (respuesta.status === 200) {
                    Swal.fire('Receta actualizada', `La Receta: ${recetaEditada.nombreReceta} fue editado correctamente`, 'success');
                    navegacion('/admin');
                }else{
                    Swal.fire('Se produjo un error', `La Receta: ${recetaEditada.nombreReceta} no fue editado, intentelo mas tarde`, 'error');
                }
            }else{
                Swal.fire('Se produjo un error', `La Receta: ${recetaEditada.nombreReceta} no fue editado, intentelo mas tarde`, 'error');
            }
            
        })
      }

    return (
        <section className="container mainSection">
            <h1 className="display-4 mt-5">Editar Receta</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formNombreReceta">
                <Form.Label>Receta*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ej: Cafe"
                    {...register("nombreReceta", {
                    required: "El nombre del producto es obligatorio",
                    minLength: {
                        value: 2,
                        message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                    maxLength: {
                        value: 100,
                        message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                    })}
                />
                <Form.Text className="text-danger">
                    {errors.nombreReceta?.message}
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                <Form.Label>Imagen URL*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                    {...register("imagen", {
                    required: "La imagen es obligatoria",
                    })}
                />
                <Form.Text className="text-danger">
                    {errors.imagen?.message}
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formInstruccionesReceta">
                <Form.Label>Instruccion*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ej: Cafe"
                    {...register("Instrucciones", {
                    required: "La Instruccion de la receta es obligatorio",
                    minLength: {
                        value: 2,
                        message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                    maxLength: {
                        value: 100000,
                        message: "La cantidad maxima es de 100.000 caracteres",
                    },
                    })}
                />
                <Form.Text className="text-danger">
                    {errors.Instrucciones?.message}
                </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                Guardar
                </Button>
            </Form>
        </section>
    );
};

export default EditarReceta;