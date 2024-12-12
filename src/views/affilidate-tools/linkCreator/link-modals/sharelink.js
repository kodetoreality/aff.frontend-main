import React, { Component } from "react"
import { Label, Input, FormGroup ,Form,Button, Modal, ModalHeader, ModalBody, ModalFooter,Col,Row} from "reactstrap"
import {currency} from "../../../../redux/actions/auth/currency"
import { getDataAgain } from "../../../../redux/actions/user/permission"
import {connect} from "react-redux"
import {signup} from "../../../../redux/actions/user/index"
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import {status_options} from "../../../../configs/providerconfig"

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
    subscribedtosms : false
  }

  async UNSAFE_componentWillMount()
  {
    await this.props.getDataAgain();
  }

  handleregister = e =>{
    e.preventDefault();
    // var row = this.state;

    // if(!row.permission){
    //   row.permission = permission[0].value
    // }

    // this.props.signup(row);
    // this.props.handleShare();
    
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
    this.props.handleShare()
  }
  render() {
    let { handleShare } = this.props;
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
            Make Link
          </ModalHeader>
          <ModalBody className="mt-1">
            <Col>
              <FormGroup>
                <Label for="Source"> Source </Label>
                <Input type="text" name="Source" id="Source" placeholder="Source"
                    onChange={e=>this.setState({username : e.target.value})}
                    value = {this.state.username}
                    required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="name"> Medium </Label>
                <Input type="text" name="name" id="name" placeholder="Medium"
                    onChange={e=>this.setState({username : e.target.value})}
                    value = {this.state.username}
                    required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="name"> Campaign </Label>
                <Input type="text" name="name" id="name" placeholder="Campaign"
                    onChange={e=>this.setState({username : e.target.value})}
                    value = {this.state.username}
                    required
                />
              </FormGroup>
            </Col>
            <Col>
              <p>https://www.grandcasino.by/affiliates/?btag=22730_l100588</p>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Row>
                <Col xs="12 justify-content-start" className = "z-index-0">
                    <Button className="account_submit_btn" color="primary"  type="submit"> Copy </Button>
                    <Button className="ml-1 account_cancel_btn" color="danger" onClick={() => handleShare()}> Cancel </Button>
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
