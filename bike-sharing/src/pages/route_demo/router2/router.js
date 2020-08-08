import React from 'react'
import{HashRouter as Router,Route,Link} from 'react-router-dom'
import Main from './../route1/main';
import About from './../route1/about';
import Topic from './../route1/topic';
import Home from './home'

export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                 <Home>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route exact={true} path="/about" component={About}></Route>
                    <Route exact={true} path="/topics" component={Topic}></Route>
                 </Home>
            </Router>
        );
    }
}