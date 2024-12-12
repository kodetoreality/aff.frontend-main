import React, { Component } from "react"
import {Form,Button, Modal, ModalHeader, ModalBody, ModalFooter,Col,Row, FormGroup,Input} from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import {currency} from "../../../../redux/actions/auth/currency"
import { getDataAgain } from "../../../../redux/actions/user/permission"
import {connect} from "react-redux"
import {signup} from "../../../../redux/actions/user/index"
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import {status_options} from "../../../../configs/providerconfig"

class DataListSidebar extends Component {
  state = {
    username : "",
    email : "",
    password : "",
    currency : currency[0].value,
    permission : "",
    promo_code : "",
    status : status_options[0].value,
    created : this.props.admin_info.email,
    allselect : false,
    Terms : false,
    userData : [
      { email : "admin1@gmail.com" , state : false},
      { email : "admin2@gmail.com" , state : false},
      { email : "admin3@gmail.com" , state : false},
      { email : "admin4@gmail.com" , state : false},
      { email : "admin5@gmail.com" , state : false},
      { email : "admin6@gmail.com" , state : false},
      { email : "admin7@gmail.com" , state : false},
      { email : "admin8@gmail.com" , state : false},
      { email : "admin9@gmail.com" , state : false},
      { email : "admin10@gmail.com" , state : false},
      { email : "admin11@gmail.com" , state : false},
    ],
    selected : []
  }

  async UNSAFE_componentWillMount()
  {
    await this.props.getDataAgain();
  }

  handleregister = e =>{
    e.preventDefault();
    // this.props.handleIndicateFirst(this.state.flag)

    // var row = this.state;

    // if(!row.permission){
    //   row.permission = permission[0].value
    // }

    // this.props.signup(row);
    // this.props.handleSidebar();
    
    // this.setState({
    //   username : "",
    //   email : "",
    //   password : "",
    //   currency : currency[0].value,
    //   permission : "",
    //   promo_code : "",
    //   status : status_options[0].value,
    //   created : this.props.admin_info.email,
    // })
  }

  toggleModal = () => {
    this.props.handleIndicate()
  }

  setFlag = (flag) => {
    this.setState({flag : flag})
  }

  userDataSelect = (data) => {
    if(data === "all"){
      let allselect = this.state.allselect;
      let userData = this.state.userData;

      if(!allselect){
        for(let i = 0 ; i < userData.length ; i ++){
          userData[i].state = true;
        }
      }else{
        for(let i = 0 ; i < userData.length ; i ++){
          userData[i].state = false;
        }
      }
      this.setState({userData : userData , allselect : !allselect});
    }
    else{
      let userData = this.state.userData;
      for(let i = 0 ; i < userData.length ; i ++){
        if(userData[i].email === data)
        userData[i].state = !userData[i].state;
      }
      this.setState({userData : userData});
    }
  }

  render() {
    let { handleIndicate } = this.props;
    // if(this.props.permission)
    // {
    //   let temp_permission = [];
    //   for(var i = 0 ; i < this.props.permission.length ; i ++)
    //   {
    //     let temp = {};
    //     if(this.props.permission[i].title !== "Players")
    //     {
    //       temp.value = this.props.permission[i].title;
    //       temp.label = this.props.permission[i].title;
    //       temp_permission.push(temp);
    //     }
    //   }
    //   permission = temp_permission;
    // }
    return (
      <Modal isOpen={this.props.show} toggle={this.toggleModal} className="modal-dialog-centered modal-mg">
        <style dangerouslySetInnerHTML={{__html: `
          .form-control-position {
            z-index: 0 !important;
          }
          .select__option:hover{
            background : #1fae73 !important;
          }
          .select__option--is-focused{
            background : #1fae73 !important;
        }`}}/>
        <Form className="" action="#" onSubmit={this.handleregister}>
          <ModalHeader toggle={this.toggleModal} className="bg-primary">
            Indicate Users
          </ModalHeader>
          <ModalBody className="mt-1 ml-2">
            <Row>
              <Col>
                <Checkbox
                  color="primary"
                  icon={<Check className="vx-icon" size={16} />}
                  label="Select All"
                  defaultChecked={this.state.Terms}
                  onChange={() => this.userDataSelect("all")}
                  className="float-left w-100 mb-1"
                />
              </Col>
              <Col>
                <Checkbox
                  color="primary"
                  icon={<Check className="vx-icon" size={16} />}
                  label="Published to network"
                  defaultChecked={this.state.Terms}
                  onChange={() => this.setState({Terms : !this.state.Terms})}
                  className="float-left w-100 mb-1"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Input type="text"  placeholder="Search" onChange={e => console.log("e.target.value,ALL")} />
                </FormGroup>
              </Col>
            </Row>
            <Row className="pr-1">
              <Col style = {{maxHeight : '300px' , overflowY : 'scroll'}}>
                {this.state.userData.map((item, idx) => {
                  return(
                    <Checkbox
                      key = {idx}
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label={item.email}
                      checked={item.state}
                      onChange={() => this.userDataSelect(item.email)}
                      className="float-left w-100 mb-1"
                    />
                  );
                })}
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Row>
              <Col xs="12 justify-content-start" className = "z-index-0">
                <Button className="account_submit_btn" color="primary"  type="submit"> Submit </Button>
                <Button className="ml-1 account_cancel_btn" color="danger" onClick={() => handleIndicate()}> Cancel </Button>
              </Col>
            </Row>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    admin_info: state.auth.login.values,
    permission : state.userslist.permission.allData
  }
}

export default connect(mapStateToProps,{signup,getDataAgain})(DataListSidebar)
