import React from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/esm/Container';
import {Card, Form, Button } from 'react-bootstrap'
import { login } from './helpers/queries';
import { useNavigate } from 'react-router-dom';

const Login = ({setUsuarioLogueado}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
    const navegacion = useNavigate();


    const onSubmit = (usuario)=>{
        login(usuario).then((respuesta)=>{
            if(respuesta) {
              //debo loguear al usuario  
              sessionStorage.setItem('usuario', JSON.stringify(respuesta))
              setUsuarioLogueado(respuesta);
              navegacion('/admin');
            }else{
                //Indicar datos erroneos al usuario
            }
        });
    }

    return (
            <Container className="mainSection">
                <Card className="my-5">
                    <Card.Header as="h5">Login</Card.Header>
                    <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                            ...register('password',{
                            required: 'la contraseña es obligatoria',
                            pattern:{
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message: 'La contraseña debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales'
                            }
                            })
                        } />
                        <Form.Text className="text-danger">
                            {errors.password?.message}
                        </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Ingresar
                        </Button>
                    </Form>
                    </Card.Body>
                </Card>
            </Container>
    );
};

export default Login;