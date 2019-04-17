import React, { Component } from 'react'

export default class MessageNodeAbstract extends Component{

    static replaceNbsp(string) {
        const length = string.split("&nbsp;").length;
        let newStr = string;
        for(let i = 0; i < length; ++i){
            newStr = newStr.replace('&nbsp;', '\u00a0');
        }
        return newStr;
    }

    constructor(props){
        super(props);

        this.styles = [];
    }

    markupDefault() {}

    getStyle() {
        const { style: styleName } = this.props.params;
        if ( this.styles.length <= 0 ) return null;
        return this.styles.find( style => style.name === styleName )
    }

    inlineMarkup() {
        return this.props.params.inline ? " " : <br/>
    }

    render() {
        const styleObj = this.getStyle();

        if (!styleObj) {
            return this.markupDefault();
        } else {
            return styleObj.markup()
        }
    }
}
