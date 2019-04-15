import React, { Component } from 'react';

/*function dd_bold(children, params) {
    return (
        <b>
            {params.content}
            {children}
        </b>
    )
}*/

class MessageNodeLink extends Component{
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
                <a href={params.url} target="_blank" >{params.content} </a>
            )
        } else {
            return styleObj.markup(children, params)
        }
    }
}

export default MessageNodeLink;
