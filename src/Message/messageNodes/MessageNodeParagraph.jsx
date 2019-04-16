import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageNodeParagraph extends Component{

    static get styles() {
        return []
    }

    getStyle() {
        const { style: styleName } = this.props.params;

        if ( MessageNodeParagraph.styles.length <= 0 ) return null;

        return MessageNodeParagraph.styles.find( style => style.name === styleName )
    }

    render() {

        const { children } = this.props;
        const styleObj = this.getStyle();

        if (!styleObj) {
            return (
                <p>
                    { children }
                </p>
            )
        }
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
