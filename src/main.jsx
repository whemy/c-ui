import React from 'react';
import ReactDom, {render} from 'react-dom';
import Box from './components/box/Box.jsx';
import './config/config.js';

render(
    <Box />,
    document.getElementById('app')
)