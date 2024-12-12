import React, { Component } from "react"
import DataTable from "react-data-table-component"
import ReactPaginate from "react-paginate"
import { history } from "../../../../history";
import { ChevronDown,  ChevronLeft,  ChevronRight, Eye,  Delete, Plus,   RefreshCw} from "react-feather"
import { connect } from "react-redux"
import { getData , filterData , deleteUser} from "../../../../redux/actions/user/index"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import "../../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../../assets/scss/pages/data-list.scss"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";

import Sidebar from "./DataListSidebar"
import Activate from "./activate"

// import Select from "react-select"
import Icons from "../../../../configs/icon"
import {UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem,  Col, Row, Button, } from "reactstrap"
// import {FilterBy,Language } from "../../../../configs/affiliateConfig.js"
// import Toolbar from "../toolbar";

// const MediaType = [
//   {value : " " , label : "Select an option"},
//   {value : "Flash" , label : "Flash"},
//   {value : "Image" , label : "Image"},
//   {value : "HTML5" , label : "HTML5"},
// ];



// const ProductType = [
//   {value : " " , label : "Select an option"},
//   {value : "Live Games" , label : "Live Games"},
//   {value : "Skill Games" , label : "Skill Games"},
//   {value : "Betting Games" , label : "Betting Games"},
//   {value : "Pool Betting Games" , label : "Pool Betting Games"},
//   {value : "Third Party Poker" , label : "Third Party Poker"},
//   {value : "Table Games" , label : "Table Games"},
//   {value : "Video Poker" , label : "Video Poker"},
//   {value : "Fantasy Sport" , label : "Fantasy Sport"},
//   {value : "BC Poker" , label : "BC Poker"},
// ]

// const Category = [
//   {value : " " , label : "Select an option"},
//   {value : "Logo" , label : "Logo"},
//   {value : "Promo" , label : "Promo"},
//   {value : "Offer" , label : "Offer"},
// ]

// const Brand = [
//   {value : " " , label : "Select an option"},
//   {value : "BetConstruct" , label : "BetConstruct"},
// ]

const ALL = "all";
const PERIOD = "period";
const STATUS = "status";
const ROLE = "role";
const COUNTRY = "country";
const CURRENCY = "currency";
const FILTERBY = "filterby";
const FILTERVALUE = "filtervalue";

// const MEDIATYPE = "mediatype"
// const LANGUAGE = "language"
// const PRODUCTTYPE = 'producttype'
// const CATEGORY = 'category'
// const BRAND = 'brand'

const selectedStyle = {
  rows: {
    selectedHighlighStyle: {
      backgroundColor: "rgba(115,103,240,.05)",
      color: "#7367F0 !important",
      boxShadow: "0 0 1px 0 #7367F0 !important",
      "&:hover": {
        transform: "translateY(0px) !important"
      }
    }
  }
}

const CustomHeader = props => {
  let {
    first,
    second,
    total,
    // direction,
    expandClassname,
    // searchData,

    // handleFilter,
    // expand,
    handleRowsPerPage,
    // cancelSearch,
    handleSidebar,
    // handleSearch
  } = props;
  return (
    <div className= "p-1 pt-2 pb-2">
      <Row className ={expandClassname}>
        <Col lg='2' md='3' sm='6' xs='12' className = "z-index-0">
          <UncontrolledDropdown className="data-list-rows-dropdown d-block ">
            <DropdownToggle color="" className="sort-dropdown account_info_btn">
              <span className="align-middle mx-50">
                {`${first} - ${second} of ${total}`}
              </span>
            <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu tag="div" right>
              <DropdownItem tag="a" onClick={() => handleRowsPerPage(4)}>4 </DropdownItem>
              <DropdownItem tag="a" onClick={() => handleRowsPerPage(10)}>10</DropdownItem>
              <DropdownItem tag="a" onClick={() => handleRowsPerPage(15)}>15</DropdownItem>
              <DropdownItem tag="a" onClick={() => handleRowsPerPage(20)}>20</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col lg='7' md='6' sm='12' xs='12'>
        </Col>
        <Col lg='3' md='3' sm='6' xs='12'>
          <Button
            style={{float:'right' , color : 'white'}}
            className="add-new-btn ml-1 account_submit_btn"
            color="primary"
            onClick={() => handleSidebar()}
            outline>
            <Plus size={15} />
            <span className="align-middle" color="primary" style = {{color : 'white'}}> Add </span>
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
      columns,
      data,
      totalPages,
      rowsPerPage,
      sidebar,
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
        {/* <Toolbar select = "Media-Library" /> */}
        <div id="admindata_table" className={`data-list list-view media-library`}>
          <style dangerouslySetInnerHTML={{__html: ``}}></style>
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationServer
            paginationComponent={() => (
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel="..."
                breakClassName="break-me"
                pageCount={totalPages}
                containerClassName="vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2"
                activeClassName="active"
                forcePage={this.props.parsedFilter.page ? parseInt(this.props.parsedFilter.page - 1) : 0 }
                onPageChange={page => this.handlePagination(page)}
              />
            )}
            noHeader
            subHeader
            responsive
            pointerOnHover
            selectableRowsHighlight
            onSelectedRowsChange={data => this.setState({ selected: data.selectedRows }) }
            customStyles={selectedStyle}
            subHeaderComponent={
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
            }
            sortIcon={<ChevronDown />}
          />
          <Sidebar
            show={sidebar}
            handleSidebar={this.handleSidebar}
          />
          <Activate
            show={activate}
            handleSidebar={this.handleActivate}
          />
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