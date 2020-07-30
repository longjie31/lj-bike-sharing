import React from 'react';
import { Row,Col } from 'antd';// 对象的解构，这样就是按需加载
import Header from './components/header/index';
import Footer from './components/footer/index';
import Navleft from './components/Navleft/index';
import './style/component.less'
export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <Navleft></Navleft>
                </Col>
                <Col span="20" className="main">
                    <Header></Header>
                    <Row className="content">
                        内容,this.props.children就是ng里的router-outlet
                        {this.props.children}
                    </Row>
                    <Footer>
                    </Footer>
                </Col>
            </Row>
        );
    }
}