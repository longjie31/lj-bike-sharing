import React from 'react';
import { Card, Button, Modal } from 'antd';
import './modal.less';

export default class Modals extends React.Component{

    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }
    
    handleOpen = (type)=>{
        this.setState({
            [type]:true
        })
    }

    handleConfirm = (type)=>{
        Modal[type]({
            title:'确认?',
            content:'你确定点击了吗',
            onOk(){
                console.log('ok');
            },
            onCancel(){
                console.log('取消');
            }
        });
    }

    render(){
        return(
            <div>
                <Card title="基础模态框">
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal title="React" visible={this.state.showModal1} onCancel={()=>{
                    this.setState({
                        showModal1:false
                    })
                }}>
                    <p>lj的Open弹窗</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal2} onCancel={()=>{
                    this.setState({
                        showModal2:false
                    })
                }}
                okText="好哒"
                cancelText="算啦"
                >
                    <p>lj的自定义页脚弹窗</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal3} onCancel={()=>{
                    this.setState({
                        showModal3:false
                    })
                }}
                okText="好哒"
                cancelText="算啦"
                style={{top:20}}
                >
                    <p>lj的顶部20px弹窗</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal4} onCancel={()=>{
                    this.setState({
                        showModal4:false
                    })
                }}
                okText="好哒"
                cancelText="算啦"
                wrapClassName="vertical-center-modal"
                >
                    <p>lj的水平垂直居中弹窗</p>
                </Modal>
                <Card title="信息确认框"> 
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>warning</Button>
                </Card>
            </div>
        )
    }
}