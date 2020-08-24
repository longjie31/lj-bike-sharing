// 调用方法统一的封装(相当于拦截器)
import JsonP from 'jsonp'
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
}