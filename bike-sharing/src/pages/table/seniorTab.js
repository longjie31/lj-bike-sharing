import {Card,Form,Input,Button,message,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,InputNumber,Upload,Table, Tag, Space } from 'antd';
import React, {
    useState,
    useEffect,
    useRef
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
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
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

    const [dataSource, setDataSource] = useState([
        {
            'key': 0,
            'id': 1,
            'name': '@cname',
            'age': 32,
            'address': '西湖区湖底公园1号',
            'sex': 1
        }, {
            'key': 1,
            'id': 2,
            'name': '@cname',
            'age': 30,
            'address': '西湖区湖底公园1号',
            'sex': 1
        }, {
            'key': 2,
            'id': 3,
            'name': '@cname',
            'age': 31,
            'address': '西湖区湖底公园1号',
            'sex': 1
        }, {
            'key': 3,
            'id': 4,
            'name': '@cname',
            'age': 35,
            'address': '西湖区湖底公园1号',
            'sex': 1
        }, {
            'key': 4,
            'id': 5,
            'name': '@cname',
            'age': 36,
            'address': '西湖区湖底公园1号',
            'sex': 1
        }, {
            'key': 5,
            'id': 6,
            'name': '@cname',
            'age': 20,
            'address': '西湖区湖底公园1号',
            'sex': 1
        }, {
            'key': 6,
            'id': 7,
            'name': '@cname',
            'age': 27,
            'address': '西湖区湖底公园1号',
            'sex': 1
        }
    ]);

    const [loading, setLoading] = useState(false);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    // 不能用useState，会导致数据更新不及时
    const currentKeys = useRef([]);

    const [myRowSelection, setMyRowSelection] = useState({
        /* fixed: true,
        selectedRowKeys,
        type: 'checkbox', */
        selections:[
            /* Table.SELECTION_ALL,
            Table.SELECTION_INVERT, */
            {
                key:'all',
                text:'全选',
                onSelect:changeableRowKeys=>{
                    debugger;
                    changeRowKeys(changeableRowKeys);
                    // currentKeys.selectedRowKeys = changeableRowKeys;
                }
            },
            {
                key:'invert',
                text:'反选',
                onSelect:changeableRowKeys=>{
                    debugger;
                    console.log(selectedRowKeys);
                    changeRowKeys(changeableRowKeys);
                }
            },
            {
                key:'odd',
                text:'选择奇数',
                onSelect:changeableRowKeys=>{
                    let newSelectedRowKeys = [];
                    console.log(selectedRowKeys);
                    newSelectedRowKeys = changeableRowKeys.filter((key,index)=>{
                        if(index % 2 !==0){
                            return false;
                        }
                        return true;
                    });
                    changeRowKeys(newSelectedRowKeys);
                }
            },
            {
                key:'even',
                text:'选择偶数',
                onSelect:changeableRowKeys=>{
                    let newSelectedRowKeys = [];
                    console.log(selectedRowKeys);
                    newSelectedRowKeys = changeableRowKeys.filter((key,index)=>{
                        if(index % 2 !==0){
                            return true;
                        }
                        return false;
                    });
                    changeRowKeys(newSelectedRowKeys);
                }
            }
        ],
        onSelect: (record, selected, selectedRows) => {
            console.log('onSelect',record, selected, selectedRows);
            debugger;
            console.log(selectedRowKeys);
            if(selected){
                setSelectedRowKeys(selectedRowKeys=>[...selectedRowKeys,record.key]);
            }else{
                const  newSelectedRowKeys = JSON.parse(JSON.stringify(selectedRowKeys));
                newSelectedRowKeys.filter(item=>item!==record.key);
                setSelectedRowKeys(selectedRowKeys=>[...newSelectedRowKeys]);
            }
        },
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys:${selectedRowKeys}`, `selectedRows:${selectedRows}`);
        },
        onSelectALL:(selected,selectedRows,changeRows)=>{
            console.log(selected,selectedRows,changeRows);
        }
    });


    const changeRowKeys = (index)=>{
        setSelectedRowKeys(selectedRowKeys=>index);
    }

    // 行点击事件
    const rowClick = (record,index)=>{
        setSelectedRowKeys(selectedRowKeys=>[...selectedRowKeys,record.key]);
    }

    const changeRowSelection = (index) => {
        setMyRowSelection(Object.assign(myRowSelection, {
            selectedRowKeys: [index]
        }))
    }

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
        console.log('useEffect:',selectedRowKeys);
        // request();
    },[selectedRowKeys]);

    
    return(
        <div style={{width:'100%'}}>
            <Card title="固定表头">
                <Table 
                loading={loading}
                columns={columns} 
                dataSource={dataSource} 
                pagination={{ pageSize: 30 }} 
                scroll={{ y: 360 }} 
                rowSelection={{selectedRowKeys,...myRowSelection}}
                onRow = {
                    (record,index) => {
                        return {
                            onClick: event => {
                                rowClick(record,index);
                            }, // 点击行
                        };
                    }
                }
                />,
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
