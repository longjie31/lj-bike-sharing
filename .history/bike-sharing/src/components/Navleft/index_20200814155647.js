import React from 'react';
import MenuConfig from './../../config/menuConfig'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './index.less';

const { SubMenu } = Menu;


export default class Navleft extends React.Component{
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    constructor(props){
        super(props);
        this.state = {
            name:'后台管理中心',
            collapsed: false,
        };
    }

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        // 获取变量以后，要用setState存进去，一旦调用setState就会调用render
        this.setState({
            menuTreeNode
        });
    }

    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    // 菜单渲染 有子节点渲染submenu，没有子节点渲染menu.item这和antd里的一样
    renderMenu =(data)=>{
        /* return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
        return <Menu.Item  title={item.title} key={item.key}>{item.title}</Menu.Item>
        }) */
        return 
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
    }

    render(){
        return(
            <div>
                <div className="logo">
                    <img src="/assets/icon_log.svg" alt=""/>
                    <h1>{this.state.name}</h1>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}>
                {this.state.menuTreeNode}
        </Menu>
            </div>
        );
    }
}
