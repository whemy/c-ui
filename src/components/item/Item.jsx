import React, { Component } from 'react';
import ReactDom from 'react-dom';

import classnames from 'classnames';

import './style';

class Item extends React.Component{
    clListRender(){
        const { data=[],list=[] } = this.props;
        const {href,target,...args} = this.props;
        let fz = false;
        if(data.length > 1){
            fz = true;
        }
        const cName = classnames('cl',{'fz-sm': fz})
        return (
            data.map((item,i) => {
                return  <div className="item" key={i}>
                        {
                            list.map((item2,i2) => {
                                let {fl,fr,src,tg} = item2;
                                let t1 = item[fl];
                                let t2 = item[fr];
                                let url = item[src] ? `http://${item[src]}` : 'javascript:void(0)';
                                let tgt = item[tg] ? item[tg] : '';
                                return  <a href={url} target={tgt} key={i2}>
                                            <div className={cName}>
                                                <div className="fl">{t1}</div>
                                                <div className="fr">{t2}</div>
                                            </div>
                                        </a>
                            })
                        }
                        </div>
            })    
        ) 
    }
    
    render(){
        return (
            <div className="c-itemUI">
                {this.clListRender()}
            </div>
        )
    }
}
export default Item;