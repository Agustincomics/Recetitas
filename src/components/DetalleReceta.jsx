import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {useParams, useNavigate} from "react-router-dom";
import { obtenerReceta } from './helpers/queries';


const DetalleReceta = () => {
    const {id}= useParams();
    const [recetas, setRecetas] = useState([]);

    useEffect(()=>{  
        obtenerReceta(id).then( (respuesta)=>{
            console.log(respuesta);
            setRecetas(respuesta);
        })
        console.log(id)
      }, [])
    return (
        <Container className="my-3 mainSection">
            <Card>
                <Row>
                <Col md={6}>
                    <Card.Img
                    variant="top"
                    src={recetas.imagen}
                    />
                </Col>
                <Col md={6}>
                    <Card.Body>
                    <Card.Title>{recetas.nombreReceta}</Card.Title>
                    <hr />
                    <Card.Text>
                    {recetas.Instrucciones}
                    <br/>
                    </Card.Text>
                    </Card.Body>
                </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default DetalleReceta;