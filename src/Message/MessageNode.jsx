import React, { Component } from 'react';

import MessageNodeParagraph from './messageNodes/MessageNodeParagraph';
import MessageNodeText from './messageNodes/MessageNodeText';
import MessageNodeLink from './messageNodes/MessageNodeLink';
import MessageNodeButton from './messageNodes/MessageNodeButton';

const TYPES = {
    ROOT: 'root',
    PARAGRAPH: 'paragraph',
    TEXT: 'text',
    LINK: 'link',
    BUTTON: 'button'
};

class MessageNode extends Component {

    getNodeChildren() {
        const { children } = this.props.nodeData;
        const formatType = this.props.formatType;

        return children ? children.map( (childNode, key) =>
            <MessageNode key={key} formatType={formatType} nodeData={childNode} />
        ) : null;
    }

    render() {
        const { type }  = this.props.nodeData;
        const params = this.props.nodeData.params || {};
        const formatType = this.props.formatType;

        const nodeChildren = this.getNodeChildren();

        switch (type) {
            case TYPES.PARAGRAPH:
                return ( <MessageNodeParagraph format={formatType} params={params} children={nodeChildren} /> );
            case TYPES.TEXT:
                return ( <MessageNodeText format={formatType} params={params} children={nodeChildren} /> );
            case TYPES.LINK:
                return ( <MessageNodeLink format={formatType} params={params} children={nodeChildren} /> );
            case TYPES.BUTTON:
                return ( <MessageNodeButton format={formatType} params={params} children={nodeChildren} /> );
            default:
                return nodeChildren
        }
    }
}

export default MessageNode;
