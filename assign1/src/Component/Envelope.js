import React, { Component } from 'react'
import { Row, Col, Image, Card } from 'react-bootstrap'

class Envelope extends Component{
    render(){
        return(
            <div className="text-center" style={{width: 'auto', marginTop:"50px" }}>
                <img
                    alt="envelope"
                    width="400"
                    style={{backgroundSize:"cover",backgroundPosition:"center"}}
                    src="img/enve.svg" />
                
                <h6 style={{position:"absolute", left:"32%", top:"173%"}}>Choose your location..</h6>
                <img style={{position:"absolute", left:"47%", top:"177%"}} src="img/frame.png" width="20px" height="20px"  alt="calender"/>
                <img style={{position:"absolute", left:"20%", top:"180%"}} src="img/offer.png" width="60px" height="60px"  alt="calender"/>
                <img style={{position:"absolute", left:"65%", top:"180%"}} src="img/event.png" width="60px" height="60px"  alt="calender"/>
                <h5 style={{position:"absolute", left:"21%", top:"189%"}}>EVENT</h5>
                <h5 style={{position:"absolute", left:"65%", top:"189%"}}>OFFER</h5>
                <Card >
                    <Card.Body>
                        <h4>Type in your location</h4>
                    </Card.Body>
                </Card>
                
                
            </div>
        )
    }
}

export default Envelope;