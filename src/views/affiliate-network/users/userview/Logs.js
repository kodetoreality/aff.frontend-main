import React, { Component } from "react";
import { Col , Row , Button} from "reactstrap";
import { connect } from "react-redux";
import { getData } from "../../../../redux/actions/user/index";
import queryString from "query-string";
import { User } from "react-feather"
import UserToolbar from './toolbar'

class userView extends Component {

  state = {
    currentUser : {
      email : 'affiliate@gmail.com',
      username : 'affiliate',
    }
  }

  async componentDidMount() {
    await this.props.getData(queryString.parse(this.props.location.search));
    let userId = queryString.parse(this.props.location.search).user;
    let temp = this.props.dataList.allData.filter(item => {
      if(item.id === userId) return item;
      else return null;
    });
    this.setState({currentUser : temp[0]});
  }

  render() {

    return (
      <div>
        <UserToolbar select = {'Logs'} />
        <Row className = "mt-1 p-1" style = {{width : '100%' , background : '#10163a'}}>
          <Col lg='10' md='3' sm='6' xs='12'>
            {/* <p>{this.state.currentUser.email}</p>
            <p>{this.state.currentUser.username}</p> */}
          </Col>
          <Col lg='2' md='3' sm='6' xs='12' style = {{float : 'right'}}>
            <Button
              style={{float:'right' , color : 'white'}}
              className="add-new-btn ml-1"
              color="primary"
              // onClick={() => props.handleSidebar(true, true)}
              outline>
              <User size={15} />
              <span className="align-middle" style = {{color : 'white'}}> Login As </span>
            </Button>
          </Col>
        </Row>
      </div>
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