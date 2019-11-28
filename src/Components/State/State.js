import React, { Component } from 'react';
import Stateless from '../Stateless/Stateless';

class State extends Component {
    state={
        person:[{
            name:"Minarva",age:"22",
        }]
    }
    buttonClickHandler=()=>{
        // console.log('clicked');
    this.setState({
        person:[{name:"Mohan",age:"25"}]
    })
    }
    render() {
        return (
            <div>
                <button onClick={this.buttonClickHandler}>click here</button>
               <p>I am {this.state.person[0].name} my age is {this.state.person[0].age} </p>
               <p>I am {this.state.person[1].name} my age is {this.state.person[1].age} </p> */}
               <Stateless name='Manvik' age='22'>Hello</Stateless>
               <Stateless name='chalsiya' age='15'></Stateless>
            </div>
        );
    }
}

export default State;