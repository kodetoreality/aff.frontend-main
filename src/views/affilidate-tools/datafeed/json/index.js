import React, { Component } from "react"
import { history } from "../../../../history";
import { Eye, Delete, Search, RefreshCw,Edit} from "react-feather"
import { connect } from "react-redux"
import { getData , filterData , deleteUser} from "../../../../redux/actions/user/index"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import "../../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../../assets/scss/pages/data-list.scss"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Activate from "./activate"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { toast } from "react-toastify"
import Select from "react-select"
import Icons from "../../../../configs/icon"
import {Col, Row, Button, FormGroup, Label} from "reactstrap"
import Toolbar from "../toolbar";

// import DeleteLink from "./link-modals/deletelink"
// import Indicate from "./link-modals/indicate";
// import IndicateAfter1 from "./link-modals/indicate1";
// import IndicateAfter2 from "./link-modals/indicate2";

const MediaType = [
  {value : " " , label : "Select an option"},
  {value : "Flash" , label : "Flash"},
  {value : "Image" , label : "Image"},
  {value : "HTML5" , label : "HTML5"},
];


const ALL = "all";
const PERIOD = "period";
const STATUS = "status";
const ROLE = "role";
const COUNTRY = "country";
const CURRENCY = "currency";
const FILTERBY = "filterby";
const FILTERVALUE = "filtervalue";

const MEDIATYPE = "mediatype"

const CustomHeader = props => {
  let {
    direction,
    expandClassname,
    searchData,

    handleFilter,
    expand,
    cancelSearch,
    handleSearch
  } = props;
  return (
    <div className= "p-2 sc-fzoXzr">
      <Row>
        <Col>
          <p> Filters </p>
        </Col>
        <Col>
          <div className = "cursor-pointer expand-btn" onClick = {() => expand()}> 
            {direction}
          </div>
        </Col>
      </Row>
      <Row className = {expandClassname}>
        <Col>
          <FormGroup>
            <Label for="STATUS"> Time Zone </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Mediatype"
              name="Mediatype"
              options={MediaType}
              defaultValue={MediaType[0]}
              onChange={e => handleFilter(e.value,MEDIATYPE)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="STATUS"> Upcomming Games </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Mediatype"
              name="Mediatype"
              options={MediaType}
              defaultValue={MediaType[0]}
              onChange={e => handleFilter(e.value,MEDIATYPE)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="STATUS"> Language </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Mediatype"
              name="Mediatype"
              options={MediaType}
              defaultValue={MediaType[0]}
              onChange={e => handleFilter(e.value,MEDIATYPE)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className = {expandClassname}>
        <Col>
          <FormGroup>
            <Label for="STATUS"> Sport </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Mediatype"
              name="Mediatype"
              options={MediaType}
              defaultValue={MediaType[0]}
              onChange={e => handleFilter(e.value,MEDIATYPE)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="STATUS"> Competition </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Mediatype"
              name="Mediatype"
              options={MediaType}
              defaultValue={MediaType[0]}
              onChange={e => handleFilter(e.value,MEDIATYPE)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="STATUS"> Region </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Mediatype"
              name="Mediatype"
              options={MediaType}
              defaultValue={MediaType[0]}
              onChange={e => handleFilter(e.value,MEDIATYPE)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="STATUS"> Game </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Mediatype"
              name="Mediatype"
              options={MediaType}
              defaultValue={MediaType[0]}
              onChange={e => handleFilter(e.value,MEDIATYPE)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className ={expandClassname}>
        <Col lg='9' md='9' sm='12' xs='12'>
          {searchData.map((item, idx) => {
            return(
              <div key={idx}>
                <div onClick={() => cancelSearch(item.bool)} className = "search-close-btn cursor-pointer ml-1"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="20px" width="20px"><path style ={{color : 'white'}} d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg> </div>
                <div className = "search-content-txt"> {item.bool + " : " + item.value } </div>
              </div>
            );
          })}
        </Col>
        <Col lg='3' md='3' sm='6' xs='12'>
          <Button
            style={{float:'right' , color : 'white'}}
            className="add-new-btn account_info_btn"
            color="primary"
            onClick={() => handleSearch()}
            outline>
            <Search size={15} />
            <span className="align-middle" style = {{color : 'white'}}> Search </span>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

class ListViewConfig extends Component {

  state = {
    allData: [],
    data: [],
    currentPage: 0,
    rowsPerPage: 4,
    totalPages: 0,
    totalDataCount : 0,
    columns: [
      {
        minWidth: "10vh",
        cell: row => (
          <Row className = "ml-2">
            <Col lg="12" md="12" className = "ft-weight">
              <Eye
                className="cursor-pointer"
                size={20}
                onClick = {() => {this.handleActivate()}}
                />
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-1">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                defaultChecked={this.state.favorite}
                onChange={() => this.setState({favorite : !this.state.favorite})}
                className="float-left w-100 mb-1"
              />
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-1">
              <RefreshCw
                className="cursor-pointer"
                size={20}
                onClick = {() => {this.handleActivate()}}
                />
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-1">
              <Delete
                className="cursor-pointer"
                size={20}
                onClick = {() => {this.handleActivate()}}
              />
            </Col>
          </Row>
        )
      },
      {
        cell: row => (
          <img src="https://img-a.udemycdn.com/course/240x135/1876216_fa2b_2.jpg" alt = ""></img>
        )
      },
      {
        cell: row => (
          <Row>
            <Col lg="12" md="12" className = "ft-weight">
              Banner Id : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              Banner Name : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              Creator Id : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              UserName : <span className = "color-86acc4"> 167725 </span>
            </Col>
          </Row>
        )
      },
      {
        // minWidth: "300px",
        cell: row => (
          <Row>
            <Col lg="12" md="12" className = "ft-weight">
              File Type : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              Type : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              Dimension : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              Size : <span className = "color-86acc4"> 167725 </span>
            </Col>
          </Row>
        )
      },
      {
        // minWidth: "300px",
        cell: row => (
          <Row>
            <Col lg="12" md="12" className = "ft-weight">
              Language : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              CTR : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              Upload Date : <span className = "color-86acc4"> 167725 </span>
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-2">
              Update Date : <span className = "color-86acc4"> 167725 </span>
            </Col>
          </Row>
        )
      },
    ],
    
    CustomHeaderExpand : false,
    sidebar: false,
    activate : false,
    favorite : false,
    searchData : [],
    first : 0,
    second : 0,
    selected: [],
  }

  componentDidMount(){
    this.setData();
  }

  async setData(){
    await this.props.getData();

    let allData = this.props.dataList.allData;
    let afterFilterData = [];
    
    let currentPage = this.props.parsedFilter.page ? parseInt(this.props.parsedFilter.page) -1 : 0;
    let rowsPerPage = this.props.parsedFilter.perPage ? parseInt(this.props.parsedFilter.perPage) : 4;

    if(this.state.searchData.length){
      // for(let i = 0 ; i < this.state.searchData.length ; i ++){
      //   switch(this.state.searchData[i].bool){

      //   }
      // }
      currentPage = 0;
      rowsPerPage = 4;
    }else{
      afterFilterData = allData;
    }

    let data = [];
    
    let first_temp = currentPage * rowsPerPage;
    let second_temp = first_temp + rowsPerPage;
    
    if(second_temp >= afterFilterData.length){
      second_temp = afterFilterData.length;
    }
    
    for(let i = first_temp ; i < second_temp ; i ++){
      data.push(afterFilterData[i]);
    }

    let totalDataCount = parseInt(afterFilterData.length);
    let totalPages = Math.ceil(this.props.parsedFilter.perPage ? totalDataCount / this.props.parsedFilter.perPage : totalDataCount / 4);

    this.setState({
      allData : allData ,
      currentPage : currentPage,
      rowsPerPage : rowsPerPage,
      totalPages : totalPages,
      data : data,
      totalDataCount : totalDataCount,
      first : first_temp + 1,
      second : second_temp
    });
  }

  expandHeader = () => {
    this.setState({CustomHeaderExpand : !this.state.CustomHeaderExpand})
  }

  handlePagination = page => {
    let { parsedFilter } = this.props
    let perPage = parsedFilter.perPage !== undefined ? parsedFilter.perPage : 4
    let urlPrefix = history.location.pathname
    history.push( `${urlPrefix}?page=${page.selected + 1}&perPage=${perPage}` );
    this.setData();
  }

  handleSearch = () => {
    this.setData();
  }

  cancelSearch = (bool) => {
    let temp = this.state.searchData;
    let temp1 = [];
    for(let i = 0 ; i < temp.length ; i ++)
    {
      if(temp[i].bool !== bool){
        temp1.push(temp[i]);
      }
    }
    this.setState({searchData : temp1});
  }

  handleFilter = (value,bool) => {
    if(bool === PERIOD){
      let D_a = new Date(value[0])
      let D_b = new Date(value[1])
      let date1 = D_a.getFullYear() + ":" + (D_a.getMonth() + 1 < 10 ? '0' + (D_a.getMonth() + 1) : D_a.getMonth() + 1) + ":" + (D_a.getDate() < 10 ? '0' + D_a.getDate() : D_a.getDate());
      let date2 = D_b.getFullYear() + ":" + (D_b.getMonth() + 1 < 10 ? '0' + (D_b.getMonth() + 1) : D_b.getMonth() + 1) + ":" + (D_b.getDate() < 10 ? '0' + D_b.getDate() : D_b.getDate());
      value = date1 + "~" + date2;
    }
    
    let temp = this.state.searchData;
    let flag = false;
    
    if(bool === FILTERBY){
      for(let i = 0 ; i < temp.length ; i ++)
      {
        if(temp[i].bool !== ALL && temp[i].bool !== PERIOD && temp[i].bool !== STATUS && temp[i].bool !== ROLE && temp[i].bool !== COUNTRY && temp[i].bool !== CURRENCY){
          temp[i].bool = value;
          temp[i].value = temp[i].value ? temp[i].value : "Please Input";
          flag = true;
        }
      }
      if(!flag){
        temp.push({value : "Please Input" , bool : value});
      }
    }
    else if(bool === FILTERVALUE){
      if(!value || value === ' '){
        this.cancelSearch(bool);
        return;
      }
      for(let i = 0 ; i < temp.length ; i ++)
      {
        if(temp[i].bool !== ALL && temp[i].bool !== PERIOD && temp[i].bool !== STATUS && temp[i].bool !== ROLE && temp[i].bool !== COUNTRY && temp[i].bool !== CURRENCY){
          temp[i].value = value;
          temp[i].bool = temp[i].bool ? temp[i].bool : "Please Choice";
          flag = true;
        }
      }
      if(!flag){
        temp.push({value : value , bool : "Please Choice"});
      }
    }
    else{
      if(bool === ALL){
        temp = [{bool : ALL , value : value}];
      }else{
        if(!value || value === ' '){
          this.cancelSearch(bool);
          return;
        }
        let temp_ = [];
        for(let i = 0 ; i < temp.length; i ++){
          if(temp[i].bool !== ALL){
            temp_.push(temp[i]);
          }
        }
        temp = temp_;
        for(let i = 0 ; i < temp.length ; i ++){
          if(temp[i].bool === bool){
            temp[i].value = value;
            flag = true;
          }
        }
        if(!flag){
          temp.push({value : value , bool : bool});
        }
      }
    }

    this.setState({searchData : temp});
  }

  handleDelete = (id) => {
    var sendData = {
      deleteId : id,
      deletedBy : this.props.admin_info.email
    }
    this.props.deleteUser(sendData, this.props.parsedFilter.page);
  }

  handleRowsPerPage = value => {
    let { parsedFilter } = this.props
    let page = parsedFilter.page !== undefined ? parsedFilter.page : 1
    history.push(`${history.location.pathname}?page=${page}&perPage=${value}`)
    this.setState({ rowsPerPage: value })
    this.setData();
  }

  handleSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar })
  }

  handleActivate = () => {
    this.setState({activate : !this.state.activate})
  }

  render() {
    let {
      rowsPerPage,
      currentPage,
      totalDataCount,
      CustomHeaderExpand,
      searchData,
      first,
      second,
      activate
    } = this.state
    return (
      <div>
        <Toolbar select = "JSON" />
        <Row className = "mb-1" style = {{width : '100%' , marginLeft: 'inherit'}}>
          <Col className = "text-center p-2 pl-3 pr-3" style = {{background : '#10163a',borderRadius : '10px'}}>
            <p className = "ft-size-30"> Data Feed </p>
            <p className = "ft-size-17">We provide you with an odds feed, that can be used for presenting online real odds on your website in a structure you want.
              It is more useful for programmers, who are eperienced in using and displaying the odds on their websites.</p>
          </Col>
        </Row>
        <CustomHeader
          expandClassname = {CustomHeaderExpand ? "display-none" : ""}
          expand = {this.expandHeader}
          cancelSearch = {this.cancelSearch}
          handleFilter={this.handleFilter}
          searchData = {searchData}
          direction = {CustomHeaderExpand ? Icons.ArrowDown : Icons.ArrowUp}
          total={totalDataCount}
          handleSidebar={this.handleSidebar}
          currentPage={currentPage}
          parsedFilter={this.props.parsedFilter}
          handleSearch={this.handleSearch}
          first = {first}
          second = {second}
          handleRowsPerPage={this.handleRowsPerPage}
          rowsPerPage={rowsPerPage}
        />
        <div id="admindata_table" className={`data-list list-view`}>
          <Activate
            show={activate}
            handleSidebar={this.handleActivate}
          />
          <Row className = "mb-1 mt-2" style = {{width : '100%' , marginLeft: 'inherit'}}>
            <Col className = "p-1" style = {{background : '#10163a',borderRadius : '10px'}}>
              <div style = {{borderBottom : '5px solid #07794a'}}>
                <div style = {{float : 'left'}}><p>Filter Url:</p></div>
                <div style = {{float : 'right',color : 'white'}}><Edit></Edit></div>
              </div>
              <div className="mt-1" style = {{textAlign : 'center'}}>
                <p style = {{fontSize : '17px'}}>
                  https://www.grandcasino.by/affiliates/?btag=22730
                </p>
                <CopyToClipboard
                    onCopy={()=>toast.success("Text Copied Successfully")}
                    text={"https://www.grandcasino.by/affiliates/?btag=22730"}
                >
                  <Button.Ripple className="account_info_btn" color="primary">Copy!</Button.Ripple>
                </CopyToClipboard>
              </div>
              <div>
                <p style = {{float:'right'}}>Monthly clicks: 2</p>
              </div>
            </Col>
            <Col className = "ml-1 p-1" style = {{background : '#10163a',borderRadius : '10px'}}>
              <div style = {{borderBottom : '5px solid #07794a'}}>
                <div style = {{float : 'left'}}><p>Global Url:</p></div>
                <div style = {{float : 'right',color : 'white'}}><Edit></Edit></div>
              </div>
              <div className="mt-1" style = {{textAlign : 'center'}}>
                <p style = {{fontSize : '17px'}}>
                  https://www.grandcasino.by/affiliates/?btag=22730
                </p>
                <CopyToClipboard
                    onCopy={()=>toast.success("Text Copied Successfully")}
                    text={"https://www.grandcasino.by/affiliates/?btag=22730"}
                >
                  <Button.Ripple className="account_info_btn" color="primary">Copy!</Button.Ripple>
                </CopyToClipboard>
              </div>
              <div>
                <p style = {{float:'right'}}>Monthly clicks: 2</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataList: state.userslist.users,
    admin_info: state.auth.login.values,
  }
}

export default connect(mapStateToProps, {
    getData,
    filterData,
    deleteUser,
    loginWithJWT
})(ListViewConfig)