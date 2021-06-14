import React, { Component } from 'react'

import MessageBody from './components/MessageBody'

class Message extends Component {
    render() {
        // const { type, conent } = this.props
        // let color = {
        //     switch(type) {
        //         case 'info':
        //             return 'blue'
        //         case 'warning':
        //             return 'yellow'
        //         case 'danger':
        //             return 'red'
        //         default:
        //             return 'gray'
        //     }}
        return (
            <MessageBody/>
        )
    }
}

const mapStateToProps = (state) => ({
    isVisible: state.message.isVisible,
    messageType: state.message.messageType,
    messageContent: state.message.messageContent
  });

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);