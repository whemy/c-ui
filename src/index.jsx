'use strict'
import './config/config.js';
import './components/normal.scss';
import React from 'react';
import {render} from 'react-dom';

import { Box,Header,Item,List,Tab } from './components';
const TabPane = Tab.TabPane;

const listItem = [
    {fl: 'fl',fr: 'fr',src: 'src',tg: 'tg'}
]
const dataItem = [
    {src: 'www.baidu.com',tg:'_',fl:'flItem1',fr:'frItem2'},
    {src: 'www.qq.com',fl:'flItem3',fr:'frItem4'},
    {fl:'flItem5',fr:'frItem6'}
]
const boxItem = [
    {
        img: './src/images/head-like.jpg',
        h2s: ['h2 Title'],
        h3s: ['h3 Title','h33 Title']
    },
    {
        img: './src/images/head-like.jpg',
        h2s: ['h2 Title'],
        h3s: ['h3 Title','h33 Title']
    }
]
render(
    <div>
        <Header title="C-UI Header" rightxt={"点我"} />
        <Tab>
            <TabPane tab="tab 1">内容一</TabPane>
            <TabPane tab="tab 2">内容二</TabPane>
            <TabPane tab="tab 3">内容三</TabPane>
        </Tab>
        <Box box={boxItem} />
        <List />
        <Item list={listItem} data={dataItem} />
    </div>,
    document.getElementById('app')
)
