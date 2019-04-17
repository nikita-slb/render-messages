import React from 'react';
import MessageNodeAbstract from './MessageNodeAbstract'
import PropTypes from 'prop-types';

class MessageNodeText extends MessageNodeAbstract{
    constructor(props) {
        super(props);

        this.styles = [
            {
                name: 'normal',
                markup: this.markupDefault.bind(this)
            },
            {
                name: 'bold',
                markup: this.markupBold.bind(this)
            },
            {
                name: 'order_data',
                markup: this.markupOrderData.bind(this)
            },
            {
                name: 'review_neutral',
                markup: this.markupReviewNeutral.bind(this)
            },
            {
                name: 'review_positive',
                markup: this.markupReviewPositive.bind(this)
            },
            {
                name: 'review_negative',
                markup: this.markupReviewNegative.bind(this)
            }
        ];
    }

    markupDefault() {
        const { children, params } = this.props;

        return (
            <>
                { this.inlineMarkup() }
                <span>
                    { params.content }
                    { children }
                </span>
            </>
        )
    }

     markupBold() {
         const { children, params } = this.props;

         return (
            <>
                { this.inlineMarkup() }
                <b>
                    {params.content}
                    {children}
                </b>
            </>
        )
    }

     markupOrderData() {
        const { children, params } = this.props;

        return (
            <>
                { this.inlineMarkup() }
                <span className="text-size-12 gray">
                    { MessageNodeText.replaceNbsp(params.content) }
                    { children }
                </span>
            </>
        )
    }

     markupReviewNeutral() {
         const { children, params } = this.props;

         return (
            <>
                { this.inlineMarkup() }
                <span className="gray">
                    { params.content }
                    { children }
                </span>
            </>
        )
    }

     markupReviewPositive() {
         const { children, params } = this.props;

         return (
            <>
                { this.inlineMarkup() }
                <span className="green">
                    { params.content }
                    { children }
                </span>
            </>
        )
    }

     markupReviewNegative() {
         const { children, params } = this.props;

         return (
            <>
                { this.inlineMarkup() }
                <span className="red">
                    { params.content }
                    { children }
                </span>
            </>
        )
    }

}

MessageNodeText.defaultProps = {
    children: null
};

MessageNodeText.propTypes = {
    params: PropTypes.shape({
        style: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        inline: PropTypes.bool.isRequired
    }),
    children: PropTypes.array
};

export default MessageNodeText;
