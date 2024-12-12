import React, { Component } from 'react';
import Header from '../affiliate-home-interface/SignHeader';
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import { loginWithJWT } from "../../redux/actions/auth/loginActions";
import { connect } from "react-redux"
import {Col,Row,FormGroup,Label,Input,Button} from "reactstrap";

const initData = {
    heading: "Welcome back!",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    formHeading: "Sign In",
    formContent: "Fill all fields so we can get some info about you. We'll never send you spam",
    formText: "Don't have an account?",
    btnText: "Sign In",
    btnText_2: "Sign Up"
}


class Login extends Component {

    state = {
        initData: [],
        remember : false,
        email : "",
        password : ""
    }

    UNSAFE_componentWillMount(){
        if(localStorage.getItem('remember')){
          var users = localStorage.getItem("remember");
          users = JSON.parse(users);
          this.setState({remember : true ,  email: users.email ,password :users.password })    
        }
    }

    componentDidMount(){
        this.setState({
            initData: initData
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

    render() {
        return (
            <div className="homepage-5 accounts inner-pages">
                <div className="main">
                    <Header/>
                    <section id="home" className="section welcome-area h-100vh bg-overlay d-flex align-items-center" style = {{background : "#4b2fd9"}}>
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                {/* Welcome Intro Start */}
                                <div className="col-12 col-lg-7">
                                    <div className="welcome-intro">
                                        <h1 className="text-white">{this.state.initData.heading}</h1>
                                        <p className="text-white my-4">{this.state.initData.content}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-5">
                                    <div className="contact-box bg-white rounded p-2 p-sm-3 mt-5 mt-lg-0 shadow-lg">
                                        <form id="contact-form" action="/" onSubmit={this.handleLogin}>
                                            <div className="contact-top">
                                                <h3 className="contact-title text-center">Sign In</h3>
                                            </div>
                                            <Row className="p-1">
                                                <Col lg="12" md="12" sm ="12" xs="12">
                                                    <FormGroup>
                                                        <Label for="basicInput">Email</Label>
                                                        <Input className="border-7367f0-1" type="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12" md="12" sm ="12" xs="12">
                                                    <FormGroup>
                                                        <Label for="basicInput">Password</Label>
                                                        <Input className="border-7367f0-1" type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12" md="12" sm ="12" xs="12">
                                                    <Checkbox
                                                        color="primary"
                                                        icon={<Check className="vx-icon" size={16} />}
                                                        label="Remember me"
                                                        defaultChecked={this.state.remember}
                                                        onChange={() => this.setState({remember : !this.state.remember})}
                                                        className="float-left w-100 mb-1"
                                                    />
                                                </Col>
                                                <Col lg="12" md="12" sm ="12" xs="12">
                                                    <Button className="bg-7c4fe0 w-100 color-white" type="submit"> Sign In </Button>
                                                </Col>
                                                <Col className="mt-1 text-center" lg="12" md="12" sm ="12" xs="12">
                                                    <a href = "/"> Foggot Password? </a>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#FFFFFF" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
                            </svg>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default connect(null, { loginWithJWT })(Login)