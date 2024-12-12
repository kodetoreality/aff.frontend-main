import React, { Component } from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import { getData } from "../../../../redux/actions/user/index";
import { history } from "../../../../history";
import queryString from "query-string";

class userView extends Component {

  state = {
    header : [
      {text : 'Account'},
      {text : 'Commission-Plan'},
      {text : 'Logs'},
      {text : 'Bonus-Costs'},
      {text : 'Permission'},
      {text : 'Marketing-Source'},
      {text : 'Landing-Pages'},
      {text : 'Actove-Media'},
      {text : 'Wallet-Logs'},
      {text : 'Taxes'},
      {text : 'Taxes-Logs'},
      {text : 'Carry-Over-Logs'},
    ],
    userId : ''
  }
  componentDidMount() {
    let userId = queryString.parse(window.location.search).user;
    this.setState({userId : userId});
  }
  render() {
    return (
        <Row className = "p-1" style = {{width : '100%' , background : '#10163a',marginLeft: 'inherit'}}>
            {this.state.header.map((item, idx) => {
              if(this.props.select === item.text){
                return(
                  <div key = {idx} className="ml-1 cursor-pointer pb-1 pl-1 pr-1 mt-1 clicked-btn" style ={{float : 'left' , color : 'white'}}> {item.text} </div>
                );
              }else{
                return(
                  <div onClick = {() => history.push(`${item.text}?user=${this.state.userId}`)} key = {idx} className="ml-1 cursor-pointer pb-1 pl-1 pr-1 mt-1" style ={{float : 'left' , color : 'white'}}> {item.text} </div>
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