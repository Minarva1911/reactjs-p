import React, { Component } from 'react';

class Eventbindarrow extends Component {
    state={
        name:'Minarva'
    }
    changename=(newname)=>{
        this.setState({
            name:newname
        })
    }
    changenamefrominput=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    render() {
        return (
            <div>
               <input type="text" onChange={this.changenamefrominput} value={this.state.name} ></input>
                <button onClick={this.changename.bind(this, "Milan")}>change using bind</button>
                <div>{this.state.name}</div> 
            </div>
        );
    }
}

export default Eventbindarrow;