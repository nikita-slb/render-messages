import React, { Component } from 'react';

function dd_bb(children, params) {
    return (
        <a href={params.url} target='_blank' className="btn btn-small-size btn-blue-no-fill" >{params.content}</a>
    )
}

function dd_nbb(children, params) {
    return (
        <a href={params.url} target='_blank' className="btn btn-small-size btn-link" >{params.content}</a>
    )
}

class MessageNodeButton extends Component{
    static get styles() {
        return [
            {
                format: 'desktop_default',
                name: 'border_button',
                markup: dd_bb
            },
            {
                format: 'desktop_default',
                name: 'no_border_button',
                markup: dd_nbb
            }
        ]
    }

    getStyle() {
        const { format } = this.props;
        const { style: styleName } = this.props.params;

        if ( MessageNodeButton.styles.length <= 0 ) return null;

        return MessageNodeButton.styles.find(style => style.format === format && style.name === styleName )
    }

    render() {

        const { children, params } = this.props;
        const styleObj = this.getStyle();

        if (!styleObj) {
            return (
                <a href={params.url}>{params.content} </a>
            )
        } else {
            return styleObj.markup(children, params)
        }
    }
}

export default MessageNodeButton;
