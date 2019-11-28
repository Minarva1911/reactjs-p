import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props){
        super(props);
        debugger;
        console.log('set props');
    }
    componentDidMount(){
        debugger;
        console.log('After render');
    }
    componentWillMount(){
        debugger;
        console.log('Before render');
    }
    render() {
        return (
            <div>
                Hi good morning<br/>
                welcome to qwinix technology
            </div>
        );
    }
}

export default Lifecycle;