import React from "react"
import { Row, Col,Button } from "reactstrap"
import PlayersGained from "../ui-elements/cards/statistics/PlayersGained"
import DepositReceived from "../ui-elements/cards/statistics/DepositReceived"
import OrdersReceived from "../ui-elements/cards/statistics/OrdersReceived"
import AvgSession from "../ui-elements/cards/analytics/AvgSessions"
import SupportTracker from "../ui-elements/cards/analytics/SupportTracker"
import ProductOrders from "../ui-elements/cards/analytics/ProductOrders"
import SalesStat from "../ui-elements/cards/analytics/Sales"
import ActivityTimeline from "./ActivityTimeline"
import DispatchedOrders from "./DispatchedOrders"
import "../../assets/scss/pages/dashboard-analytics.scss"

import axios from 'axios';

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

class Revenu extends React.Component {

  state = {
    header1 : [
      {name : "Pending Status" , count : 1, icon : <svg className="float-left" stroke="currentColor" fill="currentColor" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48"  height="80px" width="80px"><polygon fill="#00BCD4" points="26.9,42 17,42 17,32.1"></polygon><polygon fill="#00BCD4" points="30,6 30,26.2 19.8,36.4 22.6,39.2 34,27.8 34,6"></polygon><polygon fill="#2196F3" points="15.9,31 6,31 6,21.1"></polygon><polygon fill="#2196F3" points="20.2,14 8.8,25.4 11.6,28.2 21.8,18 41,18 41,14"></polygon><rect x="22" y="-2.9" transform="matrix(.707 -.707 .707 .707 -9.941 24)" fill="#37474F" width="4" height="53.7"></rect></svg>},
      {name : "Pending New Users" , count : 2, icon : <svg className="float-left" stroke="currentColor" fill="currentColor" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48"  height="80px" width="80px"><path fill="#673AB7" d="M40,7H8c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h5v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.7-0.4,1.4-1,1.7V41h18v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.7-0.4,1.4-1,1.7V41h5c2.2,0,4-1.8,4-4V11 C44,8.8,42.2,7,40,7z"></path><g fill="#D1C4E9"><circle cx="24" cy="18" r="4"></circle><path d="M31,28c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V28z"></path></g></svg>},
      {name : "Pending Payment Request" , count : 3, icon : <svg className="float-left" stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="80px" width="80px"><path fill="#2196F3" d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"></path><g fill="#fff"><rect x="22" y="20" width="4" height="11"></rect><circle cx="24" cy="15" r="2"></circle></g></svg>},
      {name : "New Registered Players" , count : 4, icon : <svg className="float-left" stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="80px" width="80px"><path fill="#673AB7" d="M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"></path><path fill="#311B92" d="M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"></path><path fill="#fff" d="M36,24.2c-0.1,4.8-3.1,6.9-5.3,6.7c-0.6-0.1-2.1-0.1-2.9-1.6c-0.8,1-1.8,1.6-3.1,1.6c-2.6,0-3.3-2.5-3.4-3.1 c-0.1-0.7-0.2-1.4-0.1-2.2c0.1-1,1.1-6.5,5.7-6.5c2.2,0,3.5,1.1,3.7,1.3L30,27.2c0,0.3-0.2,1.6,1.1,1.6c2.1,0,2.4-3.9,2.4-4.6 c0.1-1.2,0.3-8.2-7-8.2c-6.9,0-7.9,7.4-8,9.2c-0.5,8.5,6,8.5,7.2,8.5c1.7,0,3.7-0.7,3.9-0.8l0.4,2c-0.3,0.2-2,1.1-4.4,1.1 c-2.2,0-10.1-0.4-9.8-10.8C16.1,23.1,17.4,14,26.6,14C35.8,14,36,22.1,36,24.2z M24.1,25.5c-0.1,1,0,1.8,0.2,2.3 c0.2,0.5,0.6,0.8,1.2,0.8c0.1,0,0.3,0,0.4-0.1c0.2-0.1,0.3-0.1,0.5-0.3c0.2-0.1,0.3-0.3,0.5-0.6c0.2-0.2,0.3-0.6,0.4-1l0.5-5.4 c-0.2-0.1-0.5-0.1-0.7-0.1c-0.5,0-0.9,0.1-1.2,0.3c-0.3,0.2-0.6,0.5-0.9,0.8c-0.2,0.4-0.4,0.8-0.6,1.3S24.2,24.8,24.1,25.5z"></path></svg>},
    ],
    header2 : [
      {name : "All Banners" , count : 5, icon : <svg className="float-left" stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="80px" width="80px"><g fill="#F44336"><rect x="40" y="34" width="4" height="10"></rect><rect x="34" y="29" width="4" height="15"></rect><rect x="28" y="33" width="4" height="11"></rect><rect x="22" y="25" width="4" height="19"></rect><rect x="16" y="28" width="4" height="16"></rect><rect x="10" y="24" width="4" height="20"></rect><rect x="4" y="19" width="4" height="25"></rect></g><g fill="#D32F2F"><polygon points="34,13.2 30,17.2 20,7.2 15,12.2 7.4,4.6 4.6,7.4 15,17.8 20,12.8 30,22.8 34,18.8 40.1,24.9 42.9,22.1"></polygon><polygon points="44,26 35,26 44,17"></polygon></g></svg>},
      {name : "Last Registered" , count : 6, icon : <svg style = {{float : 'left'}} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="80px" width="80px"><path fill="#78909C" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"></path><rect x="14" y="1" fill="#AED581" width="20" height="31"></rect><g fill="#558B2F"><path d="M13,0v33h22V0H13z M33,31H15V2h18V31z"></path><path d="M34,3c0,1.7-0.3,3-2,3c-1.7,0-3-1.3-3-3s1.3-2,3-2C33.7,1,34,1.3,34,3z"></path><path d="M16,1c1.7,0,3,0.3,3,2s-1.3,3-3,3s-2-1.3-2-3S14.3,1,16,1z"></path><circle cx="24" cy="8" r="2"></circle><circle cx="24" cy="20" r="6"></circle></g><path fill="#CFD8DC" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"></path></svg>},
      {name : "Total Payable" , count : 7, icon : <svg style = {{float : 'left'}} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="80px" width="80px"><path fill="#78909C" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"></path><rect x="14" y="1" fill="#AED581" width="20" height="31"></rect><g fill="#558B2F"><path d="M13,0v33h22V0H13z M33,31H15V2h18V31z"></path><path d="M34,3c0,1.7-0.3,3-2,3c-1.7,0-3-1.3-3-3s1.3-2,3-2C33.7,1,34,1.3,34,3z"></path><path d="M16,1c1.7,0,3,0.3,3,2s-1.3,3-3,3s-2-1.3-2-3S14.3,1,16,1z"></path><circle cx="24" cy="8" r="2"></circle><circle cx="24" cy="20" r="6"></circle></g><path fill="#CFD8DC" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"></path></svg>},
      {name : "All Players" , count : 8, icon : <svg style = {{float : 'left'}} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="80px" width="80px"><path fill="#78909C" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"></path><rect x="14" y="1" fill="#AED581" width="20" height="31"></rect><g fill="#558B2F"><path d="M13,0v33h22V0H13z M33,31H15V2h18V31z"></path><path d="M34,3c0,1.7-0.3,3-2,3c-1.7,0-3-1.3-3-3s1.3-2,3-2C33.7,1,34,1.3,34,3z"></path><path d="M16,1c1.7,0,3,0.3,3,2s-1.3,3-3,3s-2-1.3-2-3S14.3,1,16,1z"></path><circle cx="24" cy="8" r="2"></circle><circle cx="24" cy="20" r="6"></circle></g><path fill="#CFD8DC" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"></path></svg>},
    ],
  }

  send(){
    axios.post("http://localhost:5000/api",{data : "data"}).then(res => {
      console.log(res.data);
    })
    // let one = "https://localhost:5000/api?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
    // let two = "https://localhost:5000/api?token=wANpEQEsMYGOwLxwXQ76Ggtt"
    // let three = "https://localhost:5000/api?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

    // const requestOne = axios.get(one);
    // const requestTwo = axios.get(two);
    // const requestThree = axios.get(three);

    // axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
    //   const responseOne = responses[0]
    //   const responseTwo = responses[1]
    //   const responesThree = responses[2]
    //   // use/access the results 
    // })).catch(errors => {
    //   // react on errors.
    // })

  }



  render() {
    return (
      <React.Fragment>
        <Button onClick = {() => this.send()}>Axios Send</Button>
        <Row>
          {this.state.header1.map((item, idx) => {
            return(
              <Col key={idx} className = "p-1 ml-1" style = {{background : '#10163a',borderRadius : '10px'}}>
                {item.icon}
                <p className="ft-size-17 mt-1">{item.name}</p>
                <p className="ft-size-30">{item.count}</p>
              </Col>
            );
          })}
        </Row>
        <Row className = "mt-1">
          {this.state.header2.map((item, idx) => {
            return(
              <Col key={idx} className = "p-1 ml-1" style = {{background : '#10163a',borderRadius : '10px'}}>
                {item.icon}
                <p className="ft-size-17 mt-1">{item.name}</p>
                <p className="ft-size-30">{item.count}</p>
              </Col>
            );
          })}
        </Row>
        <Row className="match-height mt-1">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="4">
            <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="4">
            <SalesStat
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
          </Col>
          <Col lg="4">
            <ActivityTimeline />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Revenu
