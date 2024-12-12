import React from "react"
import "../../../assets/scss/pages/authentication.scss"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { loginWithJWT } from "../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import {get_iplocation,signupWithJWT} from "../../../redux/actions/auth/registerActions"
import { getDataAgain } from "../../../redux/actions/user/permission"
import Select from "react-select"
import { Row, Col, Input } from "reactstrap"
import captchapng from 'captchapng';
import {toast} from "react-toastify"

let permission = [{value : "Superadmin" , label : "Superadmin"}]

class Login extends React.Component {
  state = {
    firstname : "",
    lastname : "",
    username : "",
    permission : "",
    email: "",
    mobilenumber : "",
    password: "",
    repassword : "",
    digit_code : "",

    activeTab: "1",
    remember : false,

    captchapng : null,
    captchanumber : "",

    users : {
      country_name : "",
      region_name : "",
      city_name : "",
      country_code : "",
      zip_code  : "",
      time_zone : "",
      area_code : "",
      isp : "",
      domain : "",
      net_speed : "",
      ip : "",
      currency : []
    },
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  componentDidMount(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  UNSAFE_componentWillMount(){
    this.captchaImg();
    this.props.get_iplocation();
    this.props.getDataAgain();
    if(localStorage.getItem('remember')){
      var users = localStorage.getItem("remember");
      users = JSON.parse(users);
      this.setState({ email: users.email ,password :users.password })    
    }
  }

  handleRemember = e => {
    this.setState({
      remember: e.target.checked
    })
  }

  handleLogin = e => {
    e.preventDefault()
    if(this.state.remember){
      var remember = {
          password : this.state.password,
          email : this.state.email
      }
      localStorage.setItem("remember",JSON.stringify(remember))
    }
    this.props.loginWithJWT(this.state);
  }

  handleRemember = e => {
    this.setState({
      remember: e.target.checked
    })
  }

  handleregister = e =>{
    e.preventDefault();
    if(this.state.repassword !== this.state.password){
        toast.error("please input correct password");
        return;
    }else if(parseInt(this.state.digit_code) !== this.state.captchanumber){
        toast.error("please input correct digit code");
        return;
    }else{
      let register_data = {
        password : this.state.password,
        email : this.state.email,
        firstname : this.state.firstname,
        lastname : this.state.lastname,
        username : this.state.username,
        country_name : this.state.users.country_name,
        region_name : this.state.users.region_name,
        city_name : this.state.users.city_name,
        country_code : this.state.users.country_code,
        zip_code  : this.state.users.zip_code,
        time_zone : this.state.users.time_zone,
        area_code : this.state.users.area_code,
        isp : this.state.users.isp,
        domain : this.state.users.domain,
        ip : this.state.users.ip,
        mobilenumber : this.state.mobilenumber,
        permission : this.state.permission,
      }
      this.props.signupWithJWT(register_data);
    }
  }

  captchaImg(){
    var captchanumber = parseInt(Math.random()*9000+1000);
    var p = new captchapng(80,30,captchanumber);
    p.color(115, 95, 197, 100);
    p.color(30, 104, 21, 255);
    var img1 = p.getBase64();
    var imgbase64 = new Buffer(img1,'base64');
    var img = "data:image/jpeg;base64,"+new Buffer(imgbase64).toString('base64');
    this.setState({captchapng:img , captchanumber:captchanumber});
  }
  
  componentDidUpdate(prevProps, prevState){
    if(prevProps.iplocation !== this.props.iplocation){
      this.setState({users : this.props.iplocation});
    }
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
      <React.Fragment>
      
        <div className="login-container" id="container">
          <div className="form-container sign-up-container">
            <form action="/" className="d-block" onSubmit={this.handleregister}>
              <h1 className="m-1">Create Account</h1>
              <Row>
                <Col xs="6" sm="6" md="6">
                  <Input type="text" name="firstname" id="firstname" placeholder="First Name"
                    required
                    value = {this.state.firstname}
                    onChange={e=>this.setState({firstname : e.target.value})}
                  />
                </Col>
                <Col  xs="6" sm="6" md="6">
                  <Input type="text" name="last_name" id="last_name" placeholder="Last Name"
                    required
                    value = {this.state.lastname}
                    onChange={e=>this.setState({lastname : e.target.value})}
                  />
                </Col>
              </Row>

              <Input type="text" name="user_name" id="username" placeholder="User Name"
                required
                value = {this.state.username}
                onChange={e=>this.setState({username : e.target.value})}
              />

              <Select
                className="React"
                classNamePrefix="select"
                id="permission"
                options={permission}
                defaultValue={permission[0]}
                required           
                onChange={e => this.setState({ permission: e.value })}
              />

              <Input type="email" name="Email" id="email" placeholder="Email"
                required
                value={this.state.email}
                onChange={e=>this.setState({email : e.target.value})}
              />
              <Input type="text" name="Mobile Number" id="mobilenumber" placeholder="Mobile Number"
                required
                value={this.state.mobilenumber}
                onChange={e=>this.setState({mobilenumber : e.target.value})}
              />

              <Row>
                <Col xs="6" sm="6" md="6">
                  <Input type="password" name="password" id="passwordVertical" placeholder="Password"
                    required
                    value={this.state.password}
                    onChange={e=>this.setState({password : e.target.value})}
                  />
                </Col>
                <Col  xs="6" sm="6" md="6">
                  <Input type="password" name="repassword" id="repasswordVertical" placeholder="RePassword"
                    required
                    value={this.state.repassword}
                    onChange={e=>this.setState({repassword : e.target.value})}
                  />
                </Col>
              </Row>

              <Row>
                <Col xs="6" sm="6" md="6">
                  <Input type="number" name="digit_code" id="digit_code" placeholder="Enter 4 digit code"
                      required
                      maxLength={4}
                      value = {this.state.digit_code}
                      onChange={e=>this.setState({digit_code : e.target.value})}
                  />
                </Col>
                <Col  xs="6" sm="6" md="6" className="p-1">
                  <img src={this.state.captchapng} alt=" "/>
                </Col>
              </Row>

              <button type="submit" className="mt-3">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="/" onSubmit={this.handleLogin}>
              <h1 className="mb-1" style={{color:"#757575"}}>Sign in</h1>
              <Input type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
                className="float-left w-100 mb-1"
              />
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="mb-1" style={{color:"#000"}}>Welcome Back!</h1>
                <p style={{color:"#fff"}}>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 style={{color:"#000"}}>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login,
    iplocation : state.auth.register.iplocation,
    permission : state.userslist.permission.allData
  }
}
export default connect(mapStateToProps, { loginWithJWT,signupWithJWT,get_iplocation,getDataAgain })(Login)
