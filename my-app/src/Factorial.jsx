// function Factorial(n) {
//     return ( <div >
//         n=5;
//         let fact=1;
//         if (n == 0 || n == 1){
//             return fact;
//         }
//         else{
//             for(var i=1; i<=n; i++){
//                 fact = fact*i;
//             }
//             return fact;
//         }
//         </div>
//     );
// }
import React, {Component} from "react";

class Factorial extends Component {
    constructor(props) {
      super(props);
        this.state = {
    //     // let v = Number(props.initVal);
    //     // this.state = { count: [v] }
            n: 0
    };
    }

    fact(n) {
        if (n === 0) return 1;
        let f = 5;
        for (let i = 1; i < n; i++) {
            f = f * i;
            console.log(f);
        }
        return f;
        
      }
    

    render() {
        return (
            <div>
                <h1>Factorial Calculator</h1>
                <input type="number" placeholder="Enter a number..." />
                <br />
                <button onClick={()=> this.fact()}> Click</button>
                <p> Factorial of the number {this.state.n} is </p>
            </div>

        );
    }
}

export default Factorial;