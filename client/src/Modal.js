import React from 'react'
// import { sendMessageWithSendGrid } from './sendMessage.js'

class Modal extends React.Component {

    render() {
        return (
            <div id='modalContainer'>
                {(this.props.modalDisplayed) ?
                    <div id='modal'>
                        <div>
                            <textarea id='message' onChange={this.props.writeMessage}></textarea>
                        </div>
                        <div>
                            <button id='sendMessage' className='button' onClick={this.props.sendMessageWithSendGrid}>Send</button>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}

export default Modal
