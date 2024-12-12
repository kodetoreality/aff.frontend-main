import React, { Component } from "react"
import { Label, Input, FormGroup ,Form,Button, Modal, ModalHeader, ModalBody, ModalFooter,Col,Row} from "reactstrap"
import Select from "react-select"
import {currency} from "../../../../redux/actions/auth/currency"
import { getDataAgain } from "../../../../redux/actions/user/permission"
import {connect} from "react-redux"
import {signup} from "../../../../redux/actions/user/index"
import Flatpickr from "react-flatpickr";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import {status_options} from "../../../../configs/providerconfig"
import {Language} from "../../../../configs/affiliateConfig";

let permission = [{value : "players" , label : "players"}]

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
  }

  async UNSAFE_componentWillMount()
  {
    await this.props.getDataAgain();
  }

  handleregister = e =>{
    e.preventDefault();
    var row = this.state;

    if(!row.permission){
      row.permission = permission[0].value
    }

    this.props.signup(row);
    this.props.handleSidebar();
    
    this.setState({
      username : "",
      email : "",
      password : "",
      currency : currency[0].value,
      permission : "",
      promo_code : "",
      status : status_options[0].value,
      created : this.props.admin_info.email,
    })
  }

  toggleModal = () => {
    this.props.handleSidebar()
  }
  render() {
    let { handleSidebar } = this.props;
    if(this.props.permission)
    {
      let temp_permission = [];
      for(var i = 0 ; i < this.props.permission.length ; i ++)
      {
        let temp = {};
        if(this.props.permission[i].title !== "Players")
        {
          temp.value = this.props.permission[i].title;
          temp.label = this.props.permission[i].title;
          temp_permission.push(temp);
        }
      }
      permission = temp_permission;
    }
    return (
      <Modal isOpen={this.props.show} toggle={this.toggleModal} className="modal-dialog-centered modal-lg">
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
            Add Banner
          </ModalHeader>
          <ModalBody className="mt-1 p-2">
            <Row>
              <Col lg="6" md="6">
                <Row>
                  <Col lg="12" md="12">
                    <FormGroup>
                      <Label for="username">Banner Name</Label>
                      <Input type="text" name="bannername" id="bannername" placeholder="Banner Name"
                          onChange={e=>this.setState({username : e.target.value})}
                          value = {this.state.username}
                          required
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12">
                    <FormGroup>
                      <Label for="username">Language</Label>
                      <Select
                        className="React"
                        classNamePrefix="select"
                        id="language"
                        name="language"
                        options={Language}
                        value={Language.find(obj => obj.value === this.state.currency)}
                        defaultValue={Language[0]}
                        onChange={e => this.setState({ currency: e.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12">
                    <FormGroup>
                      <Label for="username">Product Type</Label>
                      <Select
                        className="React"
                        classNamePrefix="select"
                        id="language"
                        name="language"
                        options={Language}
                        value={Language.find(obj => obj.value === this.state.currency)}
                        defaultValue={Language[0]}
                        onChange={e => this.setState({ currency: e.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12">
                    <FormGroup>
                      <Label for="username">Category</Label>
                      <Select
                        className="React"
                        classNamePrefix="select"
                        id="language"
                        name="language"
                        options={Language}
                        value={Language.find(obj => obj.value === this.state.currency)}
                        defaultValue={Language[0]}
                        onChange={e => this.setState({ currency: e.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12">
                    <FormGroup>
                      <Label for="birthday">Birthday</Label>
                      <Flatpickr
                        name="birthday" 
                        id="birthday"
                        className="form-control"
                        value={new Date()}
                        onChange={date => {
                          // this.setState({ birthday : date.toJSON() });
                        }}
                      />
                    </FormGroup>                  
                  </Col>
                </Row>
              </Col>
              <Col lg="6" md="6">

                Hello World!
                
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Row>
                <Col xs="12 justify-content-start" className = "z-index-0">
                    <Button className="account_submit_btn" color="primary"  type="submit"> Submit </Button>
                    <Button className="ml-1 account_cancel_btn" color="danger" onClick={() => handleSidebar()}> Cancel </Button>
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



// <Col>
//  <FormGroup>
//     <Label for="email">Email *</Label>
//     <Input type="text" name="email" id="email" placeholder="Email"
//         onChange={e=>this.setState({email : e.target.value})}
//         value = {this.state.email}
//         required
//     />
//   </FormGroup>
// </Col>
// <Col>
//   <FormGroup>
//     <Label for="password">Password *</Label>
//     <Input type="text" name="password" id="password" placeholder="Password"
//         onChange={e=>this.setState({password : e.target.value})}
//         value = {this.state.password}
//         required
//     />
//   </FormGroup>
// </Col>
// <Col>
//   <FormGroup>
//     <Label for="currency">Currency *</Label>
//     <Select
//       className="React"
//       classNamePrefix="select"
//       id="currency"
//       name="currency"
//       options={currency}
//       value={currency.find(obj => obj.value === this.state.currency)}
//       defaultValue={currency[0]}
//       onChange={e => this.setState({ currency: e.value })}
//     />
//   </FormGroup>
// </Col>
// <Col>
//   <FormGroup>
//     <Label for="account"> Permission </Label>
//     <Select
//       className="React"
//       classNamePrefix="select"
//       id="permission"
//       options={permission}
//       defaultValue={permission[0]}
//       required           
//       onChange={e => this.setState({ permission: e.value })}
//     />
//   </FormGroup>
// </Col>
// <Col>
//   <FormGroup>
//     <Label for="promocode"> Promo Code </Label>
//     <Input type="text" name="PromoCode" id="PromoCode" placeholder="PromoCode"
//         onChange={e=>this.setState({promo_code : e.target.value})}
//         value = {this.state.promo_code}
//         required
//     />
//   </FormGroup>
// </Col>