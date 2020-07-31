import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
import Main from './main';
import About from './about';
import Topic from './topic';

export default class Home extends React.Component{
    render(){
        return(
            <HashRouter>
               <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>about</Link>
                        </li>
                        <li>
                            <Link to='/topics'>Topics</Link>
                        </li>
                    </ul>
                    <hr></hr>
                    <Switch>
                    <Route path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                    </Switch>
                </div> 
            </HashRouter>
        );
    }
}