import React, { Component } from 'react'
import ClassC from './ClassC'

export default class ClassB extends Component {
    render() {
        return (
            <div>
                <h1>Class B</h1>
                <h3>{this.props.xyz}</h3>
                <hr />
                <ClassC abc = {this.props.xyz}/>
            </div>
        )
    }
}
