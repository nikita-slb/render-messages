import React from 'react';
import PropTypes from 'prop-types';
import MessageNodeAbstract from './MessageNodeAbstract'

class MessageNodeLink extends MessageNodeAbstract{

    markupDefault() {
        const { params, children } = this.props;
        return (
            <>
                { this.inlineMarkup() }
                <a href={params.url} target="_blank" rel="noopener noreferrer" >
                    {params.content}
                    {children}
                </a>
            </>
        )
    }


}

MessageNodeLink.defaultProps = {
    children: null,
};

MessageNodeLink.propTypes = {
    params: PropTypes.shape({
        style: PropTypes.string,
        content: PropTypes.string.isRequired,
        inline: PropTypes.bool.isRequired,
        url: PropTypes.string.isRequired
    }),
    children: PropTypes.array
};

export default MessageNodeLink;
