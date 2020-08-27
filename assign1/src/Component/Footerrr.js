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

                

                <div style={{background:"#FFF49F", marginTop:"50px",}}>
                    <Row className="justify-content-center" >
                        <Col style={{marginTop:"30px",marginBottom:"30px"}} xs={5} className="text-center">
                            <h5>USEFUL LINKS</h5>
                            <p>Our locations<br/>Our Office<br/>Report a problem<br/>Customer support</p>
                        </Col>
                        <Col xs={5} style={{marginTop:"30px",marginBottom:"30px"}} className="text-center">
                            <h5>CONTACT US</h5>
                            <p>admin@rentbaaz.com<br/>+91 753 00 00 246</p>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a> &nbsp;
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a> &nbsp;
                            <a className="btn btn-social-icon btn-twitter" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                            

                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Footerrr;