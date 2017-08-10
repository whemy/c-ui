import React from 'react';
import ReactDom, {render} from 'react-dom';

import './style';

class Header extends React.Component{
    render(){
        let {title,rightxt,leftxt,...item} = this.props;
        leftxt && leftxt || '';
        const left = leftxt ? leftxt : <i className='iconfont icon-zuojiantou r180'></i>;
        return (
            <header className="head-com">
                <div className="head-comMain">
                    <a className="head-comDiv left" href="javascript:void(0);">{left}</a>
                    <h1 className="head-comH">{title}</h1>
                    <a className="head-comDiv right" href="javascript:void(0);">{rightxt}</a>
                </div>
                <div className="head-height"></div>
            </header>
        )
    }
}
export default Header;