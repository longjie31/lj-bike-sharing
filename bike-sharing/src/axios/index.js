// 调用方法统一的封装(相当于拦截器)
import JsonP from 'jsonp'
import axios from 'axios'
import Modal from 'antd/lib/modal/Modal';
export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                if(response && response.status === 'success'){
                    resolve(response);
                }else{
                    if(response){
                        reject(response.message);
                    }
                }
            })
        })
    }
    static ajaxPost(options){
        let baseURL = 'https://www.easy-mock.com/mock/5f4f06827e1a7f3146e318ba/bikeShareApi';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'post',
                baseURL,
                timeout:5000,
                params:(options.data && options.data.params) || ''
            }).then((response)=>{
                if(response.status === 200){
                    let res = response.data
                    if(res.code === 1){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.data.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}