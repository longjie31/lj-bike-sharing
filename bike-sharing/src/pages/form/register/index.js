import React from 'react';
import {
    Card,
    Form,
    Input,
    Button,
    message,
    Checkbox,
    Radio,
    Select,
    Switch,
    DatePicker,
    TimePicker,
    Upload
} from 'antd';
import {
    UserOutlined,
    UnlockOutlined
} from '@ant-design/icons';
const FormItem = Form.Item;

export default class myRegister extends React.Component{
    formRef = React.createRef();
    formItemLayout = {
        labelCol:{
            xs:24,
            sm:4
        },
        wrapperCol:{
            xs:24,
            sm:16
        }
    }


    // 注册表单提交
    onFinish(){

    }

    render(){
        return(<div style={{width:'100%'}}>
            <Card title="注册表单">
                <Form ref={this.formRef} onFinish={this.onFinish}
                {...this.formItemLayout}>
                    <FormItem label="用户名"
                        name="name"
                        rules = {[
                            {
                                required:true,
                                message: '用户名不能为空'
                            },
                            {
                                min:8,
                                max:16,
                                message:'用户名不少于8位，多于16位'
                            },
                            {
                                pattern: new RegExp(/^[0-9a-zA-Z]+$/),
                                message: '用户名必须是数字和字母组成'
                            }
                        ]}
                    >
                        <Input  placeholder="请输入用户名" prefix={<UserOutlined />} />
                    </FormItem>
                    <FormItem label="用户密码"
                        name="password"
                        rules = {
                            [{
                                    required: true,
                                    message: '密码不能为空'
                                },
                                {
                                    min: 8,
                                    max: 16,
                                    message: '密码不少于8位，多于16位'
                                },
                                {
                                    pattern: new RegExp(/^[0-9a-zA-Z_]+$/),
                                    message: '密码必须是数字，字母和下划线组成'
                                }
                            ]
                        } >
                        <Input placeholder="请输入密码" prefix={<UnlockOutlined />} type="password"/>
                    </FormItem>
                </Form>
            </Card>
        </div>);
    }
}