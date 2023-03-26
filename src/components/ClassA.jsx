import React, { Component } from 'react'
import { Provider } from '../ContextApi';
import ClassB from './ClassB';


export default class ClassA extends Component {
    constructor() {
        super();
        this.state = {
            username: 'ClassA',
            userno: 0
        }
        this.x1 = React.createRef()

    }
    myfunc() {
        console.log(this.x1.current.value)
        console.log('clicked');

        this.setState({
            username: this.x1.current.value,
            userno: Math.random()
        })
    }
    render() {
        return (
            <div className='container'>
                <h1>Class A</h1>
                <input type="text" ref={this.x1} />{this.state.username}
                <button className='btn-primary btn' onClick={() => this.myfunc()}>Click me</button>
                <hr />
                <Provider value={this.state.userno}>
                    <ClassB xyz={this.state.username} />
                </Provider>
            </div>
        )
    }
}
