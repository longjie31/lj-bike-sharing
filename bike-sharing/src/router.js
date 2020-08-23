import React from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login/login'
import Admin from './admin';
import Button from './pages/ui/buttons';
import NoMatch from './pages/nomatch'

export default class IRouter extends React.Component{

    render(){
        // 要有个最外层的根组件
        return(
            <HashRouter>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={()=>
                    <Admin>
                        <Route path="/admin/ui/buttons" component={Button} />
                        <Route component={NoMatch} />
                    </Admin>
                    } />
                </App>
            </HashRouter>
        );
    } 
}