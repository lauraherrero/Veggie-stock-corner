import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tabs, Tab, Spinner } from 'react-bootstrap';

class FoodsDetail extends Component {

    constructor(props) {
        super (props)
        this.state = { foods: undefined }
    }

    componentDidMount () {
        const id = this.props.match.params.foodId
        fetch(`https://react-webinar.herokuapp.com/${id}`)
            .then(response => response.json())
            .then(foodsDetails => this.setState({ foods: foodsDetails }))
            .catch(error => console.log(error))
    }

    render () {

        return (

        <Container>

            {
            !this.state.foods ?

            <Spinner animation="border" role="status" className="spinner">
                <h3 className="sr-only">Loading...</h3>
            </Spinner>

            :
            
            <Row>
                <Col md={4}>
                <h1>{this.state.foods.name}</h1>
                <img className="food-detail-img" src={this.state.foods.img} alt={this.state.foods.name} />
                </Col>
                <Col md={8}>
                    <h2>Especificaciones del alimento</h2>
                    <p>{this.state.foods.description}</p>
                    <hr />
                    <p>Precio: {this.state.foods.price} €</p>
                    <Tabs defaultActiveKey="Nutricional">
                        <Tab className="tab" eventKey="Nutricional" title="Nutricional">
                            <h3>Información nutricional</h3>
                            <hr />
                            <p>Información nutricional por 100g:</p>
                            <ul>
                                <li>Calorías: {this.state.foods.kcal}</li>
                                <li>Proteínas: {this.state.foods.protein}</li>
                                <li>Grasas: {this.state.foods.fat}</li>
                                <li>Carbohidratos: {this.state.foods.carbs}</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="Origen" title="Origen">
                            <h3>Origen</h3>
                            <hr />
                            <p>{this.state.foods.name} procedente de:</p>
                            <ul>
                                {this.state.foods.origin.map(country => 
                                    <li>{country}</li>)}
                            </ul>
                        </Tab>
                        <Tab eventKey="Stock" title="Stock">
                            <h3>Stock</h3>
                            <hr />
                            <p>Stock actual: {this.state.foods.stock} unidades en stock</p>
                        </Tab>
                    </Tabs>
                    <Link className="btn btn-dark" to="/foods">Volver al listado</Link>
                </Col>
            </Row>
        }
        </Container>
        )
    }
}


export default FoodsDetail;