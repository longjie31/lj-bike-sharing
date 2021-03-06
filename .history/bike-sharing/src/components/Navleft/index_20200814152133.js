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
    constructor(props){
        super(props);
        this.state = {
            name:'后台管理中心'
        };
    }

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        // 获取变量以后，要用setState存进去，一旦调用setState就会调用render
        this.setState({
            menuTreeNode
        });
    }

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
        return <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Iteom 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
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
                <Menu theme='dark'>
                {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
