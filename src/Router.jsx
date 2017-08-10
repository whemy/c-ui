
import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { browserHistory, hashHistory } from 'react-router';

//c-list
import List from './components/list/List';

//c-box
import Box from './components/box/Box';

class Routers extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/list" component={List}/>
                <Route path="/box" component={Box}/>
            </Router>
        );
    }
}
export default Routers;