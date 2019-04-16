import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

        return children ? children.map( (childNode, key) =>
            <MessageNode key={key} nodeData={childNode} />
        ) : null;
    }

    render() {
        const { type }  = this.props.nodeData;
        const params = this.props.nodeData.params || {};

        const nodeChildren = this.getNodeChildren();

        switch (type) {
            case TYPES.PARAGRAPH:
                return ( <MessageNodeParagraph params={params} children={nodeChildren} /> );
            case TYPES.TEXT:
                return ( <MessageNodeText params={params} children={nodeChildren} /> );
            case TYPES.LINK:
                return ( <MessageNodeLink params={params} children={nodeChildren} /> );
            case TYPES.BUTTON:
                return ( <MessageNodeButton params={params} children={nodeChildren} /> );
            default:
                return nodeChildren
        }
    }
}

MessageNode.propTypes = {
    nodeData: PropTypes.object.isRequired,
};

export default MessageNode;
