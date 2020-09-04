import {Card,Form,Input,Button,message,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,InputNumber,Upload} from 'antd';
import React, {
    useState,
    useEffect
} from 'react';
import {
    UserOutlined,
    UnlockOutlined,
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons';
const FormItem = Form.Item;
const {Option} = Select;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;
const layout = {
    labelCol:{
        xs:24,
        sm:4
    },
    wrapperCol:{
        xs:24,
        sm:16
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};
const FuncForm = () => {
    // 实例化form
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();
    let uploadObj = {
        loading: false,
        imageUrl: ''
    }
    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    // 注册表单提交
    const onFinish = values => {
        console.log(values);
    }

    // 重置
    const onReset = () => {
        form.resetFields();
    };

    // 填充
    const onFill = () => {
        form.setFieldsValue({
            sex:'1',
            age: 18,
            state: '2',
        });
    };

    // 上传
    const  handleChange = info =>{
        if(info.file.status === 'uploading'){
            uploadObj.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => {
                uploadObj = {
                    loading: false,
                    imageUrl: imageUrl
                }
            })
        }
    }

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = (file) => {
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

    const uploadButton = (
        <div>
            {uploadObj.loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">上传</div>
        </div>
    );

    return(
        <div style={{width:'100%'}}>
            <Card title="函数组件注册表单">
                <Form form={form} name="horizontal_login" onFinish={onFinish} {...layout}
                initialValues={{
                    sex:'1',
                    age: 18,
                    state: '2',
                    hobby: ['3','4'],
                    married: true
                }}>
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
                        <DatePicker placeholder="请选择你的生日"/>
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
                        <TimePicker placeholder="请选择你的早起时间"/>
                    </FormItem>
                    {/* <FormItem
                        label="头像"
                    >
                        <Upload 
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {uploadObj.imageUrl?<img src={uploadObj.imageUrl} alt="头像" style={{width:'100%'}} />:uploadButton}
                        </Upload>
                    </FormItem> */}
                    <FormItem
                        {...tailLayout}
                        name='remember'
                    >
                        <Checkbox>我已阅读过相关协议</Checkbox>
                    </FormItem>
                    <FormItem shouldUpdate={true} {...tailLayout}>
                        {() => (
                            <div>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={!form.isFieldsTouched(true) ||form.getFieldsError().filter(({ errors }) => errors.length).length
                        }>登录</Button>
                        <Button htmlType="button" onClick={onReset}>
                        重置
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                        填充
                    </Button>
                    </div>
                    )}
                    </FormItem>
                </Form>
            </Card>
        </div>
    )
}

export default FuncForm;