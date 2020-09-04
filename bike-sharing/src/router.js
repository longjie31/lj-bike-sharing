import React from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login/login'
import Admin from './admin';
import Button from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Spins from './pages/ui/spin/spin';
import Notification from './pages/ui/notification'
import Message from './pages/ui/message'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'
import NoMatch from './pages/nomatch'
import FormLogin from './pages/form/login'
import MyRegister from './pages/form/register'
import MyFuncForm from './pages/form/funcForm'
import MyBasicTab from './pages/table/basicTable'
import MySeniorTab from './pages/table/seniorTab'


export default class IRouter extends React.Component{

    render(){
        // 要有个最外层的根组件
        return(
            <HashRouter>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={()=>
                    <Admin>
                        <Switch> 
                            <Route path="/admin/ui/buttons" component={Button} />
                            <Route path="/admin/ui/modals" component={Modals} />
                            <Route path="/admin/ui/loading" component={Spins} />
                            <Route path="/admin/ui/notification" component={Notification} />
                            <Route path="/admin/ui/message" component={Message}/>
                            <Route path="/admin/ui/tabs" component={Tabs}/>
                            <Route path="/admin/ui/gallery" component={Gallery} />
                            <Route path="/admin/ui/carousel" component={Carousels} />
                            <Route path="/admin/form/login" component={FormLogin} />
                            <Route path="/admin/form/register" component={MyRegister} />
                            <Route path="/admin/form/funcForm" component={MyFuncForm} />
                            <Route path="/admin/table/basic" component={MyBasicTab} />
                            <Route path="/admin/table/senior" component={MySeniorTab} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Admin>
                    } />
                </App>
            </HashRouter>
        );
    } 
}