import React, { Component } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class FoodsIndex extends Component {

    constructor () {
        super()
        this.state = {foods: undefined }
    }

    componentDidMount () {
        fetch('https://react-webinar.herokuapp.com/')
            .then(response => response.json())
            .then(foodsArray => this.setState({ foods: foodsArray }))
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
                        <>
                        <h1>Stock de alimentos</h1>
                        <p>Consulta los detalles de stock, precios y origen de nuestros alimentos.</p>

                        <Table bordered>
                            <tbody>
                                {this.state.foods.map(food => 
                                <tr key={food._id}>
                                    <td>
                                        <img src={`./img/${food.img}`} alt={food.name}/>
                                    </td>
                                    <td>
                                        <p>{food.name}</p>
                                    </td>
                                    <td>
                                        <p>Precio: {food.price} | Stock: {food.stock} | Kcal: {food.kcal}</p>
                                    </td>
                                    <td>
                                        <p>Precio: {food.price} € | Stock disponible: {food.stock} uds.
                                        <Link className="btn btn-sm btn-outline-dark" to={`/details/${food._id}`}>Ver detalles</Link></p>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </>
                }

            </Container>
        )
    };
}


export default FoodsIndex;