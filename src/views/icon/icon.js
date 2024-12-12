import React from "react"
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import HappyIcon from "../../configs/icon"

class FeatherIcons extends React.Component {
    constructor(){
        super();
        this.state = {
            data:Object.entries(HappyIcon)
        }
    }
    render() {
        return (
        <React.Fragment>
            <Breadcrumbs
            breadCrumbTitle="Feather Icons"
            breadCrumbParent="Icons"
            breadCrumbActive="Feather Icons"
            />
            <Card>
            <CardHeader></CardHeader>
            <CardBody>
                <Row>
                    {
                        this.state.data.map((item, i)=>(
                            <Col key={i} sm="6" md="4"  className="fonticon-container">
                                <div className="fonticon-wrap">
                                    {item[1]}
                                </div>
                                <label className="fonticon-classname">
                                    {item[0]}
                                </label>
                            </Col>
                        ))
                    }
                </Row>
            </CardBody>
            </Card>
        </React.Fragment>
        )
    }
}
export default FeatherIcons
