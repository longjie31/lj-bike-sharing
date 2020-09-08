import {Card,Form,Input,Button,message,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,InputNumber,Upload,Table, Tag, Space } from 'antd';
import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import useCurrentValue from './myHook';

const MyHooks = () =>{
    const [count, setCount] = useState(0);
    const count1 = useRef(0);
    const log = () =>{
        setCount(count + 1);
        setTimeout(() => {
            console.log(count);
        }, 3000);
    }

    const log1 = () =>{
        count1.current ++;
        setTimeout(() => {
            console.log(count1.current);
        }, 3000);
    }

    const [count2, setCount2] = useState(0);
    const count2_ = useRef(count2);

    useEffect(()=>{
        count2_.current = count2;
    })

    const log2 = ()=>{
        setCount2(count2+1);
        setTimeout(() => {
            console.log(count2_.current);
        }, 3000);
    }

    const [count3,setCount3] = useState(0);
    const count3_ = useCurrentValue(0,count3);
    const log3 = () =>{
        setCount3(count3+1);
        setTimeout(() => {
            console.log(count3_.current);
        }, 3000);
    }

    return(<div style={{width:'100%'}}>
        <Card title="hook基本使用">
            <Button type="primary" onClick={log}>点击</Button>
            <p>你点击了{count}次</p>
        </Card>
        <Card title="hooks中ref使用">
            <Button type="primary" onClick={log1}>点击</Button>
            <p>你点击了{count1.current}次</p>
        </Card>
        <Card title="hooks中effect使用">
            <Button type="primary" onClick={log2}>点击</Button>
            <p>你点击了{count2}次</p>
        </Card>
        <Card title="自定义hooks">
            <Button type="primary" onClick={log3}>点击</Button>
            <p>你点击了{count3}次</p>
        </Card>
    </div>);
}

export default MyHooks;