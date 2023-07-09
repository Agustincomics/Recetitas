import React from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/esm/Container';
import {Card, Form, Button } from 'react-bootstrap'
import { consultaCrearUsuario, login } from './helpers/queries';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const Registro = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
    const navegacion = useNavigate();

    const onSubmit = (usuarioNuevo) => {
        console.log(usuarioNuevo);
        // realizar la peticion que agrega el usuario a la API
        consultaCrearUsuario(usuarioNuevo).then((respuesta)=>{
          if(respuesta.status === 201){
            Swal.fire(
              'Usuario registrado',
              `El usuario ${usuarioNuevo.nombreUsuario} fue registrado`,
              'success'
            );
            navegacion('/login');
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
            <Container className="mainSection">
                <Card className="my-5">
                    <Card.Header as="h5">Registro</Card.Header>
                    <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre de ususario" {
                            ...register('nombreUsuario',{
                            required: 'El usuario es obligatorio',
                            minLength: {
                                value: 2,
                                message: "La cantidad minima de caracteres es de 2 digitos",
                            },
                            maxLength: {
                                value: 30,
                                message: "La cantidad maxima de caracteres es de 30 digitos",
                            },
                            })
                        } />
                        <Form.Text className="text-danger">
                            {errors.nombreUsuario?.message}
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el email" {
                            ...register('email',{
                            required: 'El email es obligatorio',
                            pattern:{
                                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                message: 'El email debe contener @ y terminar . com/es/com.ar u otra terminacion'
                            }
                            })
                        } />
                        <Form.Text className="text-danger">
                            {errors.email?.message}
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {
                            ...register('contra',{
                            required: 'la contraseña es obligatoria',
                            pattern:{
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message: 'La contraseña debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales'
                            }
                            })
                        } />
                        <Form.Text className="text-danger">
                            {errors.contra?.message}
                        </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Registrar
                        </Button>
                    </Form>
                    </Card.Body>
                </Card>
            </Container>
    );
};

export default Registro;