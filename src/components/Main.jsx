import React, { Component } from 'react'
import Left from './Left'
import Right from './Right'

export default class main extends Component {
    constructor() {
        super();
        this.state = {
            ParentState: "Hello"
        }
        this.ParentCompFunc = this.ParentCompFunc.bind(this);
    }
    ParentCompFunc(dataFromChild) {
        console.log('ParentCompFunc Called', dataFromChild);
        console.log(this);
        this.setState({
            parentState: dataFromChild
        })

    }
    render() {

        return (
            <div className='container'>
                <div className="row">
                    <div className="col-xl-3">
                        <Left abc={this.ParentCompFunc} />
                    </div>
                    <div className="col-xl-9"> <Right pqr={this.state.parentState} /></div>
                </div>

            </div>
        )
    }
}

