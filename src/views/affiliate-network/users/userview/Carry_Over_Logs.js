import React, { Component } from "react";
import UserToolbar from './toolbar';

import DataTable from "react-data-table-component"
import ReactPaginate from "react-paginate"
import { history } from "../../../../history";
import { ChevronDown,  ChevronLeft,  ChevronRight } from "react-feather"
import { connect } from "react-redux"
import { getData , filterData , deleteUser} from "../../../../redux/actions/user/index"
import "../../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../../assets/scss/pages/data-list.scss"
import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import queryString from "query-string"

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


class ListViewConfig extends Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.dataList.data.length !== state.data.length ||
      state.currentPage !== state.parsedFilter.page
    ) {
    return {
      data: props.dataList.data,
      allData: props.dataList.filteredData,
      totalPages: props.dataList.totalPages,
      currentPage: parseInt(state.parsedFilter.page) - 1,
      rowsPerPage: parseInt(state.parsedFilter.perPage),
      totalRecords: props.dataList.totalRecords,
      sortIndex: props.dataList.sortIndex
    }
  }
  return null;
  }

  state = {
      data: [],
      totalPages: 0,
      currentPage: 0,
      columns: [
        {
          name : "Promo code",
          selector : "promo_code",
          sortable: true,
          minWidth: "100px",
        },
        {
            name: "Refferal",
            selector: "Refferal Id",
            sortable: true,
            minWidth: "10px",
        },
        {
            name: "Refferal Code",
            selector: "Refferal Code",
            sortable: true,
            minWidth: "10px",
        },
        {
          name: "Registration Date",
          selector: "date",
          sortable: true,
          minWidth: "100px",
        },

      ],
      allData: [],
      rowsPerPage: 7,
      currentData: null,
      selected: [],
      totalRecords: 0,
      sortIndex: [],
      sidebar: false,
      addNew: false,
      CustomHeaderExpand : false,
      searchData : [],
      value: "",

      parsedFilter : ""
  }
  thumbView = this.props.thumbView;
  UNSAFE_componentWillMount(){
    this.setState({parsedFilter : queryString.parse(this.props.location.search)})
  }
  componentDidMount() {
    // this.props.getData(this.state.parsedFilter)
  }

  handlePagination = page => {
      let { getData } = this.props
      let perPage = this.state.parsedFilter.perPage !== undefined ? this.state.parsedFilter.perPage : 7
      let urlPrefix = this.props.thumbView ? "/data-list/thumb-view/" : `${history.location.pathname}`
      history.push( `${urlPrefix}?page=${page.selected + 1}&perPage=${perPage}` )
      getData({ page: page.selected + 1, perPage: perPage })
      this.setState({ currentPage: page.selected })
  }

  render() {
    let {
      columns,
      data,
      allData,
      totalPages,
      value,
    } = this.state
    return (
      <div>
        <UserToolbar select = {'Carry-Over-Logs'} />
        <div
          id="admindata_table"
          className={`data-list ${ this.props.thumbView ? "thumb-view" : "list-view" }`}>
          <style dangerouslySetInnerHTML={{__html: ``}}></style>
          <DataTable
            columns={columns}
            data={value.length ? allData : data}
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
                forcePage={
                  this.state.parsedFilter.page
                    ? parseInt(this.state.parsedFilter.page - 1)
                    : 0
                }
                onPageChange={page => this.handlePagination(page)}
              />
            )}
            noHeader
            responsive
            pointerOnHover
            selectableRowsHighlight
            onSelectedRowsChange={data => this.setState({ selected: data.selectedRows }) }
            customStyles={selectedStyle}
            sortIcon={<ChevronDown />}
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
})(ListViewConfig)