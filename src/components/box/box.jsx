/**
 * boxUI component
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './style';

class Box extends React.Component{
    render(){
        return (
            <div className="c-boxUI">
                <div className="c-boxUI-l"><img src="/src/images/head-like.jpg" alt=""/></div>
                <div className="c-boxUI-m">
                    <h2>h2 title</h2>
                    <h3>h3 title</h3>
                </div>
                <div className="c-boxUI-r"></div>
            </div>
        )
    }
}
export default Box;