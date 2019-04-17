import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inlineMarkup } from "../helpers";

class MessageNodeLink extends Component{

    constructor(props){
        super(props);

        this.styles = [];
    }


    getStyle() {
        const { format } = this.props;
        const { style: styleName } = this.props.params;

        if ( this.styles.length <= 0 ) return null;

        return this.styles.find(style => style.format === format && style.name === styleName )
    }

    render() {

        const { children, params } = this.props;
        const styleObj = this.getStyle();

        if (!styleObj) {
            return (
                <>
                    { inlineMarkup(params) }
                    <a href={params.url} target="_blank" rel="noopener noreferrer" >{params.content} </a>
                </>
            )
        } else {
            return styleObj.markup(children, params)
        }
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
