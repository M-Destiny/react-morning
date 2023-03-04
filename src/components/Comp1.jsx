// we can use rcc to create class component
// we can use rce to create class component with export default
// interview imp question
// in class component we must use this for everything  like this.props, this.state, this.setState
// to use state in class component we must write constructor
import React from 'react';

class Comp1 extends React.Component {
    // Mustwrite constructor to use state in class component 
    // must write super to use this keyword in constructor
    constructor() {
        super();
        this.state = {
            name: 'Rajesh',
            age: 30,
            role: ['Developer', 'Tester', 'Manager'],
            info: { place: 'Bangalore' }
        }
        this.uname = React.createRef();
        this.uage = React.createRef();


    }
    myfunc() {
        this.setState({
            name: this.uname.current.value,
            age: this.uage.current.value,
            role: [...this.state.role, 'Designer'],
            // info: [...this.state.info, { city: 'Mumbai' }],
        })
        console.log(this.uname);
        console.log(this.uname.current.value);
        console.log(this.uage);
        console.log(this.uage.current.value);

    }
    render() {
        return (
            <div>
                <h1>Comp1</h1>
                <p>
                    Props Data : {this.props.data}
                </p>
                <p>
                    State Data :
                    <p>{this.state.name}</p>
                    <p>{this.state.age}</p>
                    <p>{this.state.role[0]}</p>
                    <p>{this.state.role[1]}</p>
                    <p>{this.state.role[2]}</p>
                    <p>{this.state.role[3]}</p>
                    <p>{this.state.info.place}</p>
                    {/* <p>{this.state.info.city}</p> */}


                    <input type="text" ref={this.uname} /> <br />
                    <input type="text" ref={this.uage} /> <br />

                </p>
                <p>
                    <button onClick={() => { this.myfunc() }} >Click ME</button>
                </p>
            </div>

        )
    }
}
export default Comp1;