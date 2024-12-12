import React, { Component } from "react"
import {Card , CardHeader , CardTitle , CardBody,Row,Col ,FormGroup,Label , Input,Button} from "reactstrap";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";

class ListViewConfig extends Component {

  state = {
    data : [
      {text : "Admin" , value : "Admin"},
      {text : "Super Affiliate" , value : "Super Affiliate"},
      {text : "Affiliate" , value : "Affiliate"},
      {text : "Marketing" , value : "Marketing"},
      {text : "Blocked" , value : "Blocked"},
      {text : "Active" , value : "Active"},
      {text : "Passive" , value : "Passive"},
    ]
  }

  render() {
    return (
      <div>
        <Card className = "mt-2">
          <CardHeader>
            <CardTitle>Create News Letter</CardTitle>
          </CardHeader>
          <CardBody className = "p-3">
            <Row className = "p-2">
              {this.state.data.map((item, idx) => {
                return(
                  <Checkbox
                    key={idx}
                    className="float-left ml-1"
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label={item.text}
                    // defaultChecked={this.state.remember}
                    // onChange={() => this.setState({remember : !this.state.remember})}
                  />
                );
              })}
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="username">Group Name</Label>
                  <Input type="text" name="bannername" id="bannername" placeholder="Banner Name"
                      // onChange={e=>this.setState({username : e.target.value})}
                      // value = {this.state.username}
                      // required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="username">User Name</Label>
                  <Input type="text" name="bannername" id="bannername" placeholder="Banner Name"
                      // onChange={e=>this.setState({username : e.target.value})}
                      // value = {this.state.username}
                      // required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="username">Subject</Label>
                  <Input type="text" name="bannername" id="bannername" placeholder="Banner Name"
                      // onChange={e=>this.setState({username : e.target.value})}
                      // value = {this.state.username}
                      // required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="username">Subject</Label>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      required="required"
                      style = {{height : '200px'}}
                    />
                </FormGroup>
              </Col>
            </Row>
            <Row>
                <Col xs="12 justify-content-start mt-3" className = "z-index-0">
                    <Button className="account_submit_btn" color="primary"  type="submit"> Send </Button>
                    <Button className="ml-1 account_cancel_btn" color="danger" > Reset </Button>
                </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default ListViewConfig;