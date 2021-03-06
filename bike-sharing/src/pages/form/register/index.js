import React from 'react';
import {
    Card,Form,Input,Button,message,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,InputNumber,Upload
} from 'antd';
import {
    UserOutlined,
    UnlockOutlined,
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons';
import locale from 'antd/es/locale/zh_CN';

const FormItem = Form.Item;
const {Option} = Select;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;


export default class myRegister extends React.Component{
    state = {
        loading:false,
        disable:true
    }
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
    offsetLayout = {
        wrapperCol:{
            xs:24,
            sm:{
                span:12,
                offset:4
            }
        }
    }

    componentDidMount(){
       /*  this.setState({
            disable: !this.formRef.current.isFieldsTouched(true)||this.formRef.current.getFieldsError().filter(({ errors }) => errors.length).length
        }) */
    }

    handleChange = info =>{
        if(info.file.status === 'uploading'){
            this.setState({loading:true});
            return;
        }
        if (info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl => {
                this.setState({
                    imageUrl,
                    loading: false
                })
            })
        }
    }

    getBase64(img, callback){
        const reader = new FileReader();
        reader.addEventListener('load',()=>callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload(file){
        const isJpgOrPng = file.type ==='image/jpeg' || file.type === 'image/png';
        if(!isJpgOrPng){
            message.error('只能上传JPG/PNG文件');
        }
        const isLt2M = file.size/1024/1024<2;
        if(!isLt2M){
            message.error('图片必须小于2MB');
        }
        return isJpgOrPng && isLt2M;

    }


    // 注册表单提交
    onFinish = values => {
        let userInfo = this.formRef.current.getFieldsValue();
        console.log(userInfo);
        console.log(values);
    }

    onRest = () =>{
        this.formRef.current.resetFields();
    }

    render(){
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return(<div style={{width:'100%'}}>
            <Card title="注册表单">
                <Form ref={this.formRef} onFinish={this.onFinish}
                {...this.formItemLayout}
                initialValues={{
                    sex:'1',
                    age: 18,
                    state: '2',
                    hobby: ['3','4'],
                    married: true
                }}
                >
                    <FormItem label="用户名"
                        name="name"
                        validateTrigger = "onBlur"
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
                    <FormItem label="性别"
                        name="sex"
                        rules = {
                            [
                                {
                                    required: true,
                                    message: '性别不能为空'
                                }
                            ]
                        } >
                        <RadioGroup>
                            <Radio value="1">男</Radio>
                            <Radio value="2">女</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="年龄"
                        name="age"
                        rules = {
                            [
                                {
                                    required: true,
                                    message: '年龄不能为空'
                                }
                            ]
                        } >
                        <InputNumber min={1} max={150} />
                    </FormItem>
                    <FormItem 
                        label="当前状态"
                        name="state"
                        rules = {
                            [
                                {
                                    required: true,
                                    message: '状态不能为空'
                                }
                            ]
                        }
                        >
                        <Select>
                            <Option value="1">闲鱼</Option>
                            <Option value="2">风华年少</Option>
                            <Option value="3">健身狂魔</Option>
                        </Select>
                    </FormItem>
                    <FormItem 
                        label="爱好"
                        name="hobby"
                    >
                        <Select
                            mode="multiple"
                            placeholder="请选择你的爱好"
                        >
                            <Option value="1">篮球</Option>
                            <Option value="2">足球</Option>
                            <Option value="3">跑步</Option>
                            <Option value="4">健身</Option>
                            <Option value="5">动漫</Option>
                            <Option value="6">电影</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        label="是否已婚"
                        name="married"
                        valuePropName="checked"
                    >
                        <Switch checkedChildren="是" unCheckedChildren="否">
                        </Switch>
                    </FormItem>
                    <FormItem 
                        label="生日"
                        name="birthday"
                    >
                        <DatePicker locale={locale} placeholder="请选择你的生日"/>
                    </FormItem>
                    <FormItem 
                        label="联系地址"
                        name="address"
                    >
                        <TextArea 
                            autoSize = {
                                {   
                                    minRows:3,
                                    maxRows:6
                                }
                            }
                            
                        />
                    </FormItem>
                    <FormItem 
                        label="早起时间"
                        name="getUp"
                    >
                        <TimePicker locale={locale} placeholder="请选择你的早起时间"/>
                    </FormItem>
                    <FormItem
                        label="头像"
                    >
                        <Upload 
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl?<img src={imageUrl} alt="头像" style={{width:'100%'}} />:uploadButton}
                        </Upload>
                    </FormItem>
                    <FormItem
                        {...this.offsetLayout}
                        name='remember'
                    >
                        <Checkbox>我已阅读过相关协议</Checkbox>
                    </FormItem>
                    <FormItem {...this.offsetLayout}>
                        <Button type="primary" htmlType="submit">注册</Button> 
                        <Button onClick={this.onRest}>重置</Button> 
                    </FormItem>
                    {/* <FormItem {...this.offsetLayout} shouldUpdate>
                        {
                            ()=>(
                                <Button type="primary" htmlType="submit"
                                    disable={
                                        !this.formRef.current.isFieldsTouched(true) ||this.formRef.getFieldsError().filter(({ errors }) => errors.length).length
                                    }
                                >
                                    注册
                                </Button>
                            )
                        }
                        <Button onClick={this.onRest}>重置</Button> 
                    </FormItem> */}
                </Form>
            </Card>
        </div>);
    }
}