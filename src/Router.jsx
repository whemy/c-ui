'use strict';
import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { browserHistory, hashHistory } from 'react-router';

//c-list
import List from './components/list/List.jsx';

//c-box
import Box from './components/box/Box.jsx';

class Routers extends React.Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Router component={List} />
                <Router component={Box} />
            </Router>
        );
    }
}
export default Routers;