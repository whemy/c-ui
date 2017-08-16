import React, {Component} from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';

import './style';

class TabPane extends React.Component {
  render() {
    return this.props.children;
  }
}
class Tab extends React.Component{

    static TabPane = TabPane;
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active || 0
        };
    }
    handleClick(active){
        this.setState({
            active: active
        });
    }
    render(){
        return(
            <ul className="c-tabUI">
                {
                    this.props.children.map((item,index) => {
                        return <li key={index} className={classnames('tab', this.state.active == index ? 'active' : '')} onClick={this.handleClick.bind(this, index)}><a className="tab-href">{item.props.tab}</a></li>
                    })
                }
            </ul>
        )
    }
}
export default Tab;