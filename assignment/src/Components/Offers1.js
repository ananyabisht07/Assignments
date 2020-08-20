import React, { Component } from 'react';
//import {Animated} from "react-animated-css";
import { Row, Col, Container, Card,} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';




function show(activeSection){

    if (activeSection == 1){
    
        return(
            <div className="move">
                <Row>
                    <Col xs={6} className="text-style my-auto">                        
                        <p>Fried Rice</p>
                        <p className="text-lightt">Corporate offer</p>
                    </Col>
                    <Col xs={6} className="text-right ">
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                    </Col>
                </Row>
            </div>
        )
            
        
    } else if (activeSection == 2){
        return(
            <div className="move">
                <Row>
                    <Col xs={6} className="text-style my-auto">                        
                        <p>Fried Rice</p>
                        <p className="text-lightt">Corporate offer</p>
                    </Col>
                    <Col xs={6} className="text-right ">
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className="text-style my-auto">                        
                        <p>Fried Rice</p>
                        <p className="text-lightt">Corporate offer</p>
                    </Col>
                    <Col xs={6} className="text-right ">
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                    </Col>
                </Row>
            </div>
        )
    } else if (activeSection == 3){
        
        return(
            <div className="move">
                <Row>
                    <Col xs={6} className="text-style my-auto">                        
                        <p>Fried Rice</p>
                        <p className="text-lightt">Corporate offer</p>
                    </Col>
                    <Col xs={6} className="text-right ">
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className="text-style my-auto">                        
                        <p>Fried Rice</p>
                        <p className="text-lightt">Corporate offer</p>
                    </Col>
                    <Col xs={6} className="text-right ">
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className="text-style my-auto">                        
                        <p>Fried Rice</p>
                        <p className="text-lightt">Corporate offer</p>
                    </Col>
                    <Col xs={6} className="text-right ">
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Offers1 extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            activeSection: 1,
            bool: false
        }
        this.handleToggleSection = this.handleToggleSection.bind(this);
      };


      handleToggleSection(e) {
          const { id } = e.target;
          this.setState(() => ({
            activeSection: id,
            bool: true
          }));
      }
    render(){
        const {activeSection, bool} = this.state
        return(
            <Container style={{marginBottom:"20em", marginTop:"10em"}}>
                <Card className="card-style3">
                    <Card.Img style={{border:"none", borderRadius:"13px"}} variant="top" src="img/2.png" />
                        <Card.Body>             
                                <Row>
                                    <Col xs={6} className="text-style my-auto">                        
                                        <p>Fried Rice</p>
                                        <p className="text-lightt">Corporate offer</p>
                                    </Col>
                                    <Col xs={6} className="text-right ">
                                        <i className="fa fa-user fa-4x" aria-hidden="true"></i>
                                    </Col>
                                </Row>
                                   
                        </Card.Body>         
                    </Card>

                    <Card className="card-style3">
                    <Card.Img style={{border:"none", borderRadius:"13px"}} variant="top" src="img/2.png" />
                        <Card.Body>      
                            <Row className="text-center ">
                                <Col id="1" onClick={this.handleToggleSection}  xs={4} className="my-auto" style={{fontWeight:"700", fontSize:"18px", cursor:"pointer"}} > BUY1 <i id="1" className="fa fa-plus fa-1x"></i> </Col>
                               
                                <Col id="2" style={{ cursor:"pointer"}}  onClick={this.handleToggleSection} xs={4} className="my-auto"><i id="2"   className="fa fa-glass fa-2x" ></i></Col>
                                
                                <Col id="3" style={{ cursor:"pointer"}} onClick={this.handleToggleSection} xs={4} className="my-auto"><i id="3"  className="fa fa-user fa-2x" ></i></Col>
                            </Row> <br/>
                            
                            
                                   
                        </Card.Body>         
                    </Card>
                    <Card>
                        <Card.Body>
                            <CSSTransition
                                in={ bool }
                                timeout={ 300 }
                                classNames="page"
                                onEnter={() => this.setState({ bool:false})}
                            >
                                {show(activeSection)}
                            </CSSTransition>
                        </Card.Body>
                    </Card>
            </Container>
        )
    }   
}

export default Offers1;