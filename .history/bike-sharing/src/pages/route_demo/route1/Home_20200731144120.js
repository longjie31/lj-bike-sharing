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
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div> 
            </HashRouter>
        );
    }
}