import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import error from '../assets/error404.avif'

const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="error 404" />
            <div>
            <Button variant='primary' >Volver al inicio</Button>
            </div>
        </section>
    );
};

export default Error404;