/**
 * boxUI component
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './style';

class Box extends React.Component{
    render(){
        return (
            <div className="c-boxUI" data-name={this.props.type}>
                <div className="c-boxUI-l"><img src={this.props.img} alt="" /></div>
                <div className="c-boxUI-m">
                    <h2>h2 tilte</h2>
                </div>
                <div className="c-boxUI-r"></div>
            </div>
        )
    }
}
export default Box;