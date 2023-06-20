import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ usuarioLogueado, setUsuarioLogueado }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          Recetitas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-item nav-link" to={'/'}>
              Inicio
            </NavLink>
            <NavLink className="nav-item nav-link" to={'/admin'}>
              Administracion
            </NavLink>
            <NavLink className="nav-item nav-link" to={'/login'}>
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to={'/registro'}>
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;