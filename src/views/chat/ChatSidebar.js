import React from "react"
import { Card, FormGroup, Input } from "reactstrap"
import { X, Search } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {
  getChats,
  getContactChats,
  searchContacts,
  markSeenAllMessages
} from "../../redux/actions/chat/index"

class ChatSidebar extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.chat.chatContacts.length !== state.chatContacts ||
      props.chat.contacts.length !== state.contacts ||
      props.chat.chats.length !== state.chats ||
      props.chat.status !== state.status
    ) {
      return {
        chatsContacts: props.chat.chatContacts,
        contacts: props.chat.contacts,
        chats: props.chat.chats,
        status: props.chat.status
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  state = {
    chatsContacts: [],
    contacts: [],
    messages: [],
    status: null,
    value: ""
  }

  getChatContents = () => {
    this.props.getChats()
    this.props.getContactChats()
  }

  async componentDidMount() {
    await this.getChatContents()
    this.setState({
      chatsContacts: this.props.chat.chatContacts,
      contacts: this.props.chat.contacts,
      chats: this.props.chat.chats,
      status: this.props.chat.status
    })
  }

  handleOnChange = e => {
    this.setState({ value: e.target.value })
    this.props.searchContacts(e.target.value)
  }

  render() {
    const {  chatsContacts, chats, value } = this.state
    
  
    
      const chatsArr = value.length
      ? this.props.chat.filteredChats
      : chatsContacts
    


    let renderChats =
      chatsArr && Array.isArray(chatsArr)
        ? chatsArr.map(chat => {
                  
            let activeID =
              chats[chat.uid] !== undefined ? chats[chat.uid] : null
            return (
              <li
                key={chat.uid}
                onClick={() => {
                  this.props.handleActiveChat(chat.uid, chat, activeID)
                  this.props.mainSidebar(false)
                  this.props.markSeenAllMessages(chat.uid)
                }}
                className={`${
                  this.props.activeChatID === chat.uid ? "active" : ""
                }`}
              >
             
                <div className="user-chat-info">
                  <div className="contact-info">
                    <h5 className="text-bold-600 mb-0">{chat.displayName}</h5>
                  </div>
                </div>
              </li>
            )
          })
        : null
    return (
      <Card className="sidebar-content h-100">
        <span
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={15} />
        </span>
        <div className="chat-fixed-search">
          <div className="d-flex align-items-center">
            <div className="sidebar-profile-toggle position-relative d-inline-flex">
              </div>
            <FormGroup className="position-relative has-icon-left mx-1 my-0 w-100">
              <Input
                className="round"
                type="text"
                placeholder="Search contact or start a new chat"
                onChange={e => this.handleOnChange(e)}
                value={value}
              />
              <div className="form-control-position">
                <Search size={15} />
              </div>
            </FormGroup>
          </div>
        </div>
        <PerfectScrollbar
          className="chat-user-list list-group"
          options={{
            wheelPropagation: false
          }}
        >
          <ul className="chat-users-list-wrapper media-list">{renderChats}</ul>
        </PerfectScrollbar>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    chat: state.chatApp.chats
  }
}
export default connect(mapStateToProps, {
  getChats,
  getContactChats,
  searchContacts,
  markSeenAllMessages
})(ChatSidebar)
