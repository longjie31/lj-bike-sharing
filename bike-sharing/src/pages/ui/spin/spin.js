import React from 'react';
import { Card, Button, Spin, Alert} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


export default class Spins extends React.Component{
    render(){
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
        return(
            <div>
                <Card title="Spin用法">
                    <Spin size="small" style={{margin:'0 1em'}}></Spin>
                    <Spin style={{margin:'0 1em'}}></Spin>
                    <Spin size="large" style={{margin:'0 1em'}}></Spin>
                    <Spin indicator={antIcon} style={{margin:'0 1em'}}></Spin>
                </Card>
                <Card title="内容遮罩">
                    <Spin tip="加载中..." indicator={antIcon}><Alert message="lj" description="欢迎" type="info"></Alert></Spin>
                    <Spin><Alert message="lj" description="欢迎" type="warning"></Alert></Spin>
                </Card>
            </div>
        );
    }
}