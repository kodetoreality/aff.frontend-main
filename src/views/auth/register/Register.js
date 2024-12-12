import React from "react"
import RegisterJWT from "./RegisterJWT"
import "../../assets/scss/pages/authentication.scss"

class Register extends React.Component {
  state = {
    activeTab: "1"
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <style dangerouslySetInnerHTML={{__html: `
          body.dark-layout .card .card-header{
            background-color: none !important;
          }
          .btn-outline-info{
            padding-top: calc(0.9vw - 1px) !important;
            padding-bottom: calc(0.9vw - 1px) !important;
            }
            .btn-success{
            padding-top: calc(0.9vw - 1px) !important;
            padding-bottom: calc(0.9vw - 1px) !important;
            }
        `}}></style>
          <RegisterJWT />
      </React.Fragment>
    )
  }
}
export default Register
