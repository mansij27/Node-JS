import React, {Component, useState} from 'react';

function FunState() {
    const [count, setCount]= useState(0);
    return (
        <div>
            <p> You clicked {count} </p>
            <button onClick={()=> setCount(count+1)}> Increment Count</button>
        </div>
    );
}

export default FunState;

export class ClsState extends Component{
    state={
        counter: 0
    };

    serCounter(){
        this.setState({counter: this.state.counter +1});
    }
    render(){
        return(
            <div>
                <p> You Clicked {this.state.counter} </p>
                <button onClick={()=> this.setCounter()}> Increment Count</button>
            </div>
        );
    }
}