import React from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'
import App from './App'
export default class IRouter extends React.Component{

    render(){
        // 要有个最外层的根组件
        return(
            <HashRouter>
                <App>

                </App>
            </HashRouter>
        );
    }
}