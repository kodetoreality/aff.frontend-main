import React, { Component } from "react"
import { Label,FormGroup ,Form,Button, Modal, ModalHeader, ModalBody, ModalFooter,Col,Row} from "reactstrap"
import Select from "react-select"
import {currency} from "../../../../redux/actions/auth/currency"
import { getDataAgain } from "../../../../redux/actions/user/permission"
import {connect} from "react-redux"
import {signup} from "../../../../redux/actions/user/index"
import {status_options} from "../../../../configs/providerconfig"
import {language} from "../../../../configs/affiliateConfig";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
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
    remember : false
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
      <Modal isOpen={this.props.show} toggle={this.toggleModal} className="modal-dialog-centered modal-md p-2">
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
            Activate
          </ModalHeader>
          <ModalBody className="mt-1 p-2">
            <Row>
              <Col lg="12" md="12">
                <FormGroup>
                  <Label for="username">Select Site Url</Label>
                  <Select
                    className="React"
                    classNamePrefix="select"
                    id="language"
                    name="language"
                    options={language}
                    value={language.find(obj => obj.value === this.state.currency)}
                    defaultValue={language[0]}
                    onChange={e => this.setState({ currency: e.value })}
                  />
                </FormGroup>
              </Col>
              <Col lg="12" md="12">
                <FormGroup>
                  <Label for="username">Landing Pages</Label>
                  <Select
                    className="React"
                    classNamePrefix="select"
                    id="language"
                    name="language"
                    options={language}
                    value={language.find(obj => obj.value === this.state.currency)}
                    defaultValue={language[0]}
                    onChange={e => this.setState({ currency: e.value })}
                  />
                </FormGroup>
              </Col>
              <Col lg="12" md="12">
                <FormGroup>
                  <Label for="username">Marketing Source</Label>
                  <Select
                    className="React"
                    classNamePrefix="select"
                    id="language"
                    name="language"
                    options={language}
                    value={language.find(obj => obj.value === this.state.currency)}
                    defaultValue={language[0]}
                    onChange={e => this.setState({ currency: e.value })}
                  />
                </FormGroup>
              </Col>
              <Col>
                <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Remember me"
                    defaultChecked={this.state.remember}
                    onChange={() => this.setState({remember : !this.state.remember})}
                    className="float-left w-100 mb-1"
                />
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