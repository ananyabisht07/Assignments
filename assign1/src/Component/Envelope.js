import React, { Component } from "react";
import { Card, Row, Col, Button,  } from "react-bootstrap";
import {Modal,ModalHeader, ModalBody,} from 'reactstrap';
import { CSSTransition } from "react-transition-group";

function DateCard(props) {
    const { date, datePressed } = props;

    return (
        <CSSTransition in={date} timeout={1000} classNames={"slide"} unmountOnExit>
            <div style={{ position: "absolute", top: 180, left: 0, zIndex: -1 }}>
              <Card className="card-style6">
                <Row style={{ marginTop: "70px" }} className="justify-content-center">
                  <Col style={{width:"100px"}}
                    xs={5}
                    className="my-auto text-center date-selection"
                    onClick={() => datePressed("21/08/2020 ")}
                    role="button"
                  >
                    <h5 style={{ fontWeight: "700" }}>TUE 21</h5>
                    <p>TODAY</p>
                  </Col>
                  <Col   
                      xs={5}
                      className="my-auto text-center date-selection"
                      onClick={() => datePressed("22/08/2020")}
                      role="button"
                  >
                    <h5 style={{ fontWeight: "700" }}>WED 22</h5>
                    <p>TOMORROW</p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Col style={{ fontWeight: "800" }} sm={12} className="text-center">
                    <p>
                      more dates <br />
                      <i className="fa fa-angle-down fa-2x"></i>
                    </p>
                  </Col>
                </Row>
              </Card>
            </div>
        </CSSTransition>
    );
} 

function Offercard(props) {
  console.log("ppp",props)
  const { offer,} = props;

  
  return (
    <CSSTransition in={offer} timeout={1000} classNames={"slide"} unmountOnExit>
      <div style={{ position: "absolute", top: 300, left: 0, zIndex: -1 }}>
        <Card className="card-style5">
          <Card.Body>
            <Row>
              <Col xs={4} className="text-left">
                <img src="img/buy.png" width="120" height="120" alt="buy" />
                <img
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "10px",
                  }}
                  src="img/one.png"
                  width="50"
                  height="50"
                  alt="one"
                />
              </Col>
              <Col xs={8} className="text-left">
                <h6>Location : The Biergarten</h6>
                <h6>Timing : 8PM - 9PM</h6>
                <h6>Address : 5th block Karamangala</h6>
              </Col>
            </Row>
            <Row className="justify-content-center text-center">
              <Button className="btn-style1" size="lg">
                Buy one get <br /> one free{" "}
              </Button>
              <img
                style={{
                  position: "absolute",
                  left: "160px",
                  top: "145px",
                }}
                width="50px"
                height="50px"
                src="img/arrow.svg"
                alt="arrow"
              />
              <Button onClick={props.toggleModal}   className="btn-style2">Redeem</Button>
               
              <Modal isOpen={props.isModalOpen} toggleModal={props.toggleModal}>
                    <ModalHeader toggle={props.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <h1>yes</h1>
                    </ModalBody>
                </Modal>
              </Row>
          </Card.Body>
        </Card>
      </div>
    </CSSTransition>
  );
}

function Locationcard(props) {
  const { location } = props;
  return (
    <CSSTransition
      in={location}
      timeout={1000}
      classNames={"slide"}
      unmountOnExit
    >
      <div style={{ position: "absolute", top: 190, left: 0, zIndex: -1 }}>
        <Card className="card-style4">
          <Row>
            <Col className="my-auto">
              <input
                style={{
                  marginTop: "45px",
                  border: "0px",
                  fontSize: "25px",
                }}
                type="text"
                placeholder="Type in your location..."
              ></input>
            </Col>
          </Row>
        </Card>
      </div>
    </CSSTransition>
  );
}

function GetText(props) {
  const { show, date } = props;
  if (show === "date") {
    return (
      <div
        style={{
          position: "absolute",
          display: "inline-block",
          width: "100%",
          paddingTop: 28,
        }}
      >
        <div style={{ alignSelf: "center", fontWeight:"700" }}>
          {date === "" ? <p>Select a date</p> : <p>{date}</p>}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        display: "inline-block",
        width: "100%",
        paddingTop: 28,
      }}
    >
      <div style={{fontWeight:"700"}}>
        {show === "location" ? (
          <p>Finding your loaction...</p>
        ) : (
          <p>Choose your location</p>
        )}
      </div>
    </div>
  );
}

class Envelope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
      selectedDate: "",
      isModalOpen:false
    };
        this.handleToggleSection = this.handleToggleSection.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.datePressed = this.datePressed.bind(this);
  }

  datePressed(date) {
    this.setState({
      selectedDate: date,
    });
  }

  toggleModal() {
    console.log("click")
    this.setState({
        isModalOpen: !this.state.isModalOpen
    })
}

  handleToggleSection(e) {
    const id = e.target.id;
    const { show } = this.state;
    this.setState({
      show: id !== show ? id : "",
    });
  }

  render() {
    const { show, selectedDate,} = this.state;
    const above = () => {
      if (show === "location")
        return {
          id: "location",
          icon: "/img/location.svg",
        };
      else if (show === "date")
        return {
          id: "date",
          icon: "/img/Frame.png",
        };
      else
        return {
          id: "location",
          icon: "/img/location.svg",
        };
    };

    const below = (above) => {
      if (above.id === "location")
        return {
          id: "date",
          icon: "/img/Frame.png",
        };
      else if (above.id === "date")
        return {
          id: "location",
          icon: "/img/location.svg",
        };
      else
        return {
          id: "date",
          icon: "/img/Frame.png",
        };
    };

    return (
      <div
        className="text-center"
        style={{
          marginTop: "50px",
          position: "relative",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GetText
            handleToggleSection={this.handleToggleSection}
            show={show}
            date={selectedDate}
          />
          <Locationcard location={show === "location"} />

          <Offercard offer={show === "offer"} isModalOpen={this.state.isModalOpen} toggleModal={() => this.toggleModal()} />
          <Offercard offer={show === "event"} isModalOpen={this.state.isModalOpen} toggleModal={() => this.toggleModal()} />
          <DateCard date={show === "date"} datePressed={this.datePressed} />

          <img alt="envelope" width="400" src="img/enve.svg" />
          <div style={{ position: "absolute", top: 100, left: 50 }}>
            <img
              id="event"
              onClick={this.handleToggleSection}
              src="img/event.png"
              width="60px"
              height="60px"
              alt="event"
              role="button"
            />
            <h5>EVENT</h5>
          </div>
          <div style={{ position: "absolute", top: 70, left: 190 }}>
            <img
              id={above().id}
              onClick={this.handleToggleSection}
              src={above().icon}
              width="20px"
              height="20px"
              role="button"
              alt="location"
            />
            <br />
            <img
              id={below(above()).id}
              onClick={this.handleToggleSection}
              src={below(above()).icon}
              width="20px"
              height="20px"
              alt="calender"
              role="button"
              style={{
                marginTop: 40,
              }}
            />
          </div>
          <div style={{ position: "absolute", right: 50, top: 100 }}>
            <img
              id="offer"
              onClick={this.handleToggleSection}
              src="img/offer.png"
              width="60px"
              height="60px"
              alt="offer"
              role="button"
            />
            <h5>OFFER</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Envelope;