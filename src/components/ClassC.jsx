import React, { Component } from 'react'
import { Consumer } from '../ContextApi';

export default class ClassC extends Component {
    render() {
        return (
            <div>
                <h1>Class C</h1>
                <h3>{this.props.abc}</h3>
                <hr />
                <Consumer>
                    {
                        (data) => {
                            return <h1>{data}</h1>
                        }

                    }
                </Consumer>
            </div>
        )
    }
}
