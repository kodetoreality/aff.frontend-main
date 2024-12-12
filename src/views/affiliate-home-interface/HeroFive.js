import React, { Component } from 'react';
import image from "../../assets/img/first-page/graphic-1.png"
import { history } from "../../history"

const initData = {
    heading: "Stay connected with your customers",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.",
    btnText: "Please use affiliate",
    formHeading: "Get started for FREE!",
    formText: "Fill all fields so we can get some info about you. We'll never send you spam",
    formBtn: "Send Message",
    formBtnText: "By signing up, you accept our",
    formBtnText_2: "Terms",
    formBtnText_3: "Privacy Policy"
}
class HeroSection extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="home" className="section welcome-area bg-overlay d-flex align-items-center width-100per bg-4b2fd9">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-lg-7">
                            <div className="welcome-intro">
                            <h1 className="text-white">{this.state.data.heading}</h1>
                            <p className="text-white my-4">{this.state.data.content}</p>
                            <div className="button-group store-buttons d-flex">
                                <a href="/#" className="btn sApp-btn text-uppercase" onClick = {() => history.push("/signin") }>{this.state.data.btnText}</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5">
                            <img src={image} className = "animation-img" alt="" style ={{animation: "bounceHero 3s infinite"}} />
                        </div>
                    </div>
                </div>
                <div className="shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="shape-fill" fill="#FFFFFF" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
                    </svg>
                </div>
            </section>
        );
    }
}

export default HeroSection;