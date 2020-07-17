// to do a component
import React from "react";

class POUPOU extends React.Component{
    constructor(props){

        super(props);
        this.state = {s:"poupou", p:""};
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    render(){
        return(
            <div>
                <p>
                    {this.state.s}
                </p>
                <br/>
                <button onClick = {this.clickHandler}>
                    click me
                </button>
                <br/>
                <br/>
                <input onChange = {this.changeHandler}>
                </input>
            </div>
        );
    }

    clickHandler(){
        this.setState(state => (
            {s: "get kiss from poupou"}
        ));
    }

    changeHandler(e){
        this.setState({s: e.target.value});
    }
}

export default POUPOU;