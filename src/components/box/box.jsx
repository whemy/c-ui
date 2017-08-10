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
                    {/*父子组件间通信*/}
                    {this.props.h2s.map((h2,i) => {
                        return <h2 key={i}>{h2}</h2>
                    })}
                    {this.props.h3s.map((h3,i) => {
                        return <h3 key={i}>{h3}</h3>
                    })}
                </div>
                <div className="c-boxUI-r"></div>
            </div>
        )
    }
}
export default Box;