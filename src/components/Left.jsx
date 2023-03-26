import React, { Component } from 'react'

export default class Left extends Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    categories: json
                })
            })
    }
    // <Left abc={this.state.ParentCompFunc} />
    myfunc(val) {
        console.log(val);
        this.props.abc(val)
    }
    render() {
        const Api = this.state.categories
        return (
            <div>
                <h1>Categories</h1>
                {
                    Api && Api.map(val =>
                        <div className="col-xl-3">
                            <li onClick={() => { this.myfunc(val) }}>{val}</li>

                        </div>)
                }

            </div>
        )
    }
}
