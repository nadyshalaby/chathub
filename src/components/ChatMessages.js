import React, { Component } from "react";
import ChatForm from "./ChatForm";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import ChatMessage from "./ChatMessage";

class ChatMessages extends Component {
  render() {
    return (
      <div className="col-6 d-flex flex-column justify-content-end p-0">
        <div className="flex-grow-1">
          <Scrollbars
            autoHide
            style={{ height: this.props.windowHeight - 120 }}
          >
            <div className="message-chat">
              <div className="chat-body">
                <ChatMessage
                  isMine
                  avatar="https://bootdey.com/img/Content/avatar/avatar1.png"
                  username="Dennis Novac"
                  time="2:28 PM"
                  msg="Thanks, I think I will use this for my next dashboard system."
                />
                <ChatMessage
                  avatar="https://bootdey.com/img/Content/avatar/avatar2.png"
                  username="John Novac"
                  time="2:28 PM"
                  msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora iste, necessitatibus temporibus at, dolorum, enim sed saepe itaque molestiae sapiente quaerat eligendi voluptas quas voluptate beatae consectetur delectus possimus!"
                />
                <ChatMessage
                  isMine
                  avatar="https://bootdey.com/img/Content/avatar/avatar1.png"
                  username="Dennis Novac"
                  time="2:28 PM"
                  msg="Thanks, I think I will use this for my next dashboard system."
                />
                <ChatMessage
                  avatar="https://bootdey.com/img/Content/avatar/avatar2.png"
                  username="John Novac"
                  time="2:28 PM"
                  msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora iste, necessitatibus temporibus at, dolorum, enim sed saepe itaque molestiae sapiente quaerat eligendi voluptas quas voluptate beatae consectetur delectus possimus!"
                />
                <ChatMessage
                  isMine
                  avatar="https://bootdey.com/img/Content/avatar/avatar1.png"
                  username="Dennis Novac"
                  time="2:28 PM"
                  msg="Thanks, I think I will use this for my next dashboard system."
                />
                <ChatMessage
                  avatar="https://bootdey.com/img/Content/avatar/avatar2.png"
                  username="John Novac"
                  time="2:28 PM"
                  msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora iste, necessitatibus temporibus at, dolorum, enim sed saepe itaque molestiae sapiente quaerat eligendi voluptas quas voluptate beatae consectetur delectus possimus!"
                />
              </div>
            </div>
          </Scrollbars>
        </div>
        <ChatForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  windowHeight: state.global.windowHeight
});

export default connect(mapStateToProps)(ChatMessages);
