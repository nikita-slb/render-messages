import React, { Component } from 'react';

class MessageNodeParagraph extends Component{
    static get styles() {
        return []
    }

    getStyle() {
        const { format } = this.props;
        const { style: styleName } = this.props.params;

        if ( MessageNodeParagraph.styles.length <= 0 ) return null;

        return MessageNodeParagraph.styles.find( style => style.format === format && style.name === styleName )
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

export default MessageNodeParagraph;
