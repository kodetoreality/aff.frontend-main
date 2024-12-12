import React, { Component } from 'react';

const data = {
    "heading": "Easily communicate with clients using sApp.",
    "headingTwo": "Work faster with powerful tools.",
    "headingThree": "More productivity with less effort",
    "headingText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolor ut iusto vitae autem neque eum ipsam, impedit asperiores vel cumque laborum dicta repellendus inventore voluptatibus et explicabo nobis unde.",
    "thumbOne": "/img/discover_thumb.png",
    "thumbTwo": "/img/discover_thumb_3.png",
    "discoverData": [
      {
        "id": 1,
        "iconClass": "fas fa-check",
        "text": "Combined with a handful of model sentence structures looks reasonable."
      },
      {
        "id": 2,
        "iconClass": "fas fa-check",
        "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."
      },
      {
        "id": 3,
        "iconClass": "fas fa-check",
        "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
      },
      {
        "id": 4,
        "iconClass": "fas fa-check",
        "text": "All the Lorem Ipsum generators on the Internet tend to repeat necessary."
      }
    ],
    "discoverIcon": [
      {
        "id": 1,
        "iconClass": "fas fa-bell"
      },
      {
        "id": 2,
        "iconClass": "fas fa-envelope-open"
      },
      {
        "id": 3,
        "iconClass": "fas fa-video"
      }
    ]
  }

class DiscoverSection extends Component {
    state = {
        data: {},
        discoverData: [],
        discoverIcon: []
    }
    componentDidMount(){
        this.setState({
            data: data,
            discoverData: data.discoverData,
            discoverIcon: data.discoverIcon
        })
    }
    render() {
        return (
            <section id="aboutus" className="section discover-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-between">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Discover Thumb */}
                        <div className="service-thumb discover-thumb mx-auto pt-5 pt-lg-0">
                            <img src="/img/maintenance.png" alt="" style = {{width : "100%"}} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        {/* Discover Text */}
                        <div className="discover-text pt-4 pt-lg-0">
                        <h2 className="pb-4 pb-sm-0">About Us</h2>
                        <p className="d-none d-sm-block pt-3 pb-4">{this.state.data.headingText}</p>
                        {/* Check List */}
                        <ul className="check-list">
                            {this.state.discoverData.map((item, idx) => {
                                return(
                                    <div key={`do_${idx}`}>
                                        <li className="py-2">
                                            {/* List Box */}
                                            <div className="list-box media">
                                                <span className="icon align-self-center"><i className={item.iconClass} /></span>
                                                <span className="media-body pl-2">{item.text}</span>
                                            </div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        <div className="d-flex mt-3">
                            {this.state.discoverIcon.map((item, idx) => {
                                return(
                                    <div key={`il_${idx}`} className="service-icon pr-3">
                                        <span><i className={item.iconClass} /></span>
                                    </div>
                                );
                            })}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DiscoverSection;