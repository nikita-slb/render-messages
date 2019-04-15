import React, { Component } from 'react';

function dd_bold(children, params) {
    return (
        <b>
            {params.content}
            {children}
        </b>
    )
}

function dd_od(children, params) {
    return (
        <span className="text-size-12 gray">
            { params.content }
            <br/>
            { children }
        </span>
    )
}

class MessageNodeText extends Component{
    static get styles() {
        return [
            {
                format: 'desktop_default',
                name: 'bold',
                markup: dd_bold
            },
            {
                format: 'desktop_default',
                name: 'order_data',
                markup: dd_od
            }
        ]
    }

    getStyle() {
        const { format } = this.props;
        const { style: styleName } = this.props.params;

        if ( MessageNodeText.styles.length <= 0 ) return null;

        return MessageNodeText.styles.find( style => style.format === format && style.name === styleName )
    }

    render() {

        const { children, params } = this.props;
        const styleObj = this.getStyle();

        if (!styleObj) {
            return (
                <span>
                    { params.content }
                    { children }
                </span>
            )
        } else {
            return styleObj.markup(children, this.props.params)
        }
    }
}

export default MessageNodeText;
