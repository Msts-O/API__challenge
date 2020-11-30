import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Index from './Components/Index';
import Create from './Components/Create';
import './App.css';

const App = () => {
    return (
        <Router>
        <div id="App">
        <Header />
        <Switch>
        <Route exact path= '/' component={ Index } />
        <Route  path= '/new'component={ Create } />
        </Switch>
     </div >
    </Router>
);
}
const Header = () => (
    <nav>
    <div>
    <Link to="/">投稿内容</Link>
    <Link to="/new">新規投稿</Link>
     </div>
    </nav>
)

export default App;