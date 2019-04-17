import React from 'react';
import PropTypes from 'prop-types';
import MessageNodeAbstract from './MessageNodeAbstract'

class MessageNodeParagraph extends MessageNodeAbstract{

    markupDefault() {
        const { children } = this.props;
        return (
            <p>
                { children }
            </p>
        )
    }

}

MessageNodeParagraph.defaultProps = {
    params: null,
    children: null
};

MessageNodeParagraph.propTypes = {
    params: PropTypes.object,
    children: PropTypes.array
};

export default MessageNodeParagraph;
