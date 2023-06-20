import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { consultaCrearReceta } from './helpers/queries';

const CrearReceta = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

    const onSubmit = (recetaNueva) => {
        console.log(recetaNueva);
        consultaCrearReceta(recetaNueva).then((respuesta)=>{
          if(respuesta.status === 201){
            Swal.fire(
              'Producto Creado',
              `El producto ${recetaNueva.nombreReceta} fue creado`,
              'success'
            );
            reset();
          }else{
            Swal.fire(
              'Se produjo un error',
              `Intente realizar esta operacion mas tarde`,
              'error'
            )
          }
        })
      };

    return (
        <section className="container mainSection">
            <h1 className="display-4 mt-5">Nueva Receta</h1>
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

export default CrearReceta;