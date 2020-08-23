import React, { Component } from 'react'

class Envelope extends Component{
    render(){
        return(
            <div className="env text-center">
                <img src="img/env1.svg" />
                
                    <img style={{position:"absolute",left:0}} src="img/white1.svg" />
                
            </div>
        )
    }
}

export default Envelope;