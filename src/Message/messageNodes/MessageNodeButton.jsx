import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inlineMarkup } from '../helpers';

const ACTIONS = {
    GO_ORDER: 'go_order',
    PLACE_NEW_ORDER: 'place_new_order'
};

function markup_default(children, params, href) {
    return (
        <>
            { inlineMarkup(params) }
            <a href={href}>
                {params.content}
                { children }
            </a>
        </>
    )
}

function markup_border_button(children, params, href) {
    return (
        <>
            { inlineMarkup(params) }
            <a href={href} target='_blank' rel="noopener noreferrer" className="btn btn-small-size btn-blue-no-fill" >
                {params.content}
                {children}
            </a>
        </>
    )
}

function markup_no_border_button(children, params, href) {
    return (
        <>
            { inlineMarkup(params) }
            <a href={href} target='_blank' rel="noopener noreferrer" className="btn btn-small-size btn-link" >
                {params.content}
                {children}
            </a>
        </>
    )
}

class MessageNodeButton extends Component{

    constructor(props) {
        super(props);

        this.styles = [
            {
                name: 'border_button',
                markup: markup_border_button
            },
            {
                name: 'no_border_button',
                markup: markup_no_border_button
            }
        ];

        this.href = {
            root: 'https://allput.ru',
            actionUrl: this.generateActionUrl()
        };

        this.generatedHref = this.href.actionUrl ? `${this.href.root}${this.href.actionUrl}` : '#';
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
        const { style: styleName } = this.props.params;

        if ( this.styles.length <= 0 ) return null;

        return this.styles.find(style => style.name === styleName )
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

MessageNodeButton.defaultProps = {
    children: null,
};

MessageNodeButton.propTypes = {
    params: PropTypes.shape({
        style: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        inline: PropTypes.bool.isRequired,
        action: PropTypes.string.isRequired,
        id: PropTypes.number
    }),
    children: PropTypes.array
};

export default MessageNodeButton;
