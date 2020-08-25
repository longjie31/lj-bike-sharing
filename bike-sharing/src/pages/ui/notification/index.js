import React from 'react';
import { Card, Button, Spin, Alert, notification} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default class Notification extends React.Component{
    openNotification = (type,direction)=>{
        notification[type]({
            message:'这是提醒',
            description:'这是描述',
            placement: direction
        });
    }
    render(){
        return(
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>{this.openNotification('success','topLeft')}}>Success</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('info','topRight')}}>Info</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('warning','bottomLeft')}}>Warning</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('error','bottomRight')}}>Error</Button>
                </Card>
            </div>
        );
    }
}