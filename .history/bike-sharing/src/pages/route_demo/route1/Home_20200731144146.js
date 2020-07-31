import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'

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
                            
                        </li>
                    </ul>
                </div> 
            </HashRouter>
        );
    }
}