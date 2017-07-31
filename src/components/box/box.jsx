/**
 * boxUI component
 */

import React from 'react';
import ReactDom from 'react-dom';

import './style';

class Box extends React.Component{
    render(){
        return (
            <div className="c-boxUI">
                <div className="c-boxUI-l"></div>
                <div className="c-boxUI-m"></div>
                <div className="c-boxUI-r"></div>
            </div>
        )
    }
}