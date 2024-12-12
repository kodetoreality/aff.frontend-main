import React from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
import classnames from "classnames"
import { ChevronDown, ChevronRight } from "react-feather"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { FormattedMessage } from "react-intl"
import { history } from "../../../../history"
import navigationConfig from "../../../../configs/navigationConfig"
import HappyIcon from "../../../../configs/icon"

class HorizontalSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeParents: [],
      openDropdown: [],
      dropdownHeight: "auto",
      itemHover: null,
      parentHover: null,
      activeChildUrl: null
    }
    this.activeFlag = false
    this.parentItems = []
    this.activeParentItems = []

    this.redirectUnauthorized = () => {
      history.push("misc/not-authorized")
    }
  }

  openDropdown = id => {
    let arr = this.state.openDropdown
    if (!arr.includes(id)) arr.push(id)
    return this.setState({
      openDropdown: arr
    })
  }

  closeDropdown = id => {
    let arr = this.state.openDropdown
    arr.splice(arr.indexOf(id), 1)
    return this.setState({
      openDropdown: arr
    })
  }

  handleItemHover = id => {
    this.setState({
      itemHover: id
    })
  }

  handleParentHover = id => {
    this.setState({
      parentHover: id
    })
  }

  componentDidMount() {
    this.handleActiveParent(this.activeParentItems)
  }

  componentDidUpdate(prevProps) {
    if (this.props.activePath !== prevProps.activePath) {
      this.setState({ openDropdown: [], parentHover: null })
      this.handleActiveParent(this.activeParentItems)
    }
  }

  updateParentItems = (id, mainParent = false) => {
    if (mainParent === true) {
      this.parentItems = []
    }
    if (!this.parentItems.includes(id)) {
      this.parentItems.push(id)
    }
    if (this.activeFlag === true) {
      this.activeParentItems = this.parentItems
      this.parentItems = []
      this.activeFlag = false
    }
  }

  handleActiveParent = arr => {
    this.setState({
      activeParents: arr
    })
    this.activeFlag = false
  }

  renderSubMenu = (submenu, id) => {
    return (
      <DropdownMenu
        tag="ul"
        className="mt-50"
        onMouseEnter={e => e.preventDefault()}
        modifiers={{
          setMaxHeight: {
            enabled: true,
            fn: data => {
              let pageHeight = window.innerHeight,
                ddTop = data.instance.reference.getBoundingClientRect().top,
                ddHeight = data.popper.height,
                maxHeight,
                stylesObj

              if (pageHeight - ddTop - ddHeight - 28 < 1) {
                maxHeight = pageHeight - ddTop - 25
                stylesObj = {
                  maxHeight: maxHeight,
                  overflowY: "auto"
                }
              }

              return {
                ...data,

                styles: {
                  ...stylesObj
                }
              }
            }
          }
        }}>
        {submenu.map(child => {
          const CustomAnchorTag = child.type === "external-link" ? `a` : Link
          if (child.navLink && child.navLink === this.props.activePath) {
            this.activeFlag = true
            this.updateParentItems(id)
          }

          let renderChildItems = (
            <React.Fragment key={child.id}>
              <li
                className={classnames({
                  active: this.state.activeParents.includes(child.id)
                })}>
                <DropdownItem
                  className={classnames("w-100", {
                    hover: this.state.itemHover === child.id,
                    "has-sub": child.children,
                    active:
                      (child.parentOf &&
                        child.parentOf.includes(this.props.activePath)) ||
                      (child.navLink &&
                        child.navLink === this.props.activePath),
                    "has-active-child": this.state.openDropdown.includes(
                      child.id
                    ),
                    disabled: child.disabled
                  })}
                  tag={child.navLink ? CustomAnchorTag : "div"}
                  to={
                    child.filterBase
                      ? child.filterBase
                      : child.navLink && child.type === "item"
                      ? child.navLink
                      : "#"
                  }
                  href={
                    child.type === "external-link" ? child.navLink : undefined
                  }
                  target={child.newTab ? "_blank" : undefined}
                  onMouseEnter={() => this.handleItemHover(child.id)}
                  onMouseLeave={() => this.handleItemHover(null)}>
                  {child.children ? (
                    <Dropdown
                      className={classnames("sub-menu w-100", {})}
                      isOpen={this.state.openDropdown.includes(child.id)}
                      direction={this.state.openLeft ? "left" : "right"}
                      toggle={() => true}
                      onMouseEnter={() => this.openDropdown(child.id)}
                      onMouseLeave={() => this.closeDropdown(child.id)}>
                      <DropdownToggle
                        className="d-flex justify-content-between align-items-center item-content"
                        tag={"div"}
                        onClick={() => this.closeDropdown(child.id)}>
                        <div className="dropdown-toggle-sub text-truncate">
                          <span className="menu-icon align-bottom mr-1">
                            {HappyIcon[child.icon]}
                          </span>
                          <FormattedMessage
                            className="menu-title align-middle"
                            id={child.title}
                          />
                        </div>
                        <ChevronRight
                          className="has-sub-arrow align-middle ml-50"
                          size={15}
                        />
                      </DropdownToggle>
                      {child.children
                        ? this.renderSubMenu(child.children, child.id)
                        : null}
                    </Dropdown>
                  ) : (
                    <div className="item-content">
                      <span className="menu-icon align-top mr-1">
                      {HappyIcon[child.icon]}
                      </span>
                      <span className="menu-title align-middle">
                        <FormattedMessage id={child.title} />
                      </span>
                    </div>
                  )}
                </DropdownItem>
              </li>
            </React.Fragment>
          )

          if (
            child.type === "external-link" ||
            (child.type === "item" &&
              child.permissions &&
              child.permissions.includes(this.props.currentUser)) ||
            child.type === "dropdown" ||
            child.permissions === undefined
          ) {
            return renderChildItems
          } else if (
            child.navLink === this.props.activePath &&
            !child.permissions.includes(this.props.currentUser)
          ) {
            return this.redirectUnauthorized()
          } else {
            return null
          }
        })}
      </DropdownMenu>
    )
  }

  renderDropdown = arr => {
    return arr.map(item => {
      if (
        item.type === "item" &&
        item.navLink &&
        item.navLink === this.props.activePath
      ) {
        this.activeFlag = true
        this.updateParentItems(item.id, true)
      }
      const CustomAnchorTag = item.type === "external-link" ? `a` : Link
      return (
        <li
          className={classnames("nav-item", {
            active: this.state.activeParents.includes(item.id),
            hover: this.state.parentHover === item.id
          })}
          key={item.id}
          ref={el => (this.menuDrodpown = el)}>
          <div
            className={classnames("nav-item-wrapper cursor-pointer", {
              "single-item": item.type === "item"
            })}
            onMouseEnter={() => {
              this.openDropdown(item.id)
              this.handleParentHover(item.id)
            }}
            onMouseLeave={() => {
              this.closeDropdown(item.id)
              this.handleParentHover(null)
            }}>
            {item.children ? (
              <Dropdown
                isOpen={this.state.openDropdown.includes(item.id)}
                className="nav-link"
                toggle={() => this.openDropdown(item.id)}>
                <DropdownToggle className="d-flex align-items-center" tag="div">
                  <div className="dropdown-text">
                    <span className="menu-icon align-middle mr-75">
                    {HappyIcon[item.icon]}
                    </span>
                    <span className="menu-title align-middle">
                      <FormattedMessage
                        className="menu-title align-middle"
                        id={item.title}
                      />
                    </span>
                  </div>
                  <ChevronDown className="ml-50 align-bottom" size={15} />
                </DropdownToggle>

                {this.updateParentItems(item.id, true)}
                {item.children
                  ? this.renderSubMenu(item.children, item.id)
                  : null}
              </Dropdown>
            ) : (
              <CustomAnchorTag
                className={classnames({
                  "nav-link": item.type === "item",
                  hover: this.state.parentHover === item.id
                })}
                to={
                  item.filterBase
                    ? item.filterBase
                    : item.navLink && item.type === "item"
                    ? item.navLink
                    : "#"
                }
                href={item.type === "external-link" ? item.navLink : undefined}
                target={item.newTab ? "_blank" : undefined}>
                <span className="menu-icon align-middle mr-75">
                {HappyIcon[item.icon]}
                </span>
                <span className="menu-title align-middle">
                  <FormattedMessage
                    className="menu-title align-middle"
                    id={item.title}
                  />
                </span>
              </CustomAnchorTag>
            )}
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="horizontal-menu-wrapper">
        <div
          className={classnames(
            "header-navbar navbar-expand-sm navbar navbar-horizontal navbar-shadow",
            {
              "navbar-static": this.props.navbarType === "static",
              "fixed-top": this.props.navbarType === "sticky",
              "floating-nav":
                this.props.navbarType === "floating" ||
                !["static", "sticky", "floating"].includes(
                  this.props.navbarType
                )
            }
          )}>
          <div className="navbar-container main-menu-content">
            <ul className="nav navbar-nav" id="main-menu-navigation">
              {this.renderDropdown(navigationConfig)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    // currentUser: state.auth.login.userRole
    currentUser: [{
      account_holder: "",
      accountholder: "",
      address: "123123",
      area_code: "",
      avatar: "",
      birth_region_code: "",
      birthday: "",
      cashdesk: "",
      cashdesk_id: "",
      city_name: "g",
      contact: "g",
      country_code: "",
      country_name: "India",
      created: "",
      createdby: "admin@gmail.com",
      currency: "USD",
      date: "2020-07-27T19:14:54.075Z",
      domain: "",
      email: "admin@gmail.com",
      emailverify: false,
      firstname: "kumar",
      gender: "male",
      id: 2001,
      idverify: false,
      ip: "g",
      is_email_subscribed: false,
      is_resident: false,
      is_test: false,
      isdelete: false,
      isp: "",
      language: "",
      lastname: "ku",
      loyalty_level: false,
      middle_name: "",
      middlename: "",
      mobilenumber: "",
      password: "admin",
      permission: "admin",
      phone: "",
      region_name: "g",
      resident: false,
      sms_subs: false,
      status: "allow",
      subscribedtoemail: false,
      subscribedtosms: false,
      test: false,
      time_zone: "",
      username: "KiranKumar",
      usingloyaltyprogram: false,
      zip_code: "123123",
      __v: 0,
      _id: "5f1f27aeb1c7aa6720f254d0",
    }]
  }
}
export default connect(mapStateToProps)(HorizontalSidebar)
