// we will see how to use componentdidmount its like use state in functional component
// if we dont use componentdidmount it will be like using use state without empty square brackets and will becmome  infinite loop and will crash the app
import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';

export default class Comp2 extends Component {
    constructor() {
        super();
        console.log('Constructor Called');
        this.state = {
            name: 'Rajesh',
            apiValue: []

        }
    }
    componentDidMount() {
        // call api on page load
        console.log('ComponentDidMount Called');
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    apiValue: json

                })

            })
    }
    myfunc() {
        this.setState({
            name: 'Rajesh Kumar'
        })
    }
    render() {
        console.log('Render Called');
        console.log(this.state.apiValue);
        const ans = this.state.apiValue;
        return (
            <div>Comp2
                <button onClick={() => { this.myfunc() }}>Click Me</button>

                <Container>
                    <Row>
                        {
                            ans && ans.length > 0 && ans.map(value =>

                                <div className='col-xl-3 border p-5'>

                                    <h1>{value.price}</h1>
                                </div>



                            )

                        }

                    </Row>

                </Container>
            </div>
        )
    }
}
