/**
 * Created by yongyuehuang on 2017/3/30.
 */
import React, { Component } from 'react';

export default class Button extends Component {

    state = {
        count: 1
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <button
                    style={{border: "1px solid #000"}}
                    onClick={() => this.setState({count: count + 1})}>点击计数器</button>
                <div style={{color: "#f60", fontSize: "20px"}}>{count}</div>
            </div>
        )
    }
}