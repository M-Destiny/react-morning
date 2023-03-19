import React, { Component } from 'react'
// q: how to call componentdidupdate on click
//a: use ref to get value from textbox and call didupdate on click
// q:compare previous and current state react after componentdidupdate 
// a: use if condition to compare previous and current state
export default class Task1 extends Component {
    constructor() {
        super();
        console.log('Constructor Called');
        this.state = {
            ApiValue: []
        }
        this.input = React.createRef();
    }
    // use if condition to compare previous and current state
    componentDidMount(prevState) {
        // call api on page load
        console.log('ComponentDidMount Called');
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    ApiValue: json

                })

            })
    }
    componentDidUpdate() {
        // console.log('ComponentDidUpdate Called');

        var cat = this.input.current.value;
        fetch('https://fakestoreapi.com/products/category/' + cat)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    ApiValue: json
                })
            })

    }
    //     componentDidUpdate(prevProps, prevState) {
    //         // console.log('ComponentDidUpdate Called');
    //         var cat = this.input.current.value;
    //         componentDidUpdate(prevProps, prevState) {
    //             if (prevState.ApiValue !== this.state.ApiValue) {
    //                 this.setState({
    //                     loading: false
    //                 })   
    //             }
    //         }

    //     }
    // }
    render() {
        return (
            <div className='container'>
                <h1>Task</h1>
                <input type="text" ref={this.input} />
                {/* onclick send data from textbox to did update */}
                {/* call didupdate on click */}
                <button onClick={() => { this.componentDidUpdate() }}>Search</button>
                <div className="row">
                    {
                        this.state.ApiValue && this.state.ApiValue.length > 0 && this.state.ApiValue.map(value =>
                            <div className='col-xl-3 border'>
                                <img src={value.image} alt="" className='img-fluid' />
                                <h1>{value.title}</h1>
                                <p>{value.price}</p>
                                <p>{value.category}</p>


                            </div>
                        )

                    }

                </div>

            </div>
        )
    }
}
