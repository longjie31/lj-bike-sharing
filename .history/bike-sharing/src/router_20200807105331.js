import React from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'
export default class IRouter extends React.Component{

    render(){
        // 要有个U最外层的
        return(
            <HashRouter>
                <div>

                </div>
            </HashRouter>
        );
    }
}