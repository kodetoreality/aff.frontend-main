import React, { Component } from "react";
import { Col , Row , Button,FormGroup,Label,Input ,Modal,Form,ModalHeader,ModalBody,ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { getData } from "../../../../redux/actions/user/index";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import { getDataAgain } from "../../../../redux/actions/user/permission"
import queryString from "query-string";
import { User } from "react-feather"
import UserToolbar from './toolbar'
import Select from "react-select"
import {CorrectionType} from "../../../../configs/affiliateConfig"
import { Minus,Plus } from "react-feather"
import {Status } from "../../../../configs/affiliateConfig.js"

let permission = [{value : "players" , label : "players"}]

let affiliate_url = [
  {value : "https://aff.kasagames.com2", label : "https://aff.kasagames.com2"},
  {value : "https://aff.kasagames.com3", label : "https://aff.kasagames.com3"},
  {value : "https://aff.kasagames.com4", label : "https://aff.kasagames.com4"},
  {value : "https://aff.kasagames.com5", label : "https://aff.kasagames.com5"},
]

class userView extends Component {

  state = {
    currentUser : {
      email : 'affiliate@gmail.com',
      username : 'affiliate',
    },
    correctionModal : false,
    urlModal : false,
    editModal :false,

    // correction data
    CorrectionType : CorrectionType[0].value,
    money_amount : "",
    comment : "",

    //partner url
    affiliate_url : [{value : "https://aff.kasagames.com1", label : "https://aff.kasagames.com1"}],
    temp_affiliate_url : affiliate_url[0].value,

    //user edit
    email : "" ,
    Status : "",
    permission : "",
    promo_code : ""
  }

  async componentDidMount() {
    await this.props.getData(queryString.parse(this.props.location.search));
    let userId = queryString.parse(this.props.location.search).user;
    let temp = this.props.dataList.allData.filter(item => {
      if(item.id === parseInt(userId) ) return item;
      else return null;
    });
    this.setState({currentUser : temp[0] , email : temp[0].email,Status:temp[0].status,permission : temp[0].permission,promo_code : temp[0].promo_code});
    await this.props.getDataAgain();
  }

  handleLogin(){
    this.props.loginWithJWT(this.state.currentUser);
  }
  toggleCorrectionModal = () => {
    this.setState({correctionModal : !this.state.correctionModal});
  }
  handlecorrection(){
    alert(1);
  }
  urlModal = () => {
    this.setState({urlModal : !this.state.urlModal});
  }
  editModal = () => {
    this.setState({editModal : !this.state.editModal});
  }
  render() {
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
      <div>
        <UserToolbar select = {'Account'} />
        <Row className = "mt-1 p-1" style = {{width : '100%' , background : '#10163a'}}>
          <Col lg='10' md='3' sm='6' xs='12'>
            <div style={{float : 'left'}} className="avatar avatar-stats p-50 m-0 bg-rgba-dark"><div className="avatar-content"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div></div>
            <div style={{float : 'left'}} >
              <p>{this.state.currentUser.email}</p>
              <p>{this.state.currentUser.username}</p>
            </div>
          </Col>
          <Col lg='2' md='3' sm='6' xs='12' style = {{float : 'right'}}>
            <Button
              style={{float:'right' , color : 'white',background : 'none' , border : '1px solid #558b2f'}}
              className="add-new-btn ml-1"
              color="primary"
              onClick={() => this.handleLogin()}
              outline>
              <User size={15} />
              <span className="align-middle" style = {{color : 'white'}}> Login As </span>
            </Button>
          </Col>
          <div className = "p-1 account_border_right">
            <div>Pending % Commission</div>
            <div>
              <svg style = {{float : 'left'}} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="25px" width="25px"><path fill="#424242" d="M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"></path><path fill="#FB8C00" d="M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"></path><circle fill="#C76E00" cx="24" cy="31" r="3"></circle></svg>
              <p className = 'account_money'>$ 0.00</p>
            </div>
          </div>
          <div className = "p-1 account_border_right">
            <div>Pending CPA</div>
            <div>
              <svg style = {{float : 'left'}} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="25px" width="25px"><path fill="#4CAF50" d="M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"></path><g fill="#FFEB3B"><polygon points="24,33.4 17,25 31,25"></polygon><rect x="22" y="14.8" width="4" height="12.3"></rect></g></svg>
              <p className = 'account_money'>$ 0.00</p>
            </div>
          </div>
          <div className = "p-1 account_border_right">
            <div>Pending % Commission</div>
            <div>
              <svg style = {{float : 'left'}} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="25px" width="25px"><path fill="#78909C" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"></path><rect x="14" y="1" fill="#AED581" width="20" height="31"></rect><g fill="#558B2F"><path d="M13,0v33h22V0H13z M33,31H15V2h18V31z"></path><path d="M34,3c0,1.7-0.3,3-2,3c-1.7,0-3-1.3-3-3s1.3-2,3-2C33.7,1,34,1.3,34,3z"></path><path d="M16,1c1.7,0,3,0.3,3,2s-1.3,3-3,3s-2-1.3-2-3S14.3,1,16,1z"></path><circle cx="24" cy="8" r="2"></circle><circle cx="24" cy="20" r="6"></circle></g><path fill="#CFD8DC" d="M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"></path></svg>
              <p className = 'account_money'>$ 0.00</p>
            </div>
          </div>
          <Col>
            <Button
              className="add-new-btn ml-1 mt-2 account_submit_btn"
              color="primary"
              onClick={() => this.toggleCorrectionModal()}
              outline>
              <span className="align-middle" style = {{color : 'white'}}> Wallet Caraction </span>
            </Button>
          </Col>
        </Row>
        <Row className = "mt-1 p-1" style = {{width : '100%' , background : '#10163a',height: '50vh'}}>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="username">User Name</Label>
              <Input type="text" name="username" id="username"
                  value = {this.state.currentUser.username}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="gender"> Gender </Label>
              <Input type="text" name="gender" id="gender"
                  value = {this.state.currentUser.gender}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="firstname"> First Name </Label>
              <Input type="text" name="firstname" id="firstname"
                  value = {this.state.currentUser.firstname}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="middle_name">Middle Name</Label>
              <Input type="text" name="middle_name" id="middle_name"
                  value = {this.state.currentUser.middlename}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input type="text" name="lastname" id="lastname"
                  value = {this.state.currentUser.lastname}
                  readOnly
              />
            </FormGroup>
          </Col>

          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="text" name="email" id="email"
                  value = {this.state.currentUser.email}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="country"> country </Label>
              <Input type="text" name="country" id="country"
                  value = {this.state.currentUser.country_name}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="city"> City </Label>
              <Input type="text" name="city" id="city"
                  value = {this.state.currentUser.city_name}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="mobilenumber">Mobile Number</Label>
              <Input type="text" name="mobilenumber" id="mobilenumber"
                  value = {this.state.currentUser.mobilenumber}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" name="address" id="address"
                  value = {this.state.currentUser.address}
                  readOnly
              />
            </FormGroup>
          </Col>

          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="zip_code">Zipcode</Label>
              <Input type="text" name="zip_code" id="zip_code"
                  value = {this.state.currentUser.zip_code}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="skype"> skype </Label>
              <Input type="text" name="skype" id="skype"
                  value = {this.state.currentUser.skype}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="Affiliates ID"> Affiliates ID </Label>
              <Input type="text" name="Affiliates ID" id="Affiliates ID"
                  value = {this.state.currentUser.affiliate_id}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input type="text" name="status" id="status"
                  value = {this.state.currentUser.status}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="promocode">Promocode</Label>
              <Input type="text" name="promocode" id="promocode"
                  value = {this.state.currentUser.promo_code}
                  readOnly
              />
            </FormGroup>
          </Col>

          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="currency">Currency</Label>
              <Input type="text" name="currency" id="currency"
                  value = {this.state.currentUser.currency}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="Permission"> Permission </Label>
              <Input type="text" name="Permission" id="Permission"
                  value = {this.state.currentUser.permission}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="Direct players"> Direct players </Label>
              <Input type="text" name="Direct players" id="Direct players"
                  value = {"0"}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="Last Login Date">Last Login Date</Label>
              <Input type="text" name="Last Login Date" id="Last Login Date"
                  value = {this.state.currentUser.last_login_date}
                  readOnly
              />
            </FormGroup>
          </Col>
          <Col lg='2' md='3'>
            <FormGroup>
              <Label for="Registration Date">Registration Date</Label>
              <Input type="text" name="Registration Date" id="Registration Date"
                  value = {this.state.currentUser.date}
                  readOnly
              />
            </FormGroup>
          </Col>

          <Col lg='12' md='12'>
            <Button
              className="add-new-btn ml-1 mt-1 account_cancel_btn"
              color="primary"
              style={{float : 'right'}}
              // onClick={() => props.handleSidebar(true, true)}
              outline>
              <span className="align-middle" style = {{color : 'white'}}> Cancel </span>
            </Button>
            <Button
              className="add-new-btn ml-1 mt-1 account_submit_btn"
              color="primary"
              style={{float : 'right'}}
              onClick={() => this.editModal()}
              outline>
              <span className="align-middle" style = {{color : 'white'}}> Edit </span>
            </Button>
            <Button
              className="add-new-btn ml-1 mt-1 account_submit_btn"
              style={{float : 'right'}}
              color="primary"
              onClick={() => this.urlModal()}
              outline>
              <span className="align-middle" style = {{color : 'white'}}> Partner Domains </span>
            </Button>
          </Col>
        </Row>

        {/* modals */}

      <Modal isOpen={this.state.correctionModal} toggle={this.toggleCorrectionModal} className="modal-dialog-centered modal-mg">
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
        <Form className="" action="#" onSubmit={this.handlecorrection}>
          <ModalHeader toggle={this.toggleCorrectionModal} className="bg-primary">
            Correction
          </ModalHeader>
          <ModalBody className="mt-1">
            <Col>
              <FormGroup>
                <Label for="Type">Type</Label>
                <Select
                  className="React"
                  classNamePrefix="select"
                  id="type"
                  name="type"
                  options={CorrectionType}
                  value={CorrectionType.find(obj => obj.value === this.state.CorrectionType)}
                  defaultValue={CorrectionType[0]}
                  onChange={e => this.setState({ CorrectionType: e.value })}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="money">Amonut of Money</Label>
                <Input type="text" name="money" id="money" placeholder="Amount of Money"
                    onChange={e=>this.setState({money_amount : e.target.value})}
                    value = {this.state.money_amount}
                    required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="comment">Comment</Label>
                <textarea className="form-control" rows="5" name="comment" id="comment" placeholder="Comment"
                    onChange={e=>this.setState({comment : e.target.value})}
                    value = {this.state.comment}
                    required
                />
              </FormGroup>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Row>
                <Col xs="12 justify-content-start" className = "z-index-0">
                    <Button className="account_submit_btn" type="submit">
                        Submit
                    </Button>
                    <Button className="ml-1 account_cancel_btn"  onClick={() => this.toggleCorrectionModal()}>
                       Cancel
                    </Button>
                </Col>
            </Row>
          </ModalFooter>
        </Form>
      </Modal>

      <Modal isOpen={this.state.urlModal} toggle={this.urlModal} className="modal-dialog-centered modal-mg">
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
        <Form className="" action="#" onSubmit={this.handlecorrection}>
          <ModalHeader toggle={this.urlModal} className="bg-primary">
            Affiliate Partner Urls
          </ModalHeader>
          <ModalBody className="mt-1">
            {this.state.affiliate_url.map((item, idx) => {
              if(idx === 0){
                return(
                  <Row key = {idx}>
                    <Col>
                      <FormGroup>
                        <Label for="mainUrl">Main Parter Url</Label>
                        <Input type="text" name="mainUrl" id="mainUrl" readOnly
                            value = {item.value}
                            required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                );
              }
              if(idx === 1){
                return(
                  <Row key = {idx}>
                    <Col lg="10" md="10">
                      <FormGroup>
                        <Label for={"add_url" + idx}>Additional Parter Urls</Label>
                        <Input type="text" name={"add_url" + idx} id={"add_url" + idx} readOnly
                            value = {item.value}
                            required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pt-2" lg="2" md="2">
                      <p className="account_cancel_btn" style = {{padding: '7px', width: '4vh', borderRadius: '2vh'}}>
                        <Minus className="cursor-pointer mr-1" size={20}/>
                      </p>
                    </Col>
                  </Row>
                );
              }else{
                  return(
                    <Row key = {idx}>
                      <Col lg="10" md="10">
                        <FormGroup>
                          <Input type="text" name={"add_url" + idx} id={"add_url" + idx} readOnly
                              value = {item.value}
                              required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" lg="2" md="2">
                        <p className="account_cancel_btn" style = {{padding: '7px', width: '4vh', borderRadius: '2vh'}}>
                          <Minus className="cursor-pointer mr-1" size={20}/>
                        </p>
                      </Col>
                    </Row>
                  );
              }
            })}
            <Row>
              <Col lg="10" md="10">
                <FormGroup>
                  <Select
                    className="React"
                    classNamePrefix="select"
                    id="urls"
                    name="urls"
                    options={affiliate_url}
                    defaultValue={affiliate_url[0]}
                    onChange={e => this.setState({ temp_affiliate_url: e.value })}
                  />
                </FormGroup>
              </Col>
              <Col className="pl-1" lg="2" md="2">
                <p className="account_submit_btn" style = {{padding: '7px', width: '4vh', borderRadius: '2vh'}}>
                  <Plus className="cursor-pointer mr-1" size={20}/>
                </p>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Row>
                <Col xs="12 justify-content-start" className = "z-index-0">
                    <Button className="account_submit_btn" type="submit">
                        Submit
                    </Button>
                    <Button className="ml-1 account_cancel_btn"  onClick={() => this.urlModal()}>
                       Cancel
                    </Button>
                </Col>
            </Row>
          </ModalFooter>
        </Form>
      </Modal>

      <Modal isOpen={this.state.editModal} toggle={this.editModal} className="modal-dialog-centered modal-mg">
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
        <Form className="" action="#" onSubmit={this.handlecorrection}>
          <ModalHeader toggle={this.editModal} className="bg-primary">
            User Edit
          </ModalHeader>
          <ModalBody className="mt-1">
            <Col>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" name="email" id="email" 
                    value = {this.state.email}
                    required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="Type">Status</Label>
                <Select
                  className="React"
                  classNamePrefix="select"
                  id="type"
                  name="type"
                  options={Status}
                  value={Status.find(obj => obj.value === this.state.Status)}
                  defaultValue={Status[0]}
                  onChange={e => this.setState({ Status: e.value })}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="Type">Permission</Label>
                <Select
                  className="React"
                  classNamePrefix="select"
                  id="type"
                  name="type"
                  options={permission}
                  value={permission.find(obj => obj.value === this.state.permission)}
                  defaultValue={permission[0]}
                  onChange={e => this.setState({ permission: e.value })}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="promo_code">Promo code</Label>
                <Input type="text" name="promo_code" id="promo_code" 
                    value = {this.state.promo_code}
                    required
                />
              </FormGroup>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Row>
                <Col xs="12 justify-content-start" className = "z-index-0">
                    <Button className="account_submit_btn" type="submit">
                        Submit
                    </Button>
                    <Button className="ml-1 account_cancel_btn"  onClick={() => this.editModal()}>
                       Cancel
                    </Button>
                </Col>
            </Row>
          </ModalFooter>
        </Form>
      </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataList: state.userslist.users,
    admin_info: state.auth.login.values,
    permission : state.userslist.permission.allData
  }
}

export default connect(mapStateToProps, {
    getData,
    loginWithJWT,
    getDataAgain
})(userView)