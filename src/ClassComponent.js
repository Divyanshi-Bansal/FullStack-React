import React, { Component } from 'react' //rcc

 class ClassComponent extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const styling = {
            backgroundColor: "lightgreen",
            color: "darkyellow",
            textAlign:"center",
            margin:"20px",
            padding:"40px",
            width:"500px"
          }
        return (
            <div style={styling}>
                <h1>{this.props.heading}</h1>
                <p><span style={{fontWeight:"bold"}}>Created By:</span> <span style={{fontSize:"25px",color:"red"}}>{this.props.name}</span></p>
            </div>
        )
    }
}
export default ClassComponent;