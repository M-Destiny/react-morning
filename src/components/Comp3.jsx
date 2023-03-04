import React, { Component } from 'react'

export default class Comp3 extends Component {
    constructor() {
        super();
        console.log('Constructor Called');
        this.state = {
            name: 'Rajesh',
            age: 30
        }
    }

    componentDidMount() {
        console.log('ComponentDidMount Called');
    }
    componentDidUpdate() {
        console.log('ComponentDidUpdate Called');
    }
    componentWillUnmount() {
        console.log('ComponentWillUnmount Called');
    }
    render() {
        return (
            <div> <h1>Comp3</h1>
                <button onClick={() => { this.setState({ name: 'Heko', age: Math.random() }) }}>Enter</button>
                <p>
                    {this.state.name}
                </p>
                <p>
                    {this.state.age}
                </p>
            </div>
        )
    }
}
