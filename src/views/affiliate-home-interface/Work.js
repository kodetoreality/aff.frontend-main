import React, { Component } from 'react';

const data = {
    "workData": [
      {
        "id": 1,
        "image": "/img/work_thumb_1.png",
        "title": "Install the App",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?"
      },
      {
        "id": 2,
        "image": "/img/work_thumb_2.png",
        "title": "Setup your profile",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?"
      },
      {
        "id": 3,
        "image": "/img/work_thumb_3.png",
        "title": "Enjoy the features!",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?"
      }
    ]
  }
class Work extends Component {
    render() {
        return (
            <section className="section work-area bg-overlay overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            {/* Work Content */}
                            <div className="work-content text-center">
                                <h2 className="text-white">How Afflite works?</h2>
                                <p className="text-white my-3 mt-sm-4 mb-sm-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data.workData.map((item, idx) => {
                            return(
                                <div key={`w_${idx}`} className="col-12 col-md-4">
                                {/* Single Work */}
                                <div className="single-work text-center p-3">
                                    {/* Work Icon */}
                                    <div className="work-icon">
                                        <img className="avatar-md" src={item.image} alt="" />
                                    </div>
                                    <h3 className="text-white py-3">{item.title}</h3>
                                    <p className="text-white">{item.content}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;