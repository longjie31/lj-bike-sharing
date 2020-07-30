import React from 'react';
import { Row,Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';
export default class Header extends React.Component{
    state = {}
    // 天气接口值
    // http://api.map.baidu.com/telematics/v3/weather?location=成都&output=json&ak=3HtKGR9rFs5ofitNGG18EsrI25VUz4pU
    componentWillMount(){
        this.setState({
            userName:'破军'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
    }

    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumbTitle">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">
                            {this.state.sysTime}
                        </span>
                        <span className="weather-detail">
                            雨天
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}