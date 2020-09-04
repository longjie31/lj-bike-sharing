import {Card,Form,Input,Button,message,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,InputNumber,Upload,Table, Tag, Space } from 'antd';
import React, {
    useState,
    useEffect
} from 'react';
/* import axios from 'axios'; */
import axios from './../../axios/index'

const MyBasicTable = () =>{
    const [columns, setColumns] = useState([{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render(sex) {
                return sex === 1 ? '男' : '女';
            }
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }
    ]);

    const [dataSource, setDataSource] = useState([]);

    // 选择的项和选择项的下标
    let [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const [selectedItem, setSelectedItem] = useState({});

    let [myRowSelection, setMyRowsSelection] = useState({
        fixed: true,
        selectedRowKeys,
        type: 'radio',
    });

    // 多选

    const [selectedRowKeys_, setSelectedRowKeys_] = useState([]);

    const [selectedRowIds, setSelectedRowIds] = useState([]);

    const [test,setTest] = useState(0);

    const [myRowSelection_, setMyRowsSelection_] = useState({
        fixed: true,
        selectedRowKeys_,
        type: 'checkbox',
        onSelect: (record, selectedRowKeys, selectedRows) => {
            debugger;
            let ids = [];
            let keys = [];
            selectedRows.map(item => {
                ids.push(item.id);
                keys.push(item.key);
            });
            console.log(test);
            setTest(test=>{
                let newTest = test+1;
                console.log(newTest);
                return test+1;
            });
            console.log(test);
            ChangeSelectedRowIds(ids);
            ChangeSelectedRowKeys_(keys);
            ChangeMyRowsSelection_(selectedRows);
        }
    });


    const [loading, setLoading] = useState(true);

    const [checkStrictly, setCheckStrictly] = useState(false);

    const ChangeSelectedRowKeys_ = (keys) => {
        setSelectedRowKeys_(keys);
    }

    const ChangeSelectedRowIds = (ids) => {
        setSelectedRowIds(ids);
    }

    const ChangeMyRowsSelection_ = (rows) => {
        setMyRowsSelection_(rows);
    }

    // 调用easy-mock数据
    const request = ()=>{
        axios.ajaxPost({
            url:'/tablelist',
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

    // 行点击事件
    const rowClick = (record,index)=>{
        const keys = [index];
        changeRowKeys(index);
        console.log(selectedRowKeys);
        setSelectedItem(()=>{return record;});
        console.log(selectedItem);
        
        changeRowSelection(index);
        
        console.log(myRowSelection)
    }

    const changeRowKeys = (index)=>{
        setSelectedRowKeys(()=>[...[index]]);
    }

    const changeRowSelection = (index) => {
        /* setMyRowsSelection(newObj => {
            let newObj_ = Object.assign({}, myRowSelection);
            return Object.assign(newObj_, newObj);
        }) */
        setMyRowsSelection(Object.assign(myRowSelection, {
            selectedRowKeys: [index]
        }))
    }

    return(
        <div style={{width:'100%'}}>
            <Card title="基础表格">
                <Table
                    bordered
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                />
            </Card>
            <Card title="动态数据渲染表格" style={{marginTop:'1em'}}>
                <Table
                    bordered
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                />
            </Card>
            <Card title="Mock--单选" style={{marginTop:'1em'}}>
                <Table
                    bordered
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                    rowSelection={myRowSelection}
                    onRow = {
                        (record,index) => {
                            return {
                                onClick: event => {
                                    rowClick(record,index);
                                }, // 点击行
                            };
                        }
                    }
                />
            </Card>
            <Card title="Mock--多选" style={{marginTop:'1em'}}>
                <Table
                    bordered
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                    rowSelection={myRowSelection_}
                    onRow = {
                        (record,index) => {
                            return {
                                onClick: event => {
                                    rowClick(record,index);
                                }, // 点击行
                            };
                        }
                    }
                />
            </Card>
        </div>
    );
}

export default MyBasicTable;