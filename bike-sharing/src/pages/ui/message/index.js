import React from 'react';
import { Card, Button, Spin, message} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default class Message extends React.Component{
    handleMessage = (type) => {
        message[type]('lj的全局提示');
    }
    render(){
        return(<div>
            <Card title="全局提示框">
                <Button type="primary" onClick={()=>{this.handleMessage('success')}}>Success</Button>
                <Button type="primary" onClick={()=>{this.handleMessage('info')}}>Info</Button>
                <Button type="primary" onClick={()=>{this.handleMessage('warning')}}>Warning</Button>
                <Button type="primary" onClick={()=>{this.handleMessage('error')}}>Error</Button>
                <Button type="primary" onClick={()=>{this.handleMessage('loading')}}>Loading</Button>
            </Card>
        </div>);
    };
}