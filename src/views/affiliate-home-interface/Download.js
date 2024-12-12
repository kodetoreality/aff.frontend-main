import React, { Component } from 'react';

const initData = {
    heading: "sApp is available for all devices",
    headingText: "sApp is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo. Aliquam optio, delectus, dolorem quod neque eos totam. Delectus quae animi tenetur voluptates doloribus commodi dicta modi aliquid deserunt, quis maiores nesciunt autem, aperiam natus.",
    headingTexttwo: "sApp is available for all devices, consectetur adipisicing elit. Vel neque, cumque. Temporibus eligendi veniam, necessitatibus aut id labore nisi quisquam.",
    headingSlug: "* Available on iPhone, iPad and all Android devices",
    playImg: "/img/google-play.png",
    appleImg: "/img/app-store.png",
}

class Download extends Component {
    state = {
        initData: {},
        "teamIcons": [
            {
              "id": 1,
              "iconClass": "fab fa-facebook-f"
            },
            {
              "id": 2,
              "iconClass": "fab fa-twitter"
            },
            {
              "id": 3,
              "iconClass": "fab fa-google-plus-g"
            },
            {
              "id": 4,
              "iconClass": "fab fa-linkedin-in"
            },
            {
              "id": 5,
              "iconClass": "fab fa-instagram"
            }
          ]
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <section className="section download-area overlay-dark ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        {/* Download Text */}
                        <div className="download-text text-center">
                        <h2 className="text-white">Afflite is powerful about anything</h2>
                        <p className="text-white my-3 d-none d-sm-block">There are many people use Afflite. Because afflite is very powerful and It is convenient any betgames.</p>
                        <p className="text-white my-3 d-block d-sm-none">{this.state.initData.headingTexttwo}</p>
                        {/* Store Buttons */}
                        <div className="button-group store-buttons d-flex justify-content-center">
                            <div className="newsSocials marginCenter clear">
                                {this.state.teamIcons.map((item, idx) => {
                                    return(
                                        <a key={`ti_${idx}`} className="p-2" href="/#"><i style = {{width : "25px" , height : "25px"}} className={item.iconClass} /></a>
                                    );
                                })}
                            </div>
                        </div>
                        <span className="d-inline-block text-white fw-3 font-italic mt-3">{this.state.initData.headingSlug}</span>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Download;