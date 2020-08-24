import React, { Component } from 'react'
import { Card ,Row,Col, Button} from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group';

function show(clicked){
    console.log(clicked)
    if (clicked==1){
        return(
            <Card className="card-style4" >  
                <Row>
                    <Col className="my-auto">
                        <h4 >Type in your location..</h4>         
                   </Col>
                </Row>   
            </Card>
        )
    } else { return( <div></div>) }
}


class Envelope extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            clicked: "",
            bool: false,
        }
        this.handleToggleSection = this.handleToggleSection.bind(this);
      };


      handleToggleSection(e) {
          const { id } = e.target;
          this.setState(() => ({
            clicked: id,
            bool: true,        
          }));
      }
    render(){

        const {clicked, bool} = this.state
        return(
            
            <div
                className="text-center"
                style={{
                marginTop: "50px",
                position: "relative",
                marginBottom: 500,
                textAlign: "center",
                }}
            >
                <div
                    style={{
                        display: "inline-block",
                        position: "relative",
                    }}
                >



                    <CSSTransition
                        in={bool}
                        timeout={1000}
                        classNames={"slide"}
                        unmountOnExit
                        // onEnter={() => this.setState({ bool: false })}
                    >
                        <div style={{ position: "absolute", top: 190, left: 0, zIndex: -1 }}>
                            <Card className="card-style4">
                                <Row>
                                <Col className="my-auto">
                                    <h4 style={{marginTop:"45px"}}>Type in your location..</h4>
                                </Col>
                                </Row>
                            </Card>
                        </div>
                    </CSSTransition>

                
              
                    <img alt="envelope" width="400" src="img/enve.svg" />
                    <div role="button"
                        onClick={() => this.setState({ bool: !bool })} 
                        style={{ position: "absolute", top: 43, left: 115 }}>
                        <h6>Choose your location...</h6>
                        <img
                            id="1"
                            onClick={this.handleToggleSection}
                            style={{cursor:"pointer"}}
                            src="img/Frame.png"
                            width="20px"
                            height="20px"
                            alt="calender"
                        />
                    </div>
                    <div style={{ position: "absolute", top: 100, left: 50 }}>
                        <img
                        src="img/event.png"
                        width="60px"
                        height="60px"
                        alt="calender"
                        />
                        <h5>EVENT</h5>
                    </div>
                    <div style={{ position: "absolute", right: 50, top: 100 }}>
                        <img
                        src="img/offer.png"
                        width="60px"
                        height="60px"
                        alt="calender"
                        />
                        <h5>OFFER</h5>
                    </div>     
                </div>
                
                <Card className="card-style5">
                    <Card.Body>
                        <Row>
                            <Col xs={4} className="text-left">
                                <img src="img/buy.png" width="120" height="120" alt="buy" />
                                <img 
                                    style={{position:"absolute", top:"-10px", left:"10px"}} 
                                    src="img/one.png" width="50" height="50" alt="one" />
                            </Col>
                            <Col xs={8} className="text-left">
                                <h6>Location  :  The Biergarten</h6>
                                <h6>Timing  :  8PM - 9PM</h6>
                                <h6>Address :  5th block Karamangala</h6>
                            </Col>
                        </Row>
                        <Row className="justify-content-center text-center">
                            <Button className="btn-style1"  size="lg">Buy one get <br/> one free</Button><Button className="btn-style2">Redeem</Button>
                        </Row>
                    </Card.Body>
                </Card>
                             
            </div>
        )
    }
}

export default Envelope;