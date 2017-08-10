'use strict'
import './config/config.js';
import './components/normal.scss';
import React from 'react';
import {render} from 'react-dom';

import Header from './components/header/Header';
import Box from './components/box/Box';
import List from './components/list/List';
render(
    <div>
        <Header title="C-UI Header" rightxt={"点我"} />
        <Box img="./src/images/head-like.jpg" h2s={['1','3']} h3s={['lfasdjlas;fjd']} />
        <List />
    </div>,
    document.getElementById('app')
)
