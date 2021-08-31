
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { About } from './pages/About';
import { Todo } from './pages/Todo';
import {Contact} from './pages/Contact';

const App =() => {
  

  return(
    <Router>
            <Switch>
                <Route path="/" exact component={Todo} ></Route>
                <Route path="/about" exact component={About} ></Route>
                <Route path="/contact" exact component={Contact}></Route>
                <Route path="/" render={()=><div>404</div>}></Route>
            </Switch>
        </Router> 
    
  )
};

export default App;