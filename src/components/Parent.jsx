import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor() {
        super();
        this.state = {
            apicat: [],
            Categoryid: 1
        }
    }
    componentDidMount() {
        fetch('https://api.escuelajs.co/api/v1/categories')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    apicat: json
                })
            })
    }
    myfunc(catid) {
        console.log(catid);
        this.setState({
            Categoryid: catid
        })
    }
    render() {
        const CatApi = this.state.apicat

        return (
            <div className='container'>
                <h1>Parent</h1>
                <select onChange={(ev) => { this.myfunc(ev.target.value) }}>
                    {
                        CatApi && CatApi.map(val => {
                            return <option value={val.id}>{val.name}</option>
                        })
                    }
                </select>
                <Child xyz={this.state.Categoryid} />
            </div>
        )
    }
}
