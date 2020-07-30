import React from 'react';
import Child from './child'
import {Button} from 'antd'

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd(){
        this.setState({
            count:this.state.count+1
        });
    }

    render(){
        return <div>
            <p>react生命周期介绍</p>
            <Button onClick={this.handleAdd} type="primary">点击一下</Button>
            {/* <button onClick={this.handleAdd}>点击一下</button> */}
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}