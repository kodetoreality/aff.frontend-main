import React from "react"
import Sidebar from "react-sidebar"
import ChatSidebarContent from "./ChatSidebar"
import "../../assets/scss/pages/app-chat.scss"
const mql = window.matchMedia(`(min-width: 992px)`)

class Chat extends React.Component {
  state = {
    userProfile: false,
    sidebarDocked: mql.matches,
    sidebarOpen: false,
    activeChatID: null,
    activeChat: null,
    activeUser: null,
    receiverProfile: false,
    userSidebar: false
  }
  // mounted = false
  handleUserSidebar = status => {
    if (status === "open") {
      this.setState({
        userProfile: true
      })
    } else {
      this.setState({
        userProfile: false
      })
    }
  }
  handleActiveChat = (id, user, chats) => {
    this.setState({
      activeChatID: id,
      activeUser: user,
      activeChat: chats
    })
  }

  UNSAFE_componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  handleReceiverSidebar = status => {
    status === "open"
      ? this.setState({
          receiverProfile: true
        })
      : this.setState({
          receiverProfile: false
        })
  }

  handleUserSidebar = status => {
    status === "open"
      ? this.setState({
          userSidebar: true
        })
      : this.setState({
          userSidebar: false
        })
  }

  render() {
    return (
      <div className="chat-application position-relative">
            <Sidebar
              sidebar={
                <ChatSidebarContent
                  activeChatID={this.state.activeChatID}
                  handleActiveChat={this.handleActiveChat}
                  handleUserSidebar={this.handleUserSidebar}
                  mainSidebar={this.onSetSidebarOpen}
                />
              }
              docked={this.state.sidebarDocked}
              open={this.state.sidebarOpen}
              touch={false}
              sidebarClassName="chat-sidebar"
              contentClassName="sidebar-children d-none"
              pullRight={true}>
              ""
            </Sidebar>
      
       
      </div>
    )
  }
}

export default Chat