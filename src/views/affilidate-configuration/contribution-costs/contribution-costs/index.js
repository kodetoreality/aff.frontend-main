import React, { Component } from "react"
import {Card , CardHeader , CardBody,Row,Col ,Button} from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Toolbar from "../../toolbar";
import { Eye} from "react-feather"
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
    ],
    header : [
      {text : 'Products'},
      {text : 'Language'},
      {text : 'Currency'},
      {text : 'COMMISSION-PLAN'},
      {text : 'Contribution Costs'},
      {text : 'Social'},
      {text : 'Payment Method'},
      {text : 'Permissipon'},
      {text : 'Meta tags'},
    ],
  }

  render() {
    return (
        <Row>
          <Col lg="2" md="2">
            <Toolbar select = "ContributionCost"></Toolbar>
          </Col>
          <Col lg="10" md="10">
            <Card>
              <CardBody className="p-3">
                <Row>
                  <Col lg="9" md="9" className = "z-index-0">
                    <p className="ft-size-30">Products</p>
                  </Col>
                  <Col lg="3" md="3" className = "z-index-0">
                    <Button className="ml-1 account_cancel_btn  ml-2"  style = {{float : 'right'}} color="danger" > Reset </Button>
                    <Button className="account_submit_btn" color="primary"  style = {{float : 'right'}} type="submit"> Save </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Row>
              <Col >
                <Card>
                  <CardHeader className="p-1" style = {{borderBottom : "5px solid #1a9a65"}}>
                    <Col lg="10" md="10" className="ft-size-17"> All Products </Col>
                    <Col>
                      <Eye
                        className="cursor-pointer mr-1"
                        size={20}
                      />
                    </Col>
                    <Col>
                      <Eye
                        className="cursor-pointer mr-1"
                        size={20}
                      />
                    </Col>
                    <Col>
                      <Eye
                        className="cursor-pointer mr-1"
                        size={20}
                      />
                    </Col>
                  </CardHeader>
                  <CardBody>
                  {this.state.header.map((item, idx) => {
                    return(
                      <Row className="mt-1">
                        <Col lg="11" md="11">
                          <Checkbox
                            key={idx}
                            className="float-left ml-1"
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label={item.text}
                          />
                        </Col>
                        <Col>
                          <Eye
                            className="cursor-pointer mr-1"
                            size={20}
                          />
                        </Col>
                      </Row>
                    );
                  })}
                  </CardBody>
                </Card>              
              </Col>
              <Col>
                <Card>
                  <CardHeader className="p-1" style = {{borderBottom : "5px solid #1a9a65"}}>
                    <Col lg="10" md="10" className="ft-size-17"> All Products </Col>
                    <Col>
                      <Eye
                        className="cursor-pointer mr-1"
                        size={20}
                      />
                    </Col>
                    <Col>
                      <Eye
                        className="cursor-pointer mr-1"
                        size={20}
                      />
                    </Col>
                    <Col>
                      <Eye
                        className="cursor-pointer mr-1"
                        size={20}
                      />
                    </Col>
                  </CardHeader>
                  <CardBody>
                  {this.state.header.map((item, idx) => {
                    return(
                      <Row className="mt-1">
                        <Col lg="11" md="11">
                          <Checkbox
                            key={idx}
                            className="float-left ml-1"
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label={item.text}
                          />
                        </Col>
                        <Col>
                          <Eye
                            className="cursor-pointer mr-1"
                            size={20}
                          />
                        </Col>
                      </Row>
                    );
                  })}
                  </CardBody>
                </Card>              
              </Col>
            </Row>
          </Col>
        </Row>
    )
  }
}

export default ListViewConfig;