import React, {Component} from 'react';

class Message extends Component {

    render() {

        let {message} = this.props;

        console.log(JSON.parse(message.mobile_message));

        return (
            <div className="Mess">
                <div className="MessHeader">
                    <button className="btn btn-small-size btn-link">
                        Удалить
                    </button>
                </div>
                <div className="MessBody"
                     dangerouslySetInnerHTML={{__html: message.message}}/>
            </div>
        )
    }
}

export default Message