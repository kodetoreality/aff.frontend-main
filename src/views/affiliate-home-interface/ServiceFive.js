import React, { Component } from 'react';

const data = {
    "heading": "Make your Device Manage Everything For you",
    "headingTwo": "Share your photos with friends easily",
    "headingThree": "Smart and secure mobile banking",
    "headingFour": "More productivity with less effort",
    "headingFive": "Organize all your media content easily",
    "headingSix": "Work faster with powerful filters",
    "headingSeven": "Stay connected with all of your friends",
    "buttonText": "Learn More",
    "thumbOne": "/img/features_thumb.png",
    "thumbTwo": "/img/service_thumb_2.png",
    "thumbThree": "/img/welcome_mockup_2.png",
    "thumbFour": "/img/discover_thumb.png",
    "thumbFive": "/img/service_thumb_1.png",
    "thumbSix": "/img/discover_thumb_2.png",
    "serviceData": [
      {
        "id": 1,
        "iconClass": "fab fa-buffer",
        "text": "Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
      },
      {
        "id": 2,
        "iconClass": "fas fa-brush",
        "text": "Customizable design dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
      },
      {
        "id": 3,
        "iconClass": "fas fa-burn",
        "text": "Drop ipsum dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
      },
      {
        "id": 4,
        "iconClass": "fas fa-cart-arrow-down",
        "text": "Marketing chart dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
      }
    ]
  }

class ServiceSection extends Component {
    state = {
        data: {},
        serviceData: []
    }
    componentDidMount(){
        this.setState({
            data: data,
            serviceData: data.serviceData
        })
    }
    render() {
        return (
            <section id="LatestNews" className="section service-area overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-between">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="service-text pt-4 pt-lg-0">
                        <h2 className="text-capitalize mb-4">Latest News</h2>
                        <ul className="service-list">
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <div key={`so_${idx}`}>
                                        <li className="single-service media py-2">
                                            <div className="service-icon pr-4">
                                                <span><i className={item.iconClass} /></span>
                                            </div>
                                            <div className="service-text media-body">
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        <a href="/#" className="btn btn-bordered mt-4 color-white">{this.state.data.buttonText}</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block">
                        <div className="service-thumb mx-auto">
                            <img src="/img/graphic-2.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;