import {Card,Form,Input,Button,message,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,InputNumber,Upload,Table, Tag, Space } from 'antd';
import React, {
    useState,
    useEffect
} from 'react';


import axios from './../../axios/index'

const MySeniorTable = () =>{

    const [columns, setColumns] = useState([{
        title: '姓名',
        dataIndex: 'name',
        width: 100,
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: 100,
        key: 'age',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        width: 100,
        key: 'sex',
        render(sex) {
            return sex === 1 ? '男' : '女';
        }
    },
    {
        title: '住址',
        dataIndex: 'address',
        width: 100,
        key: 'address',
    }
]);

const [dataSource, setDataSource] = useState([]);

const [loading, setLoading] = useState(true);

    // 调用easy-mock数据
    const request = ()=>{
        axios.ajaxPost({
            url:'/seniortablist',
            data:{
                params:{
                    uid:'1',
                    page:1
                }
            }
        }).then(res=>{
            if (res.code === 1) {
                setDataSource(res.data);
                setLoading(false);
            }
        })
    }

    useEffect(()=>{
        request();
    },[]);

    
    return(
        <div style={{width:'100%'}}>
            <Card title="固定表头">
                <Table 
                loading={loading}
                columns={columns} 
                dataSource={dataSource} 
                pagination={{ pageSize: 30 }} 
                scroll={{ y: 240 }} />,
            </Card>
            <Card title="固定左右侧">
                <Table 
                loading={loading}
                columns={columns} 
                dataSource={dataSource} 
                pagination={{ pageSize: 30 }} 
                scroll={{ y: 240, x: 1300 }} />,
            </Card>
        </div>
        )
}
export default MySeniorTable;
