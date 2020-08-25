import React from 'react';
import { Card, Button, Spin, Tabs, message} from 'antd';
import {
    AppleOutlined,
    AndroidOutlined,
    LoadingOutlined
} from '@ant-design/icons';
import { act } from 'react-dom/test-utils';

const { TabPane } = Tabs;

export default class myTabs extends React.Component {
    componentWillMount(){
        const panes = [{
            title: 'Tab 1',
            content: 'Content of Tab 1',
            key: '1'
        },
        {
            title: 'Tab 2',
            content: 'Content of Tab 2',
            key: '2'
        },
        {
            title: 'Tab 3',
            content: 'Content of Tab 3',
            key: '3',
            closable: false,
        }];
        this.setState({
            activeKey:panes[0].key,
            panes
        })
    }

    handleTabOnChange = (activeKey)=>{
        this.setState({
            activeKey
        })
    }

    myEdit = (targetKey,action)=>{
        // 欧因为action的值是add或者remove，就调用了这里的add或remove方法，targetKey就是传的参数,我改成我的my
        this[`my${action}`](targetKey);
    }

    myadd = () => {
        // 就是一个取值，在push一个新值，在赋值的过程
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({
            title:'新标签',
            content:'新标签面板',
            key:activeKey
        })
        this.setState({panes,activeKey})
    }

    myremove = (targetKey) => {// targetKey是删除标签的那个key，activeKey是当前打开的那个key
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane,index)=>{
            // 判断删除标签是哪个，如果是那个就存下来
            if(pane.key === targetKey){
                lastIndex = index - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({
            panes,
            activeKey
        });
    }


        initialPanes = [{
                title: 'Tab 1',
                content: 'Content of Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Content of Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Content of Tab 3',
                key: '3',
                closable: false,
            }
        ];

        state = {
            activeKey: this.initialPanes[0].key,
            panes: this.initialPanes,
        };

        newTabIndex = 0;

        // 改变后设置
        onChange = activeKey => {
            this.setState({
                activeKey
            });
        }


        // 修改后调用
        onEdit = (targetKey, action) => {
            this[action](targetKey);
        };


        // 新增后
        add = () => {
            const {
                panes
            } = this.state;
            const activeKey = `newTab${this.newTabIndex++}`;
            const newPanes = [...panes];
            newPanes.push({
                title: 'New Tab',
                content: 'Content of new Tab',
                key: activeKey
            });
            this.setState({
                panes: newPanes,
                activeKey,
            });
        };

        remove = targetKey => {
            const {
                panes,
                activeKey
            } = this.state;
            let newActiveKey = activeKey;
            let lastIndex;
            panes.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i - 1;
                }
            });
            const newPanes = panes.filter(pane => pane.key !== targetKey);
            if (newPanes.length && newActiveKey === targetKey) {
                if (lastIndex >= 0) {
                    newActiveKey = newPanes[lastIndex].key;
                } else {
                    newActiveKey = newPanes[0].key;
                }
            }
            this.setState({
                panes: newPanes,
                activeKey: newActiveKey,
            });
        };

        handleTabChange = (key) => {
            message.info(`你选择了${key}页签`)
        }


        render() {
        const { panes, activeKey } = this.state;
        return(<div>
            <Card title="Tab标签页">
                <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
                    <TabPane tab="标签1" key="1">111</TabPane>
                    <TabPane tab="标签2" key="2">222</TabPane>
                    <TabPane tab="标签3" key="3">333</TabPane>
                </Tabs>
            </Card>
            <Card title="Tab带图标签页">
                <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
                    <TabPane tab={<span><AppleOutlined />Tab 1</span>} key="1" >111</TabPane>
                    <TabPane tab={<span><AndroidOutlined />Tab 2</span>} key="2">222</TabPane>
                    <TabPane tab={<span><LoadingOutlined />Tab 3</span>} key="3">333</TabPane>
                </Tabs>
            </Card>
            <Card title="Tab动态标签页（官网）">
            <Tabs
                type="editable-card"
                onChange={this.onChange}
                activeKey={activeKey}
                onEdit={this.onEdit}>
                {panes.map(pane => (
                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                    {pane.content}
                </TabPane>))}
            </Tabs>
            </Card>
            <Card title="Tab动态标签页（自写）">
                <Tabs defaultActiveKey="1" 
                onChange={this.handleTabOnChange}
                activeKey = {this.state.activeKey}
                type="editable-card"
                onEdit = {this.myEdit}>
                    {
                        this.state.panes.map(panel=>{
                            return <TabPane tab={panel.title} key={panel.key}>
                                {panel.content}
                            </TabPane>
                        })
                    }
                </Tabs>
            </Card>
        </div>);
    }
}