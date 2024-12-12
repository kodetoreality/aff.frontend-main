import React, { Component } from 'react';

class FaqSection extends Component {
    state = {
        data: {
            "heading": "Frequently asked questions",
            "headingTwo": "Have questions? Look here",
            "headingText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
            "headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
            "faqText": "Haven't find suitable answer?",
            "faqTextLink": "Tell us what you need.",
            "faqData": [
              {
                "id": 1,
                "title": "How to Use Afflite?",
                "content": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
              },
              {
                "id": 2,
                "title": "Can I get support from the Author?",
                "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
              },
              {
                "id": 3,
                "title": "Do you have a free trail?",
                "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            ],
            "faqDataTwo": [
              {
                "id": 1,
                "title": "How can I edit my personal information?",
                "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              },
              {
                "id": 2,
                "title": "Contact form isn't working?",
                "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              },
              {
                "id": 3,
                "title": "Contact form isn't working?",
                "content": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
              }
            ],
            "faqDataThree": [
              {
                "id": 1,
                "title": "How to install sApp?",
                "content": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
              },
              {
                "id": 2,
                "title": "Can I get support from the Author?",
                "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
              },
              {
                "id": 3,
                "title": "Do you have a free trail?",
                "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              },
              {
                "id": 4,
                "title": "How can I edit my personal information?",
                "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              },
              {
                "id": 5,
                "title": "Contact form isn't working?",
                "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              }
            ]
          },
    }

    render() {
        return (
            <section id="Faq" className="section faq-area style-two ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize">{this.state.data.heading}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="faq-content">
                                <div className="accordion" id="sApp-accordion">
                                    <div className="row justify-content-center">

                                        <div className="col-12 col-md-6">
                                            {this.state.data.faqData.map((item, idx) => {
                                                return(
                                                    <div key={`fo_${idx}`} className="card border-0  p-1" style = {{height : "30%"}}>
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-2" type="button">
                                                                {item.title}
                                                            </button>
                                                        </h2>
                                                        </div>
                                                        <div className="card-body px-0 py-3">
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="col-12 col-md-6">
                                            {this.state.data.faqDataTwo.map((item, idx) => {
                                                return(
                                                    <div key={`ft_${idx}`} className="card border-0  p-1" style = {{height : "30%"}}>
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                            <h2 className="mb-0">
                                                                <button className="btn px-0 py-2" type="button">
                                                                    {item.title}
                                                                </button>
                                                            </h2>
                                                        </div>
                                                        <div className="card-body px-0 py-3">
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <p className="text-body text-center pt-4 fw-5">{this.state.data.faqText} <a href="#contact">{this.state.data.faqTextLink}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqSection;