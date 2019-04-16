import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageNodeLink extends Component{

    static propTypes = {
        format: PropTypes.string,
        params: PropTypes.object,
        children: PropTypes.array
    };

    static get styles() {
        return []
    }

    getStyle() {
        const { format } = this.props;
        const { style: styleName } = this.props.params;

        if ( MessageNodeLink.styles.length <= 0 ) return null;

        return MessageNodeLink.styles.find(style => style.format === format && style.name === styleName )
    }

    render() {

        const { children, params } = this.props;
        const styleObj = this.getStyle();

        if (!styleObj) {
            return (
                <>
                    { params.inline ? " " : <br/> }
                    <a href={params.url} target="_blank" rel="noopener noreferrer" >{params.content} </a>
                </>
            )
        } else {
            return styleObj.markup(children, params)
        }
    }
}

export default MessageNodeLink;
