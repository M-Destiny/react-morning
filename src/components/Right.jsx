import React, { Component } from 'react'

export default class Right extends Component {
    constructor() {
        super();
        this.state = {
            apival: []
        }
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(val => {
                this.setState({
                    apival: val
                })
            })
    }
    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate Called');
        if (prevProps.pqr !== this.props.pqr) {
            fetch(`https://fakestoreapi.com/products/category/${this.props.pqr}`)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        apival: json
                    })
                })
        }
    }
    render() {
        const API = this.state.apival;
        return (
            <div className='row'>
                <h1> Products , {this.props.pqr}</h1>
                {
                    API && API.map(rec =>
                        <div className='col-xl-3 border p-3 m-3'>
                            <h2>{rec.price}</h2>
                            <p>{rec.title}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}
