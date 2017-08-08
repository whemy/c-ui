/**
 * c-listUI component
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './style';

class List extends React.Component{
    render(){
        return (
            <div className="c-listUI">
                <ul>
                    <li>
                        <strong className="list-width"><i className="iconfont icon-qiandai"></i></strong>
                        <div className="list-name"><input className="list-input" type="text" /></div>
                        <i className="iconfont icon-zuojiantou"></i>
                    </li>
                </ul>
            </div>
        )
    }
}
export default List;