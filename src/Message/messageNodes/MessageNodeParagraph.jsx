import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageNodeParagraph extends Component{

    constructor(props){
        super(props);

        this.styles = []
    }

    markupDefault(children) {
        return (
            <p>
                { children }
            </p>
        )
    }

    getStyle() {
        const { style: styleName } = this.props.params;

        if ( this.styles.length <= 0 ) return null;

        return this.styles.find( style => style.name === styleName )
    }

    render() {

        const { children } = this.props;

        return this.markupDefault(children);
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
