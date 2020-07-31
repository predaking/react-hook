/*
 * @Author: Gong Wei
 * @Date: 2020-07-20 17:13:46
 * @LastEditor: Gong Wei
 * @LastEditTime: 2020-07-30 22:57:12
 * @Description:
 */
import React, { Component } from 'react';
import './App.css';
import MoreList from './moreList/MoreList.js';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // list: [{
            //     // checked: false,
            //     content: '抽到妖刀姬',
            //     // isComplete: false
            // },{
            //     // checked: true,
            //     content: '抽到青行灯',
            //     // isComplete: true
            // },{
            //     // checked: false,
            //     content: '抽到不知火',
            //     // isComplete: false
            // }]
            list: [{
                content: '抽到妖刀姬'
            },{
                content: '抽到妖刀姬'
            },{
                content: '抽到妖刀姬'
            },{
                content: '抽到妖刀姬'
            },{
                content: '抽到妖刀姬'
            },{
                content: '抽到妖刀姬'
            },{
                content: '抽到妖刀姬'
            },{
                content: '抽到妖刀姬'
            },{
                content: '抽到妖刀姬'
            }]
        }
    }

    render() {
        return (
            <MoreList list={this.state.list} />
        )
    }
}

export default App;
