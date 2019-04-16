import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ACTIONS = {
    GO_ORDER: 'go_order',
    PLACE_NEW_ORDER: 'place_new_order'
};

function markup_default(children, params, href) {
    return (
        <>
            { params.inline ? " " : <br/> }
            <a href={href}>
                {params.content}
                { children }
            </a>
        </>
    )
}

function markup_dd_bb(children, params, href) {
    return (
        <>
            { params.inline ? " " : <br/> }
            <a href={href} target='_blank' rel="noopener noreferrer" className="btn btn-small-size btn-blue-no-fill" >
                {params.content}
                {children}
            </a>
        </>
    )
}

function markup_dd_nbb(children, params, href) {
    return (
        <>
            { params.inline ? " " : <br/> }
            <a href={href} target='_blank' rel="noopener noreferrer" className="btn btn-small-size btn-link" >
                {params.content}
                {children}
            </a>
        </>
    )
}

class MessageNodeButton extends Component{

    static propTypes = {
        format: PropTypes.string,
        params: PropTypes.object,
        children: PropTypes.array
    };

    static get styles() {
        return [
            {
                format: 'desktop_default',
                name: 'border_button',
                markup: markup_dd_bb
            },
            {
                format: 'desktop_default',
                name: 'no_border_button',
                markup: markup_dd_nbb
            }
        ]
    }

    constructor(props) {
        super(props);

        this.href = {
            root: 'https://allput.ru',
            actionUrl: this.generateActionUrl()
        }
    }

    get generatedHref() {
        return this.href.actionUrl ? `${this.href.root}${this.href.actionUrl}` : '#';
    }

    generateActionUrl() {
        const { action, id } = this.props.params;

        switch (action) {
            case ACTIONS.GO_ORDER:
                return `/cabinet/order/${id}`;
            case ACTIONS.PLACE_NEW_ORDER:
                return `/cabinet/addorder-step-1`;
            default:
                return null;
        }
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
            return markup_default(children, params, this.generatedHref)
        } else {
            return styleObj.markup(children, params, this.generatedHref)
        }
    }
}

export default MessageNodeButton;
