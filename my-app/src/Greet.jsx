import React from "react";

class Greetings extends React.Component {
    state = {
        msg: "World"
    }
    UpdateMsg() {
        if (this.state.msg == "World") {
            this.setState({ msg: "Hello Hi" });
        } else {
            this.setState({ msg: "World" })
        }
    }

    render() {
        return (
            <div>
                {this.state.msg}
                <button onClick={()=> this.UpdateMsg()}> Update msg</button>
            </div>
        )

    }
}

export default Greetings;