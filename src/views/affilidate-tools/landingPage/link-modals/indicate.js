import React, { Component } from "react"
import {Form,Button, Modal, ModalHeader, ModalBody, ModalFooter,Col,Row} from "reactstrap"
import {currency} from "../../../../redux/actions/auth/currency"
import { getDataAgain } from "../../../../redux/actions/user/permission"
import {connect} from "react-redux"
import {signup} from "../../../../redux/actions/user/index"
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import {status_options} from "../../../../configs/providerconfig"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"
// let permission = [{value : "players" , label : "players"}]

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
    subscribedtosms : false,
    flag : 1
  }

  async UNSAFE_componentWillMount()
  {
    await this.props.getDataAgain();
  }

  handleregister = e =>{
    e.preventDefault();
    this.props.handleIndicateFirst(this.state.flag)

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
            Indicate Link
          </ModalHeader>
          <ModalBody className="mt-1 ml-2">
            <Radio
              label="Affiliates"
              defaultChecked={true}
              name="shopRadio"
              className="py-25"
              onClick = {() => this.setFlag(1)}
              />
            <Radio
              label="Affiliates Groups"
              defaultChecked={false}
              name="shopRadio"
              className="py-25"
              onClick = {() => this.setFlag(2)}
            />
          </ModalBody>
          <ModalFooter>
            <Row>
                <Col xs="12 justify-content-start" className = "z-index-0">
                    <Button className="account_submit_btn" color="primary"  type="submit"> Next </Button>
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
