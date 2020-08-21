import React, { Component } from 'react';
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


class Offer extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            activeSection: 1,
            bool: false,
            selected:"buy"
        }
        this.handleToggleSection = this.handleToggleSection.bind(this);
      };


      handleToggleSection(e,val) {
          const { id } = e.target;
          this.setState(() => ({
            activeSection: id,
            bool: true,
            selected: val
          }));
      }
    render(){
        const {activeSection, bool,selected} = this.state
        
        return(
            <Container style={{marginBottom:"20em", marginTop:"10em"}}>
                

                    <Card className="card-style3">
                         <Card.Img style={{border:"none", borderRadius:"13px"}} variant="top" src="img/2.png" />
                        <Card.Body>      
                            <Row className="text-center ">
                                <Col id="1" onClick={(e) => this.handleToggleSection(e,"buy")}   xs={4} className={this.state.selected == "buy"? "my-auto buy" : "my-auto"} style={{fontWeight:"700", fontSize:"18px", cursor:"pointer"}} >
                                    BUY1 <i id="1" className="fa fa-plus fa-1x"></i> 
                                    <div className={this.state.selected == "buy"? "text-center linee" : "text-center"}></div>
                                </Col>
                               
                                <Col id="2" style={{ cursor:"pointer"}}  onClick={(e) => this.handleToggleSection(e,"drinks")} xs={4} className={this.state.selected == "drinks"? "my-auto buy" : "my-auto"}>
                                    <i id="2"   className="fa fa-glass fa-2x" ></i>
                                    <div className={this.state.selected == "drinks"? "text-center linee" : "text-center"}></div>
                                </Col>
                                
                                <Col id="3" style={{ cursor:"pointer"}} onClick={(e) => this.handleToggleSection(e,"user")} xs={4} className={this.state.selected == "user"? "my-auto buy" : "my-auto"}>
                                    <i id="3"  className="fa fa-user fa-2x" ></i>
                                    <div className={this.state.selected == "user"? "text-center linee" : "text-center"}></div>
                                    
                                </Col>
                            </Row> <br/>
                            
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

                    <Card className="card-style3" style={{marginTop:"3em"}}>
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

                    
                    <Card className="card-style3" style={{marginTop:"3em"}}>
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
            </Container>
        )
    }   
}

export default Offer;