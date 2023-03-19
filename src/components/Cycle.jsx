import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class Cycle extends Component {
    constructor() {
        console.log('Constructor called ', 1);
        super();
        this.state = {
            name: 'Rajesh',
            place: ['Bangalore', 'Mumbai', 'Chennai'],
            api: [],
            catid: ''

        }
    }
    componentDidMount() {
        console.log('Didmount called ', 3)
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    api: json
                })
            })
        document.body.addEventListener('mouseover', this.myfunc3)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Didupdate called ', 4)
        console.log(prevState);
        if (this.state.catid !== prevState.catid) {
            fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${this.state.catid}`)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        api: json
                    })
                })
        }


    }
    componentWillUnmount() {
        // If we dont call this method then it will call again and again on diffrent pages aswell this is basically cleanup code
        console.log('component Did unmount called', 5)
        document.body.removeEventListener('mouseover', this.myfunc3)

    }
    myfunc() {
        console.log('Onclick called');
        this.setState({
            name: 'Rajesh kumar',
            place: [...this.state.place, 'Delhi'],
        })
    }
    myfunc1(ev) {
        console.log(ev.target.value);
        this.setState({
            catid: ev.target.value
        })
    }
    myfunc3() {
        console.log(Math.random());
    }
    render() {
        console.log("render called", 2);
        const StateValue = this.state;
        const StateProps = this.props;
        const ApiValue = this.state.api;
        console.log(ApiValue);


        return (
            <div className='container'>
                <h1>Cycle</h1>
                <Button onClick={() => this.myfunc()}> Click Me</Button>
                <hr />
                <p>Name: {StateValue.name}</p>
                <ul>
                    {
                        StateValue.place && StateValue.place.map(val =>
                            <li>{val}</li>)
                    }
                </ul>
                <p>Age: {StateProps.age}</p>
                <hr />

                <select onChange={(ev) => { this.myfunc1(ev) }}>
                    <option value='1'>Clothes</option>
                    <option value='2'>Electronics</option>
                    <option value='3'>Furniture</option>
                    <option value='4'>Shoes</option>
                    <option value='5'>Others</option>
                </select>
                <hr />
                <div className="row">
                    {
                        ApiValue && ApiValue.map(val =>
                            <div className="col-xl-3 text-center border-1 p-3">
                                <div className="h1">{val.title}</div>
                                <p>{val.price}</p>

                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
