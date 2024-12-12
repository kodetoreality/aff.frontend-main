import React, { Component } from 'react';
import Header from '../affiliate-home-interface/SignHeader';
import { getDataAgain } from "../../redux/actions/user/permission"
import { connect } from "react-redux"
import Select from "react-select"
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import {get_iplocation,signupWithJWT} from "../../redux/actions/auth/registerActions"
import {toast} from "react-toastify"
import {Row,Col,FormGroup,Label,Input,Button,} from "reactstrap";

const initData = {
    heading: "Create an account!",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    formHeading: "Sign Up",
    formContent: "Fill all fields so we can get some info about you. We'll never send you spam",
    formText: "Already have an account?",
    btnText: "Sign Up",
    btnText_2: "Sign In"
}

let permission = [
    {value : "Superadmin", label : "Superadmin" },
    {value : "Admin",label : "Admin" },
    {value : "Players", label : "Players" },
    {value : "Affiliates",label : "Affiliates" },
    {value : "Super Agent",label : "Super Agent"},
    {value : "Accounts",label : "Accounts"},
    {value : "Risk Manager",label : "Risk Manager"},
    {value : "Promotion Manager",label : "Promotion Manager"},
    {value : "CMS Admin",label : "CMS Admin"},
    {value : "Casino Manager",label : "Casino Manager"},
    {value : "Sportsbook Manager",label : "Sportsbook Manager"},
    {value : "UI/UX Editor",label : "UI/UX Editor"},
]

class Signup extends Component {
    state = {
        initData: [],
        firstname : "",
        lastname : "",
        username : "",
        permission : "",
        email: "",
        mobilenumber : "",
        password: "",
        repassword : "",
        Terms : false,

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
    UNSAFE_componentWillMount(){
        this.props.get_iplocation();
        this.setState({
            initData: initData
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.iplocation !== this.props.iplocation){
          this.setState({users : this.props.iplocation});
        }
    }
    handleRegister = e => {
        e.preventDefault();
        let {firstname,lastname,username,email,mobilenumber,permission,password,repassword, Terms , users} = this.state;
        if(!Terms){
            toast.error("you have to agree our terms of service");
            return;
        }
        if(repassword !== password){
            toast.error("please input correct password");
            return;
        }else{
          let register_data = {
            password : password,
            email : email,
            firstname : firstname,
            lastname : lastname,
            username : username,
            country_name : users.country_name,
            region_name : users.region_name,
            city_name : users.city_name,
            country_code : users.country_code,
            zip_code  : users.zip_code,
            time_zone : users.time_zone,
            area_code : users.area_code,
            isp : users.isp,
            domain : users.domain,
            ip : users.ip,
            mobilenumber : mobilenumber,
            permission : permission,
          }
        console.log(register_data);
        //   this.props.signupWithJWT(register_data);
        }
    }
    render() {
        return (
            <div className="accounts inner-pages signup">
                <div className="main">
                    <Header />
                    <section id="home" className="section welcome-area h-100vh bg-overlay d-flex align-items-center" style = {{background : "#4b2fd9"}}>
                        <div className="container">
                                <Row className=" align-items-center justify-content-center">
                                    <Col lg="5" md="5">
                                        <div className="welcome-intro">
                                            <h1 className="text-white">{this.state.initData.heading}</h1>
                                            <p className="text-white my-4">{this.state.initData.content}</p>
                                        </div>
                                    </Col>
                                    <Col lg="7" md="7">
                                        <div className="contact-box bg-white rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
                                            <form id="contact-form" className="text-center" action="/" onSubmit={()=>this.handleRegister()}>
                                                <div className="contact-top">
                                                    <h3 className="contact-title">{this.state.initData.formHeading}</h3>
                                                </div>
                                                <Row className="p-1">
                                                    <Col lg="6" md="6" sm ="6" xs="6">
                                                        <FormGroup>
                                                            <Label for="basicInput">Firstname</Label>
                                                            <Input className="border-7367f0-1" type="text" placeholder="First Name" required onChange={e => this.setState({ firstname: e.target.value })} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6" md="6" sm ="6" xs="6">
                                                        <FormGroup>
                                                            <Label for="basicInput">LastName</Label>
                                                            <Input className="border-7367f0-1" type="text" placeholder="Last Name" required onChange={e => this.setState({ lastname: e.target.value })} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6" md="6" sm ="6" xs="6">
                                                        <FormGroup>
                                                            <Label for="basicInput">UserName</Label>
                                                            <Input className="border-7367f0-1" type="text" placeholder="User Name" required onChange={e => this.setState({ username: e.target.value })} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6" md="6" sm ="6" xs="6">
                                                        <FormGroup>
                                                            <Label for="basicInput">Email</Label>
                                                            <Input className="border-7367f0-1" type="email" placeholder="Email" required onChange={e => this.setState({ email: e.target.value })} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6" md="6" sm ="6" xs="6">
                                                        <Label for="basicInput">Permission</Label>
                                                        <Select
                                                            style={{border:'1px solid #7367f0'}}
                                                            className="React"
                                                            classNamePrefix="select"
                                                            id="permission"
                                                            name="permission"
                                                            options={permission}
                                                            defaultValue={permission[0]}
                                                            onChange={e => this.setState({permission : e.value})}
                                                        />
                                                    </Col>
                                                    <Col lg="6" md="6" sm ="6" xs="6">
                                                        <FormGroup>
                                                            <Label for="basicInput">Mobile Number</Label>
                                                            <Input className="border-7367f0-1" type="number" placeholder="Mobile Number" required onChange={e => this.setState({ mobilenumber: e.target.value })} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6" md="6" sm ="6" xs="6">
                                                        <FormGroup>
                                                            <Label for="basicInput">Password</Label>
                                                            <Input className="border-7367f0-1" type="password" placeholder="Password" required onChange={e => this.setState({ password: e.target.value })} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6" md="6" sm ="6" xs="6">
                                                        <FormGroup>
                                                            <Label for="basicInput">Confirm Password</Label>
                                                            <Input className="border-7367f0-1" type="password" placeholder="Confirm Password" required onChange={e => this.setState({repassword : e.target.value })} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="12" md="12" sm ="12" xs="12">
                                                        <Checkbox
                                                            color="primary"
                                                            icon={<Check className="vx-icon" size={16} />}
                                                            label="I agree with affiliate terms of service"
                                                            defaultChecked={this.state.Terms}
                                                            onChange={() => this.setState({Terms : !this.state.remember})}
                                                            className="float-left w-100 mb-1"
                                                        />
                                                    </Col>
                                                    <Col className="mt-1 text-center" lg="12" md="12" sm ="12" xs="12">
                                                        <Button className="bg-7c4fe0 w-100 color-white z-index-0" type="submit"> Sign Up </Button>
                                                    </Col>
                                                    <Col className="mt-1" lg="12" md="12" sm ="12" xs="12">
                                                        <p>If you want to see <a href = "/"> Terms of Service </a> Please click <a href="/"> here </a></p>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                        </div>

                        <div className="shape-bottom">
                            <svg viewBox="0 0 1920 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="svg replaced-svg">
                                <title>sApp Shape</title>
                                <desc>Created with Sketch</desc>
                                <defs />
                                <g id="sApp-Landing-Page" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="sApp-v1.0" transform="translate(0.000000, -554.000000)" fill="#FFFFFF">
                                    <path d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395" id="sApp-v1.0" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      values: state.auth.login,
      iplocation : state.auth.register.iplocation,
      permission : state.userslist.permission.allData
    }
}
export default connect(mapStateToProps, { getDataAgain ,get_iplocation,signupWithJWT})(Signup)