import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import CardReceta from './CardReceta';
import { obtenerRecetas } from './helpers/queries';

const Inicio = () => {

    const [recetas, setRecetas] = useState([]);

    useEffect(()=>{
        obtenerRecetas().then((respuesta)=>{
            console.log(respuesta);
            setRecetas(respuesta);
            console.log(recetas);
        })
    },[])

    return (
        <section className="mainSection">
      <div className="banner-container">
        <img
          className="banner"
          src="https://images6.alphacoders.com/129/1290175.jpg"
          alt="fondo comida"
        />
      </div>
      <Container className='mt-5 mb-3'>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
          {recetas.map((receta) => (
            <Col className='m-2' key={receta._id} sm={6} md={4} lg={3}>
              <CardReceta receta={receta} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    );
};

export default Inicio;