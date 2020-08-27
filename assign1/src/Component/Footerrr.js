import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class Footerrr extends Component{
    render(){
        return(
            <div className="justify-content-center" style={{marginBottom:"100px"}}>
                <div className="bg-img">
                
                </div>
                <div style={{marginLeft:"70px", marginRight:"70px"}}>
                    <h3>Exciting places around you</h3><br/>
                    <p>Experience the rich pub culture in a city that
                    doesn't sleep and love to call our home.</p>
                </div>

                <div style={{background:"#FFF49F", marginTop:"50px",marginRight:"20px",marginLeft:"20px"}}>
                    <Row >
                        <Col style={{marginTop:"30px",marginBottom:"30px"}} xs={6} className="text-center">
                            <h5>USEFUL LINKS</h5>
                            <p>Our locations<br/>Our Office<br/>Report a problem<br/>Customer support</p>
                        </Col>
                        <Col xs={6} style={{marginTop:"30px",marginBottom:"30px"}} className="text-center">
                            <h5>CONTACT US</h5>
                            <p>admin@rentbaaz.com<br/>+91 753 00 00 246</p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Footerrr;