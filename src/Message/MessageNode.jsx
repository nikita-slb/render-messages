import React, { Component } from 'react';
import { NODES } from './NODES';

const DEFAULTS = {
    STYLE_TYPES: {
        formatType: 'desktop_default',
        styleName: 'default'
    }
}

class MessageNode extends Component {

    constructor(props) {
        super(props);

        const { type, params, children } = props.nodeData;

        this.state = {
            type,
            params,
            children,
            formatType: props.formatType
        }

    }

    renderNodeByType({ childNodes }) {

        const { type, params, formatType } = this.state;

        const _returnMarkup = node => node.markup({params, childNodes});

        const _findStyle = node => {
            const configDefault = {
                ...DEFAULTS.STYLE_TYPES
            }
            let styleName = '';
            params ? styleName = params.style : styleName = configDefault.styleName;

            const nodeStyles = node.styles;
            
            let resultNode = nodeStyles.find( style => 
                style.formatType === formatType && style.name === styleName )
            if( resultNode ) {
                return resultNode;        
            } 

            resultNode = nodeStyles.find( style => 
                style.formatType === formatType && style.name === configDefault.styleName );
            if( resultNode ) {
                return resultNode;        
            } 

            resultNode = nodeStyles.find( style => 
                style.formatType === configDefault.formatType && style.name === styleName );
            if( resultNode ) {
                return resultNode;        
            } 

            return nodeStyles.find( style => 
                style.formatType === configDefault.formatType && style.name === configDefault.styleName ); 

        }
        
        if (type === 'root') {
            return childNodes;
        }

        const node = NODES.find( node => type === node.type );
        let nodeStyled = _findStyle(node);

        return _returnMarkup(nodeStyled);

    }

    renderNode() {
        
        const { type, params, children, formatType } = this.state;

        const _getNodeChildren = (children) => {
            return children ? children.map( (childNode, key) => 
                <MessageNode key={key} formatType={formatType} nodeData={childNode} />
            ) : null;
        };

        const childNodes = _getNodeChildren(children);
        return (
            this.renderNodeByType({ childNodes })
        );
    }

    render() {
       return (
           <>
               { this.renderNode() }
           </>

       )
    }
}

export default MessageNode;
