import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from './../../Hook/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>

            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
            <Navbar collapseOnSelect expand="lg" bg="" style={{ background: "#e3f2fd" }} variant="light">
                <Container>
                    <Navbar.Brand href="/" className="text-dark fw-bold">UNIQUE<span className="text-danger">SHOP</span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" variant="dark">
                        <Nav className="me-auto fw-bold">
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/product">Product</Nav.Link>
                            <Nav.Link href="/sale">Sale</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/lookbook">Lookbook</Nav.Link>
                            <Nav.Link href="/blogs">Blog</Nav.Link>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>


                        </Nav>

                        {/* <Nav>
                                {
                                    <Nav.Link href="/register">Register</Nav.Link>
                                }
                            </Nav> */}
                        <Nav>

                            {
                                user.displayName ?
                                    <div><span className="text-warning">{user.displayName}</span><button onClick={logOut}>Sign Out</button> </div> :

                                    <Nav className='fw-bold '>
                                        <Nav.Link href="/login">Log In</Nav.Link>
                                        <Nav.Link href="/cart">Cart</Nav.Link></Nav>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;