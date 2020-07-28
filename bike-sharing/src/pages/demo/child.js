import React from 'react';

export default class Child extends React.Component{
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

    componentWillMount(){
        console.log('加载前');
    }

    componentDidMount(){
        console.log('加载后');
    }

    componentWillReceiveProps(newProps){// 是有参数的,父组件传递过来的属性，一般叫newProps
        console.log('接受属性' + newProps.name);
    }

    shouldComponentUpdate(){
        console.log('组件应该更新');
        return true;
        // 如果返回false就不会走后面更新的方法
    }

    componentWillUpdate(){
        console.log('组件即将更新');
    }

    componentDidUpdate(){
        console.log('组件更新之后');
    }

    render(){
        return <div>
            <p>{this.props.name}</p>
        </div>
    }
}