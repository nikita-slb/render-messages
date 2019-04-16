import React, { Component } from 'react';
import PropTypes from 'prop-types';

function markupNormal(children, params) {
    return (
        <>
            { params.inline ? " " : <br/> }
            <span>
                { params.content }
                { children }
            </span>
        </>
    )
}

function markup_dd_bold(children, params) {
    return (
        <>
            { params.inline ? " " : <br/> }
            <b>
                {params.content}
                {children}
            </b>
        </>
    )
}

function markup_dd_od(children, params) {

    return (
        <>
            { params.inline ? " " : <br/> }
            <span className="text-size-12 gray">
                { MessageNodeText.replaceNbsp(params.content) }
                { children }
            </span>
        </>
    )
}

function markup_dd_rn(children, params) {
    return (
        <>
            { params.inline ? " " : <br/> }
            <span className="gray">
                { params.content }
                { children }
            </span>
        </>
    )
}

function markup_dd_rp(children, params) {
    return (
        <>
        { params.inline ? " " : <br/> }
        <span className="green">
                { params.content }
            { children }
            </span>
        </>
    )
}

function markup_dd_rneg(children, params) {
    return (
        <>
            { params.inline ? " " : <br/> }
            <span className="red">
                { params.content }
                { children }
            </span>
        </>
    )
}

class MessageNodeText extends Component{

    static get styles() {
        return [
            {
                name: 'normal',
                markup: markupNormal
            },
            {
                name: 'bold',
                markup: markup_dd_bold
            },
            {
                name: 'order_data',
                markup: markup_dd_od
            },
            {
                name: 'review_neutral',
                markup: markup_dd_rn
            },
            {
                name: 'review_positive',
                markup: markup_dd_rp
            },
            {
                name: 'review_negative',
                markup: markup_dd_rneg
            }
        ]
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

        if ( MessageNodeText.styles.length <= 0 ) return null;

        return MessageNodeText.styles.find( style => style.name === styleName )
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
