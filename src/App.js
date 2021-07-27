import React, { Component } from 'react';
import './App.css';
// import MoreList from './MoreList/MoreList';
import TestDemo from './HooksDemo/HooksDemo';
// import ClassComp from './ClassComp/ClassComp';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            content: [1, 2, 3],
            list: [{
                // checked: false,
                content: '抽到妖刀姬',
                // isComplete: false
            }, {
                // checked: true,
                content: '抽到青行灯',
                // isComplete: true
            }, {
                // checked: false,
                content: '抽到不知火',
                // isComplete: false
            }, {
                // checked: false,
                content: '抽到妖刀姬',
                // isComplete: false
            }, {
                // checked: true,
                content: '抽到青行灯',
                // isComplete: true
            }, {
                // checked: false,
                content: '抽到不知火',
                // isComplete: false
            }]
        };
    }

    render() {
        return (
            <div>
                <TestDemo />
            </div>
        );
    }
}

export default App;
