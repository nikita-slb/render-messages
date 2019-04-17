import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageNode from './MessageNode.jsx'

/**
 * Message
 */
class Message extends Component {

    constructor(props) {
        super(props);

        this.messageData = JSON.parse(props.message.mobile_message);
        console.log(this.messageData);
    }

    render() {
        return (
            <div className="Mess">
                <div className="MessHeader">
                    <button className="btn btn-small-size btn-link">
                        Удалить
                    </button>
                </div>

                <div className="MessBody" >
                    <MessageNode nodeData={this.messageData} />
                </div>
            </div>
        )
    }
}

Message.displayName = 'Message';

Message.propTypes = {
    message: PropTypes.object.isRequired, // Объект с данными по сообщению
};

export default Message
