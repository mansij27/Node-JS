import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        if (props.initVal != null) {
            let v = Number(props.initVal);
            this.state = { count: [v] }
        } else {
            this.state = { count: 0 }
        }
    }

    increment() {
        this.setState({count: Number(this.state.count) + 2 })
    }

    render() {
        return ( 
            <div className="CounterSec">
                <div> counter : {this.state.count} 
            </div>
            <button onClick={()=> this.increment()}> Increment </button>
            </div>
        );
    }
}

export default Counter;