import React, { Component } from 'react';
import PropTypes from 'prop-types';

function markup_dd_normal(children, params) {
    return (
        <>
            { params.inline ? "" : <br/> }
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
            { params.inline ? "" : <br/> }
            <b>
                { params.inline ? "" : <br/> }
                {params.content}
                {children}
            </b>
        </>
    )
}

function markup_dd_od(children, params) {

    return (
        <>
            { params.inline ? "" : <br/> }
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
            { params.inline ? "" : <br/> }
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
        { params.inline ? "" : <br/> }
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
            { params.inline ? "" : <br/> }
            <span className="red">
                { params.content }
                { children }
            </span>
        </>
    )
}

class MessageNodeText extends Component{

    static propTypes = {
        format: PropTypes.string,
        params: PropTypes.object,
        children: PropTypes.array
    };

    static get styles() {
        return [
            {
                format: 'desktop_default',
                name: 'normal',
                markup: markup_dd_normal
            },
            {
                format: 'desktop_default',
                name: 'bold',
                markup: markup_dd_bold
            },
            {
                format: 'desktop_default',
                name: 'order_data',
                markup: markup_dd_od
            },
            {
                format: 'desktop_default',
                name: 'review_neutral',
                markup: markup_dd_rn
            },
            {
                format: 'desktop_default',
                name: 'review_positive',
                markup: markup_dd_rp
            },
            {
                format: 'desktop_default',
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
        const { format } = this.props;
        const { style: styleName } = this.props.params;

        if ( MessageNodeText.styles.length <= 0 ) return null;

        return MessageNodeText.styles.find( style => style.format === format && style.name === styleName )
    }

    render() {

        const { children, params } = this.props;
        const styleObj = this.getStyle();

        if (!styleObj) {
            return markup_dd_normal(children, params);
        } else {
            return styleObj.markup(children, this.props.params)
        }
    }
}

export default MessageNodeText;
