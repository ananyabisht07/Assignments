import React, { Component } from 'react'
import { Card ,Row,Col, Button,} from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group';

function show(clicked){
    
    if (clicked===10){
        return(
            <h6>Choose your location...</h6>
        )
    }else if (clicked===1){
        return(
            <h6>Finding your location...</h6>
        )
    } else if(clicked===5){
        return(
            <p style={{fontWeight:"700"}} >21/08/2020 <br/>TODAY</p>
        )
    } else if(clicked===6){
        return(
            <p style={{fontWeight:"700"}}>22/08/2020 <br/>TOMORROW</p>
        )
    } else if(clicked===4){
        return(
            <h6 style={{fontWeight:"700"}}>Select date</h6>
        )
    }
}

class Envelope extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            clicked: 10,
            bool1: false,
            bool2: false,
            bool3: false,
            bool4: false,
            setText:"",
            btn1:"",
            btn2:"",
            topp:"40px",
            leftt:"115px",
            imgSrc:"img/location.svg"
        }
        this.handleToggleSection = this.handleToggleSection.bind(this);
      };


    handleToggleSection(e) {
        const { id } = e.target;

        if (id ==1){
            this.setState(() => ({      
                bool1:  true,    
                bool2:  false,
                bool3:  false,
                bool4:  false,
                clicked:  1,
                imgSrc:"img/location.svg"
            })); 
        } else if (id == 2){
            this.setState(() => ({
                bool2: true, 
                bool1: false,
                bool3: false,
                bool4: false,
                    
            }));
        } else if (id == 3){
            this.setState(() => ({
                bool3: true, 
                bool1: false,
                bool2: false,
                bool4: false       
            }));
        } else if (id == 4){
            this.setState(() => ({
                bool3: false, 
                bool1: false,
                bool2: false,
                bool4: true,
                clicked: 4,
                leftt: "150px" ,
                imgSrc:"img/Frame.png"     
            }));
        } 
        
        if(id==5){
            console.log(id)
            this.setState(() => ({
                clicked: 5,
                topp:"18px", 
                leftt: "154px",   
                bool4:false
            }));
        }else if(id == 6){
            console.log(id)
            this.setState(() => ({
                clicked: 6,
                topp:"18px", 
                bool4:false,
                leftt: "154px",   
            }));
        }
    }
    render(){

        const {clicked,bool1,bool2,bool3,bool4,imgSrc,topp,leftt} = this.state

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
                        in={bool1}
                        timeout={1000}
                        classNames={"slide"}
                        unmountOnExit
                    >
                        <div style={{ position: "absolute", top: 190, left: 0, zIndex: -1 }}>
                            <Card className="card-style4">
                                <Row>
                                <Col className="my-auto">
                                    <input style={{marginTop:"45px",border:"0px", fontSize:"25px"}} type="text"   placeholder="Type in your location..."></input>
                                </Col>
                                </Row>
                            </Card>
                        </div>
                    </CSSTransition>


                    <CSSTransition
                        in={bool2}
                        timeout={1000}
                        classNames={"slide"}
                        unmountOnExit
                    >
                        <div style={{ position: "absolute", top: 300, left: 0, zIndex: -1 }}>
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
                                        <Button className="btn-style1"  size="lg">Buy one get <br/> one free </Button>
                                        <img style={{position:"absolute", left:"160px",top:"145px"}} width="50px" height="50px" src="img/arrow.svg" alt="arrow" />
                                        <Button className="btn-style2">Redeem</Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </CSSTransition>



                    <CSSTransition
                        in={bool3}
                        timeout={1000}
                        classNames={"slide"}
                        unmountOnExit
                    >
                        <div style={{ position: "absolute", top: 300, left: 0, zIndex: -1 }}>
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
                                        <Button className="btn-style1"  size="lg">Buy one get <br/> one free </Button>
                                        <img style={{position:"absolute", left:"160px",top:"145px"}} width="50px" height="50px" src="img/arrow.svg" alt="arrow" />
                                        <Button className="btn-style2">Redeem</Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </CSSTransition>


                    <CSSTransition
                        in={bool4}
                        timeout={1000}
                        classNames={"slide"}
                        unmountOnExit
                    >
                        <div style={{ position: "absolute", top: 180, left: 0, zIndex: -1 }}>
                            <Card className="card-style6">
                                <Row style={{marginTop:"70px"}} className="justify-content-center">
                                    <Col xs={6}  className="my-auto text-center">
                                        <Button id="5" onClick={this.handleToggleSection} className="date-selection" ><h5 style={{fontWeight:"700"}}>TUE 21</h5><p>TODAY</p></Button>
                                    </Col>
                                    <Col xs={6}  className="my-auto text-center">
                                        <Button id="6" onClick={this.handleToggleSection} className="date-selection"><h5 style={{fontWeight:"700"}}>WED 22</h5><p>TOMORROW</p></Button>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"10px"}}><Col style={{fontWeight:"800"}} sm={12} className="text-center"><p >more dates <br/> <i className="fa fa-angle-down fa-2x"></i></p></Col></Row>                
                            </Card>  
                        </div>
                    </CSSTransition>
              

                    <img alt="envelope" width="400" src="img/enve.svg" />

                    <div role="button"  
                        style={{ 
                            position: "absolute", 
                            top:"40px" , 
                            left:"115px" }}>
                            {show(clicked)}
                        <img
                            id="1"
                            onClick={this.handleToggleSection}
                            style={{cursor:"pointer"}}
                            src={imgSrc}
                            width="20px"
                            height="20px"
                            alt="calender"
                        />
                    </div>

                    

                    <div  
                        style={{ position: "absolute", top: 100, left: 50 }}>
                        <img
                            id="2"
                            onClick={this.handleToggleSection}
                            src="img/event.png"
                            width="60px"
                            height="60px"
                            alt="calender"
                        />
                        <h5>EVENT</h5>
                    </div>

                    <div role="button"  
                        style={{ position: "absolute", top: 140, right: 190 }}>
                        <img
                            id="4"
                            onClick={this.handleToggleSection}
                            style={{cursor:"pointer"}}
                            src="img/Frame.png"
                            width="20px"
                            height="20px"
                            alt="calender"
                        />
                    </div>

                    <div 
                        style={{ position: "absolute", right: 50, top: 100 }}>
                        <img
                            id="3"
                            onClick={this.handleToggleSection}
                            src="img/offer.png"
                            width="60px"
                            height="60px"
                            alt="calender"
                        />
                        <h5>OFFER</h5>
                    </div>     
                </div>
                
                              
            </div>
        )
    }
}

export default Envelope;