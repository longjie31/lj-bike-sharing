import React from 'react';
import { Card, Button, Radio } from 'antd'
import { SearchOutlined, DownloadOutlined, PlusOutlined, EditOutlined, DeleteOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons';

import './buttons.less'
export default class Buttons extends React.Component {
    state = {
        loading: true,
        size: 'default'
    }
    handleCloseLoading = () => {
        this.setState({
            loading: false
        });
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">主按钮</Button>
                    <Button>普通按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="danger">危险按钮</Button>
                    <Button disabled>禁用按钮</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon={<PlusOutlined></PlusOutlined>}>创建</Button>
                    <Button icon={<EditOutlined></EditOutlined>}>编辑</Button>
                    <Button icon={<DeleteOutlined></DeleteOutlined>}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined></SearchOutlined>}></Button>
                    <Button type="primary" icon={<SearchOutlined></SearchOutlined>}>搜索</Button>
                    <Button type="primary" icon={<DownloadOutlined></DownloadOutlined>}>下载</Button>
                </Card>
                <Card title="loading按钮">
                    <Button loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon={<LeftOutlined></LeftOutlined>} style={{marginRight:0}}>返回</Button>
                        <Button type="primary" icon={<RightOutlined></RightOutlined>}>前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button size={this.state.size} type="primary">主按钮</Button>
                    <Button size={this.state.size}>普通按钮</Button>
                    <Button size={this.state.size} type="dashed">虚线按钮</Button>
                    <Button size={this.state.size} type="danger">危险按钮</Button>
                    <Button size={this.state.size} disabled>禁用按钮</Button>
                </Card>
            </div>
        )
    }
}