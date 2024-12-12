// import React from "react"
// import { Row,} from "reactstrap"
// class Gamelist extends React.Component {
  
  //   render() {
    //     return (
      //       <React.Fragment>
      //           <Row>
      //             <img style={{width:"100%",height : "100%"}} alt="comming soon" src="https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/9432a2ad-f01d-4a3d-ae53-370c37e15e62/2018/01/16/4b638361-3888-4e77-b1ea-af956fa98d7f.png" />
      //           </Row>
      //       </React.Fragment>
      //     )
      //   }
      // }
      
      // export default Gamelist
      
      
import React from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
// import errorImg from "../../assets/img/ComingSoon.jpg"
import errorImg from "../../assets/img/pages/404.png"

class Error404 extends React.Component {
  state = {
    hour : new Date().getHours(),
    minute : new Date().getMinutes(),
    second : new Date().getSeconds(),
    point : ":",
    flag : true
  }

  UNSAFE_componentWillMount()
  {
    this.time();
  }
  
  time = () => {
    setInterval(() => {
      let dt = new Date();

      let hour = dt.getHours();
      let minute = dt.getMinutes();
      let second = dt.getSeconds();
      let point = ":";

      point = this.state.flag ? ":" : "";
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;

      this.setState({hour : hour , minute : minute , second : second , point : point , flag : !this.state.flag});
    }, 1000);
  }

  render() {
    return (
      <Row className="m-0 commingsoon_first">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center" style = {{marginTop : '10vh'}}>
              <img
                src={errorImg}
                alt="ErrorImg"
                className="img-fluid align-self-center commingsoon_img"
              />
              <h1 className="font-large-2 coomingsoon_h1" style = {{color : 'white' , fontWeight : 'bold'}}> We are coming soon !</h1>
              {/* <p className="pt-2 mb-0 comingsoon_p20">
                 Hello EveryOne. Thank you for your visit.
              </p>
              <p className="pt-2 mb-0 comingsoon_p16">
                Now We are doing some modify website continue.
                This page will appear as soon.
              </p>
              <p className="pb-2 comingsoon_p16">
                Current page not exist in website yet. Please wait.
              </p> */}
              <Row className = "commingsoon_second">
                <Col className = "commingsoon_col">{this.state.hour}</Col>
                <Col className = "commingsoon_col"> {this.state.point} </Col>
                <Col className = "commingsoon_col">{this.state.minute}</Col>
                <Col className = "commingsoon_col"> {this.state.point} </Col>
                <Col className = "commingsoon_col">{this.state.second}</Col>
              </Row>
              {/* <Button.Ripple
                tag="a"
                href="/"
                color="primary"
                size="lg"
                className="mt-2"
              >
                Back to Home
              </Button.Ripple>
              <p className="pb-2 comingsoon_last">
                Copyright 2020 by Ehor.Ru, All right reserved.
              </p> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Error404
