/**
 * boxUI component
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './style';

class Box extends React.Component{
    boxRender(){
        const {box = []} = this.props;
        return (
            box.map((item,index) => {
                let {img, h2s, h3s} = item;
                console.log(item,h2s);
                console.log(h2s[1])
                return  <li className="c-boxUI" key={index}>
                            <div className="c-boxUI-l"><img src={img} alt="" /></div>
                            <div className="c-boxUI-m">
                                {/*父子组件间通信*/}
                                {h2s.map((item,p) => {
                                    return <h2 key={p}>{item}</h2>
                                })}
                                {h3s.map((item,q) => {
                                    return <h3 key={q}>{item}</h3>
                                })}
                            </div>
                            <div className="c-boxUI-r"></div>
                        </li>
            })
        )
    }
    render(){
        return(
            <ul className="box">
                {this.boxRender()}
            </ul>
        )
    }
}
export default Box;