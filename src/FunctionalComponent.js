import React from 'react' //rfce

function FunctionalComponent(props) {
    const styling = {
        backgroundColor: "lightgreen",
        color: "darkyellow",
        textAlign:"center",
        margin:"20px",
        padding:"40px",
        width:"500px"
      }
    const p = {
        fontsize: "40px"
    }
    return (
        <div style={styling}>
        
            <h1>This is the Functional Component</h1>
            <p>This is created by : <span style={{color:"red",fontWeight:"700"}}>{props.name}</span></p>
        </div>
    )
}

export default FunctionalComponent
// style = {{}}