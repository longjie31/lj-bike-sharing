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
    constructor(){
        this.s
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
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
        return <Menu.Item  title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }

    render(){
        return(
            <div>
                <div className="logo">
                    <img src="/assets/icon_log.svg" alt=""/>
                    <h1>鸭之后台</h1>
                </div>
                <Menu theme='dark'>
                {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
