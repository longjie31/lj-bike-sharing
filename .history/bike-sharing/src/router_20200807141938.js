import React from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login/login'
import Admin from './admin';
export default class IRouter extends React.Component{

    render(){
        // 要有个最外层的根组件
        return(
            <HashRouter>
                <App>
                    <Route path='/login' component={Login} />
                    <Route exact path='/admin' component={Admin}></Route>
                </App>
            </HashRouter>
        );
    }
}