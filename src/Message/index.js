import React, {Component} from 'react';
import MessageNode from './MessageNode.jsx'

class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formatType: props.formatType,
            messageData: JSON.parse(props.message)
        }
    }

    renderMessage() {
        return <MessageNode nodeData={this.state.messageData} />
    }

    render() {

        let {message} = this.props;

        //console.log(JSON.parse(message));

        return (
            <div className="Mess">
                <div className="MessHeader">
                    <button className="btn btn-small-size btn-link">
                        Удалить
                    </button>
                </div>

                <div className="MessBody" >
                    { this.renderMessage() }
                </div>
            </div>
        )
    }
}



export default Message
