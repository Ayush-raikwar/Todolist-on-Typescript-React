import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../App';
import { About } from './About';
export const Todo:React.FC = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={App} ></Route>
                <Route path="/about" exact component={About} ></Route>
                <Route path="/" render={()=><div>404</div>}></Route>
            </Switch>
        </Router>        
    )
}