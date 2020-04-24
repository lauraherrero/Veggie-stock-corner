import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IndexPage = () => {
    return (
        <Container>
            <h1>Veggie stock corner 🥑 🍅 🥬</h1>
            <p>Una sencilla SPA de alimentos</p>
            <Link className="btn btn-dark btn-outline btn-sm" to="/foods">Ver alimentos</Link>
        </Container>
    )
}

export default IndexPage;