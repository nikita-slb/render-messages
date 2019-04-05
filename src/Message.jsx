import React, {Component} from 'react';

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

        console.log(JSON.parse(message));

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

class MessageNode extends Component {

    constructor(props) {
        super(props);

        const { type, params, children } = props.nodeData;

        this.state = {
            type,
            params,
            children
        }
    }

    renderNodeByType({type, params, childNodes}) {
        const _renderByType_root = () => {
            return childNodes;
        };

        const _renderByType_paragraph = () => {
            return (
                <p>
                    { childNodes }
                </p>
            )
        };

        const _renderByType_text = () => {

            switch(params.style) {
                case 'bold':
                    return (
                        <b>
                            { params.content }
                            { childNodes }
                        </b>
                    );
                default:
                    return (
                        <>
                           { params.content }
                           { childNodes }
                        </>
                    )

            }

        };

        const _renderByType_link = () => {
            return (
                <a href={params.url}>{params.content} </a>
            )
        };

        switch (type) {
            case 'paragraph':
                return _renderByType_paragraph();
            case 'root':
                return _renderByType_root();
            case 'text':
                return _renderByType_text();
            case 'link':
                return _renderByType_link();
        }
    }

    renderNode({ type, params, children }) {
        const _getNodeChildren = (children) => {
            return children ? children.map( (childNode, key) => <MessageNode key={key} nodeData={childNode} />) : null;
        };

        const childNodes = _getNodeChildren(children);
        return (
            this.renderNodeByType({ type, params, childNodes })
        );
    }

    render() {
       return (
           <>
               { this.renderNode( this.state ) }
           </>

       )
    }
}

export default Message
