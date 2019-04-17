import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inlineMarkup } from "../helpers";

function markupNormal(children, params) {
    return (
        <>
            { inlineMarkup(params) }
            <span>
                { params.content }
                { children }
            </span>
        </>
    )
}

function markupBold(children, params) {
    return (
        <>
            { inlineMarkup(params) }
            <b>
                {params.content}
                {children}
            </b>
        </>
    )
}

function markupOrderData(children, params) {

    return (
        <>
            { inlineMarkup(params) }
            <span className="text-size-12 gray">
                { MessageNodeText.replaceNbsp(params.content) }
                { children }
            </span>
        </>
    )
}

function markupReviewNeutral(children, params) {
    return (
        <>
            { inlineMarkup(params) }
            <span className="gray">
                { params.content }
                { children }
            </span>
        </>
    )
}

function markupReviewPositive(children, params) {
    return (
        <>
            { inlineMarkup(params) }
            <span className="green">
                    { params.content }
                { children }
            </span>
        </>
    )
}

function markupReviewNegative(children, params) {
    return (
        <>
            { inlineMarkup(params) }
            <span className="red">
                { params.content }
                { children }
            </span>
        </>
    )
}

class MessageNodeText extends Component{

    constructor(props) {
        super(props);

        this.styles = [
            {
                name: 'normal',
                markup: markupNormal
            },
            {
                name: 'bold',
                markup: markupBold
            },
            {
                name: 'order_data',
                markup: markupOrderData
            },
            {
                name: 'review_neutral',
                markup: markupReviewNeutral
            },
            {
                name: 'review_positive',
                markup: markupReviewPositive
            },
            {
                name: 'review_negative',
                markup: markupReviewNegative
            }
        ];
    }

    static replaceNbsp(string) {
        const length = string.split("&nbsp;").length;
        let newStr = string;
        for(let i = 0; i < length; ++i){
            newStr = newStr.replace('&nbsp;', '\u00a0');
        }
        return newStr;
    }

    getStyle() {
        const { style: styleName } = this.props.params;

        if ( this.styles.length <= 0 ) return null;

        return this.styles.find( style => style.name === styleName )
    }

    render() {

        const { children, params } = this.props;
        const styleObj = this.getStyle();

        if (!styleObj) {
            return markupNormal(children, params);
        } else {
            return styleObj.markup(children, this.props.params)
        }
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
