import React from 'react';
import PropTypes from 'prop-types';
import MessageNodeAbstract from './MessageNodeAbstract'

const ACTIONS = {
    GO_ORDER: 'go_order',
    PLACE_NEW_ORDER: 'place_new_order'
};

class MessageNodeButton extends MessageNodeAbstract{

    constructor(props) {
        super(props);

        this.styles = [
            {
                name: 'border_button',
                markup: this.markupBorderButton.bind(this)
            },
            {
                name: 'no_border_button',
                markup: this.markupNoBorderButton.bind(this)
            }
        ];

        this.href = {
            root: 'https://allput.ru',
            actionUrl: this.generateActionUrl()
        };

        this.generatedHref = this.href.actionUrl ? `${this.href.root}${this.href.actionUrl}` : '#';
    }

    markupDefault() {
        const { children, params } = this.props;
        const href = this.generatedHref;

        return (
            <>
                { this.inlineMarkup() }
                <a href={href}>
                    {params.content}
                    { children }
                </a>
            </>
        )
    }

    markupBorderButton() {
        const { children, params } = this.props;
        const href = this.generatedHref;

        return (
            <>
                { this.inlineMarkup() }
                <a href={href} target='_blank' rel="noopener noreferrer" className="btn btn-small-size btn-blue-no-fill" >
                    {params.content}
                    {children}
                </a>
            </>
        )
    }

    markupNoBorderButton() {
        const { children, params } = this.props;
        const href = this.generatedHref;

        return (
            <>
                { this.inlineMarkup() }
                <a href={href} target='_blank' rel="noopener noreferrer" className="btn btn-small-size btn-link" >
                    {params.content}
                    {children}
                </a>
            </>
        )
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
