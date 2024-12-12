import React, { Component } from "react"
import DataTable from "react-data-table-component"
import ReactPaginate from "react-paginate"
import { history } from "../../../../history";
import { ChevronDown,  ChevronLeft,  ChevronRight, Eye, User, Delete, Plus, Search, Edit, RefreshCw} from "react-feather"
import { connect } from "react-redux"
import { getData , filterData , deleteUser} from "../../../../redux/actions/user/index"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import "../../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../../assets/scss/pages/data-list.scss"

import Sidebar from "./DataListSidebar"
import Modal1 from "./modal1"

import Select from "react-select"
import Icons from "../../../../configs/icon"
import {UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, Input, Col, Row, Button, FormGroup, Label} from "reactstrap"
import {FilterBy } from "../../../../configs/affiliateConfig.js"
import Toolbar from "../toolbar";

const MediaType = [
  {value : " " , label : "Select an option"},
  {value : "Flash" , label : "Flash"},
  {value : "Image" , label : "Image"},
  {value : "HTML5" , label : "HTML5"},
];

const Language = [
  {value : " " , label : "Select an option"},
  {value : "Arabic" , label : "Arabic"},
  {value : "Azerbaijani" , label : "Azerbaijani"},
  {value : "Bulgarian" , label : "Bulgarian"},
  {value : "Czech" , label : "Czech"},
  {value : "German" , label : "German"},
  {value : "Greek" , label : "Greek"},
  {value : "English" , label : "English"},
  {value : "Español" , label : "Español"},
  {value : "Estonian" , label : "Estonian"},
  {value : "Persian" , label : "Persian"},
  {value : "Finnish" , label : "Finnish"},
  {value : "Français" , label : "Français"},
  {value : "Hebrew" , label : "Hebrew"},
  {value : "Armenian" , label : "Armenian"},
  {value : "Indonesian" , label : "Indonesian"},
  {value : "Italiano" , label : "Italiano"},
  {value : "Japanese" , label : "Japanese"},
  {value : "Georgian" , label : "Georgian"},
  {value : "한국어" , label : "한국어"},
  {value : "Lithuanian" , label : "Lithuanian"},
  {value : "Latvian" , label : "Latvian"},
  {value : "Malay" , label : "Malay"},
  {value : "Dutch" , label : "Dutch"},
  {value : "Norway" , label : "Norway"},
  {value : "Polish" , label : "Polish"},
  {value : "Portuguese" , label : "Portuguese"},
  {value : "Romanian" , label : "Romanian"},
  {value : "Русский" , label : "Русский"},
  {value : "Slovak" , label : "Slovak"},
  {value : "Slovene" , label : "Slovene"},
  {value : "Serbian" , label : "Serbian"},
  {value : "Swedish" , label : "Swedish"},
  {value : "Thailand" , label : "Thailand"},
  {value : "Türkçe" , label : "Türkçe"},
  {value : "Ukrainian" , label : "Ukrainian"},
  {value : "Chinese" , label : "Chinese"},
  {value : "Brazilian Portuguese",label : "Brazilian Portuguese"},
  {value : "Kurdish (Iraq)" , label : "Kurdish (Iraq)"},
]

const ProductType = [
  {value : " " , label : "Select an option"},
  {value : "Live Games" , label : "Live Games"},
  {value : "Skill Games" , label : "Skill Games"},
  {value : "Betting Games" , label : "Betting Games"},
  {value : "Pool Betting Games" , label : "Pool Betting Games"},
  {value : "Third Party Poker" , label : "Third Party Poker"},
  {value : "Table Games" , label : "Table Games"},
  {value : "Video Poker" , label : "Video Poker"},
  {value : "Fantasy Sport" , label : "Fantasy Sport"},
  {value : "BC Poker" , label : "BC Poker"},
]

const Category = [
  {value : " " , label : "Select an option"},
  {value : "Logo" , label : "Logo"},
  {value : "Promo" , label : "Promo"},
  {value : "Offer" , label : "Offer"},
]

const Brand = [
  {value : " " , label : "Select an option"},
  {value : "BetConstruct" , label : "BetConstruct"},
]

const ALL = "all";
const PERIOD = "period";
const STATUS = "status";
const ROLE = "role";
const COUNTRY = "country";
const CURRENCY = "currency";
const FILTERBY = "filterby";
const FILTERVALUE = "filtervalue";

const MEDIATYPE = "mediatype"
const LANGUAGE = "language"
const PRODUCTTYPE = 'producttype'
const CATEGORY = 'category'
const BRAND = 'brand'

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
    direction,
    expandClassname,
    searchData,

    handleFilter,
    expand,
    handleRowsPerPage,
    cancelSearch,
    handleSidebar,
    handleSearch
  } = props;
  return (
    <div className= "p-1 pt-2 pb-2">
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
            <Label for="basicInput">Search</Label>
            <Input style={{border:'1px solid #7367f0'}} type="text"  placeholder="Search" onChange={e => handleFilter(e.target.value,ALL)} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="STATUS"> Media Type </Label>
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
            <Label for="ROLE"> Language </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Language"
              name="Language"
              options={Language}
              defaultValue={Language[0]}
              onChange={e => handleFilter(e.value,LANGUAGE)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="Countrys"> Product Type </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="producttype"
              name="producttype"
              options={ProductType}
              defaultValue={ProductType[0]}
              onChange={e => handleFilter(e.value,PRODUCTTYPE)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="category"> Category </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="category"
              name="category"
              options={Category}
              defaultValue={Category[0]}
              onChange={e => handleFilter(e.value,CATEGORY)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="category"> Brand </Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="Brand"
              name="Brand"
              options={Brand}
              defaultValue={Brand[0]}
              onChange={e => handleFilter(e.value,BRAND)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg='2' md='3' sm='6' xs='6'>
          <FormGroup>
            <Label for="FILTERBY">FilterBy</Label>
            <Select
              style={{border:'1px solid #7367f0'}}
              className="React"
              classNamePrefix="select"
              id="FILTERBY"
              name="FILTERBY"
              options={FilterBy}
              defaultValue={FilterBy[0]}
              onChange={e => handleFilter(e.value,FILTERBY)}
            />
          </FormGroup>
        </Col>
        <Col lg='2' md='3' sm='6' xs='6'>
          <FormGroup>
            <Label for="basicInput"> Value </Label>
            <Input style={{border:'1px solid #7367f0'}} type="text"  placeholder="Value" onChange={e => handleFilter(e.target.value,FILTERVALUE)} />
          </FormGroup>
        </Col>
      </Row>
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
            className="add-new-btn ml-1 account_submit_btn"
            color="primary"
            onClick={() => handleSidebar()}
            outline>
            <Plus size={15} />
            <span className="align-middle" color="primary" style = {{color : 'white'}}> Add </span>
          </Button>
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
                onClick = {() => {this.modalOne()}}
                />
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-1">
              <User
                className="cursor-pointer"
                size={20}
                onClick = {() => {this.modalOne()}}
                />
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-1">
              <Edit
                className="cursor-pointer"
                size={20}
                onClick = {() => {this.modalOne()}}
                />
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-1">
              <RefreshCw
                className="cursor-pointer"
                size={20}
                onClick = {() => {this.modalOne()}}
                />
            </Col>
            <Col lg="12" md="12" className = "ft-weight mt-1">
              <Delete
                className="cursor-pointer"
                size={20}
                onClick = {() => {this.modalOne()}}
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
    modal1 : false,
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

  modalOne = () => {
    this.setState({modal1 : !this.state.modal1})
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
      modal1
    } = this.state
    return (
      <div>
        <Toolbar select = "Favorite-Media" />
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
          <Modal1
            show={modal1}
            handleSidebar={this.modalOne}
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