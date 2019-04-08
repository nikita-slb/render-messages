import React from 'react';

export const NODES = [
    {
        type: 'text',
        styles: [
            {
                formatType: 'desktop_default',
                name: 'default',
                markup: ({params, childNodes}) => (
                    <>
                        { params.content }
                        { childNodes }
                    </>
                )
            },  
            {
                formatType: 'desktop_default',
                name: 'bold',
                markup: ({params, childNodes}) => (
                    <b>
                        { params.content }
                        { childNodes }
                    </b>
                )
            },
            {
                formatType: 'desktop_test',
                name: 'bold',
                markup: ({params, childNodes}) => (
                    <b>
                        { params.content }
                        { childNodes }
                    </b>
                )
            },
            {
                formatType: 'desktop_default',
                name: 'order_data',
                markup: ({params, childNodes}) => (
                    <>
                        { params.content }
                        <br/>
                        { childNodes }
                    </>
                )
            }      
        ]
    },
    {
        type: 'paragraph',
        styles: [
            {
                formatType: 'desktop_default',
                name: 'default',
                markup: ({params, childNodes}) => (
                     <p>
                        { childNodes }
                    </p>
                )
            }
        ]
    },
    {
        type: 'link',
        styles: [
            {
                formatType: 'desktop_default',
                name: 'default',
                markup: ({params, childNodes}) => (
                    <a href={params.url}>{params.content} </a>
                )
            }
        ]
    },
    {
        type: 'button',
        styles: [
            {
                formatType: 'desktop_default',
                name: 'default',
                markup: ({params, childNodes}) => (
                    <a href={params.url} target='_blank' className="btn btn-small-size btn-blue-no-fill" >{params.content}</a>
                )
            }
        ]
    }
]