import React, { Component } from 'react';

const data = {
    "image": "/img/logo.png",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.",
    "linkText_1": "Useful Links",
    "linkText_2": "Product Help",
    "linkText_3": "Download",
    "iconList": [
      {
        "id": 1,
        "link": "facebook",
        "iconClass": "fab fa-facebook-f"
      },
      {
        "id": 2,
        "link": "twitter",
        "iconClass": "fab fa-twitter"
      },
      {
        "id": 3,
        "link": "google-plus",
        "iconClass": "fab fa-google-plus-g"
      },
      {
        "id": 4,
        "link": "vine",
        "iconClass": "fab fa-vine"
      }
    ],
    "footerList_1": [
      {
        "id": 1,
        "text": "Home"
      },
      {
        "id": 2,
        "text": "About Us"
      },
      {
        "id": 3,
        "text": "Services"
      },
      {
        "id": 4,
        "text": "Blog"
      },
      {
        "id": 5,
        "text": "Contact"
      }
    ],
    "footerList_2": [
      {
        "id": 1,
        "text": "FAQ"
      },
      {
        "id": 2,
        "text": "Privacy Policy"
      },
      {
        "id": 3,
        "text": "Support"
      },
      {
        "id": 4,
        "text": "Terms & Conditions"
      },
      {
        "id": 5,
        "text": "Contact"
      }
    ],
    "footerList_3": [
      {
        "id": 1,
        "image": "/img/google-play-black.png"
      },
      {
        "id": 2,
        "image": "/img/app-store-black.png"
      }
    ],
    "footerList_4": [
      {
        "id": 1,
        "text": "Affiliate program"
      },
      {
        "id": 2,
        "text": "Terms & Conditions"
      },
      {
        "id": 3,
        "text": "Privacy Policy"
      },
      {
        "id": 4,
        "text": "Refund Policy"
      }
    ]
  };

class FooterSection extends Component {
    state = {
        data: {},
        iconList: [],
        footerList_1: [],
        footerList_2: [],
        footerList_3: []
    }
    componentDidMount(){
        this.setState({
            data: data,
            iconList: data.iconList,
            footerList_1: data.footerList_1,
            footerList_2: data.footerList_2,
            footerList_3: data.footerList_3
        })
    }
    render() {
        return (
            <section className="section testimonial-area ptb_100" style ={{paddingBottom : '0px'}}>
                <div className="container text-center">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="footer-items">
                                <a className="navbar-brand" href="/#">
                                <img className="logo" src={this.state.data.image} alt="" />
                                </a>
                                <p className="mt-2 mb-3">{this.state.data.text}</p>
                                <div className="social-icons d-flex">
                                    {this.state.iconList.map((item, idx) => {
                                        return(
                                            <a key={`fi_${idx}`} className={item.link} href="/#">
                                                <i className={item.iconClass} />
                                                <i className={item.iconClass} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="footer-items">
                                <h3 className="footer-title mb-2">{this.state.data.linkText_1}</h3>
                                <ul>
                                    {this.state.footerList_1.map((item, idx) => {
                                        return(
                                            <li key={`flo_${idx}`} className="py-2"><a href="/#">{item.text}</a></li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="footer-items">
                                <h3 className="footer-title mb-2">{this.state.data.linkText_2}</h3>
                                <ul>
                                    {this.state.footerList_2.map((item, idx) => {
                                        return(
                                            <li key={`flt_${idx}`} className="py-2"><a href="/#">{item.text}</a></li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="footer-items">
                                <h3 className="footer-title mb-2">{this.state.data.linkText_3}</h3>
                                <div className="button-group store-buttons store-black d-flex flex-wrap" style = {{marginLeft : "20%"}}>
                                    {this.state.footerList_3.map((item, idx) => {
                                        return(
                                            <a key={`flth_${idx}`} href="/#">
                                                <img src={item.image} alt="" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                <div className="copyright-left">© Copyrights 2020 sApp All rights reserved.</div>
                                <div className="copyright-right">Made with <i className="fas fa-heart" /> By <a href="/#">Theme Land</a></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FooterSection;