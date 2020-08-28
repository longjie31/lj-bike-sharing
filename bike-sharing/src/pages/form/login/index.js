import React from 'react';
import {Card, Form, Input, Button, message, Checkbox}from 'antd';
import {
    UserOutlined,
    UnlockOutlined
} from '@ant-design/icons';
const FormItem = Form.Item;

export default class FormLogin extends React.Component{
    formRef = React.createRef();
    // 提交函数
    onFinish = values=>{
        console.log(values);
        const userInfo = this.formRef.current.getFieldValue();
        message.success(`${userInfo.name}登录成功，密码是${userInfo.password}`);
    }

    // 重置调用
    onRest = ()=>{
        this.formRef.current.resetFields();// 内置重置方法
    }

    // 设置特定值
    onFill = ()=>{
        this.formRef.current.setFieldsValue({
            name:'lj',
            password:'123456',
            remeber: 'checked'
        })
    }


    render(){
        return(<div>
            <Card title="登录行内表单">
                <Form layout="inline">
                    <FormItem>
                        <Input placeholder="请输入用户名" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="请输入密码" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary">登录</Button>
                    </FormItem>
                </Form>
            </Card>
            <Card title="登录水平表单（自写）">
                <Form style={{width:300}} ref={this.formRef} onFinish={this.onFinish}
                initialValues={{
                    remember:true
                }}>
                    <FormItem name="name" label="name" initialValue="lj" rules={
                        [
                            {
                                required:true,
                                message:'用户名不能为空'
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
                        ]
                    }
                        >
                        <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
                    </FormItem>
                    <FormItem name="password" label="password" rules={
                        [
                            {
                                required:true,
                                message:'密码不能为空'
                            }
                        ]
                    }
                        >
                        <Input placeholder="请输入密码" type="password" prefix={<UnlockOutlined />} />
                    </FormItem>
                    {<FormItem name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
                    </FormItem>}
                    <FormItem>
                        <Button type="primary" htmlType="submit">登录</Button>
                        <Button onClick={this.onRest}>重置</Button>
                        <Button type="dashed" onClick={this.onFill}>填充表单</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>)
    }
}