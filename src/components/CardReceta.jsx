import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CardReceta = ({receta}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={receta.imagen} />
                <Card.Body>
                    <Card.Title>{receta.nombreReceta}</Card.Title>
                    <Card.Text>
                        {receta.Instrucciones}
                    </Card.Text>
                    <Link className="btn btn-warning" to={`detalle/${receta.id}`}>Leer receta</Link>
                </Card.Body>
        </Card>
    );
};

export default CardReceta;