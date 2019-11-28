import React, { Component } from 'react';
import SetstateF from '../SetstateF/SetstateF';

class SetstateC extends Component {
    state={
        users:[
            {name:"Minarva",age:22},
            {name:"Milan",age:25},
            {name:"Mohan",age:35},
            {name:"Meena",age:30},
        ],title:"user list"
    }
    buttonClickHandler=()=>{
        const newState =this.state.users.map((user)=>{
            const tempuser = user;
            tempuser.age -=10;
            return tempuser;
        });
        console.log(newState);
        this.setState({
            newState
        });
    }
    render() {
        return (
            <div>
               <button onClick ={this.buttonClickHandler}>clickhere</button> 
               <h1>{this.state.title}</h1>
                {
                this.state.users.map((user)=>{
                    return <SetstateF age={user.age} name={user.name}></SetstateF>
                })
            }
            </div>
        );
    }
}

export default SetstateC;
