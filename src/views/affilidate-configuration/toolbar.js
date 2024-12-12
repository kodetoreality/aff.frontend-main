import React, { Component } from "react";
import { Row , Col} from "reactstrap";
import { connect } from "react-redux";
import { getData } from "../../redux/actions/user/index";
import { history } from "../../history";
import queryString from "query-string";

class userView extends Component {

  state = {
    header : [
      {text : 'Products'},
      {text : 'Language'},
      {text : 'Currency'},
      {text : 'CommissionPlan'},
      {text : 'ContributionCost'},
      {text : 'Social'},
      {text : 'MailTemplate'},
      {text : 'DomainName'},
      {text : 'PaymentMethod'},
      {text : 'Permission'},
      {text : 'MetaTags'},
    ],
    userId : ''
  }

  componentDidMount() {
    let userId = queryString.parse(window.location.search).user;
    this.setState({userId : userId});
  }
  render() {
    return (
        <Row className = "mb-1 p-1" style = {{width : '100%' , background : '#10163a',marginLeft: 'inherit', borderRadius : "10px"}}>
            {this.state.header.map((item, idx) => {
              if(this.props.select === item.text){
                return(
                  <Col lg="10" md="10" key = {idx} className="ml-1 mt-2 cursor-pointer pb-1 pl-1 pr-1 mt-1 clicked-btn" style ={{color : 'white'}}>
                   {item.text} 
                  </Col>
                );
              }else{
                return(
                  <Col lg="10" md="10" key = {idx} className="ml-1 mt-2 cursor-pointer pb-1 pl-1 pr-1 mt-1" style ={{color : 'white'}} onClick={()=>history.push( item.text)}> {item.text} </Col>
                  );
                }
              })}
        </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataList: state.userslist.users,
    admin_info: state.auth.login.values,
  }
}

export default connect(mapStateToProps, {
    getData,
})(userView)