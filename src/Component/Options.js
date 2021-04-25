import React, { Component } from 'react'

export default class Options extends Component {
    constructor(){
        super();
        this.state = {
            toggle:true,
            content:"Click button to see More | Less",
            button :"Read More"
        };
    }
    change = () => {
        if(this.state.toggle){
            this.setState({
                toggle:false,
                content:"Updated content...!! Click button to see Less",
                button:"Read Less"
            });
        }
        else{
            this.setState({
                toggle:true,
                content:"Click button to see More | Less",
                button :"Read More"
            });
        }
    }
    render() {
        return (
            <div>
                <h1>Ques-2</h1>
                <hr/>
                <h2>Welcome to BetaLabs...!!</h2>
                <h3>{this.state.content}</h3>
                <button className="btn" onClick={this.change}>{this.state.button}</button>
            </div>
        )
    }
}
