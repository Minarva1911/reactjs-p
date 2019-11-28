import React from 'react';
const Stateless=(props)=>{
    return(
        <div>
        {/* <div>Hi This is sanvi</div>
        <p>my age is{Math.floor(Math.random ()*30)} </p> */}
        <p>Hi this is {props.name} my age is {props.age}</p>
        {props.children}
        </div>
    )
}
export default Stateless;