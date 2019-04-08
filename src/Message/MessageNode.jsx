import React, { Component } from 'react';
import { NODES } from './NODES';

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

        const { type, params } = this.state;

        const _returnMarkup = node => node.markup({params, childNodes});
        
        if (type === 'root') {
            return childNodes;
        }

        const node = NODES.find( node => type === node.type );

        let nodeStyled = null;
        const nodeStyledDefault = node.styles.find( style => 
             style.formatType === 'desktop_default' && style.name === 'default'
        );

        if ( params ) {
            nodeStyled = node.styles.find( style => style.name === params.style )
        } else {
            nodeStyled = nodeStyledDefault;
        }

        return nodeStyled ? _returnMarkup(nodeStyled) : _returnMarkup(nodeStyledDefault);

    }

    renderNode() {
        
        const { type, params, children } = this.state;

        const _getNodeChildren = (children) => {
            return children ? children.map( (childNode, key) => <MessageNode key={key} nodeData={childNode} />) : null;
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
