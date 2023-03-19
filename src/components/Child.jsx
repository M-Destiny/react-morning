import React, { Component } from 'react'

export default class Child extends Component {
    constructor() {
        super();
        this.state = {
            api: []
        }
    }
    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate Called');
        if (prevProps.xyz !== this.props.xyz) {
            fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${this.props.xyz}`)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        api: json
                    })
                })
        }
    }
    //     fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${this.props.xyz}`)
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 api: json
    //             })
    //         })
    // }
    render() {
        const CatProps = this.props.xyz;
        console.log(CatProps);
        const ApiValue = this.state.api;
        console.log(ApiValue);
        return (
            <div>
                <h1>Child</h1>
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
