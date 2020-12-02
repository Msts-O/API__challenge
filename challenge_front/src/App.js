import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Index from './Components/Index';
import Create from './Components/Create'
import './App.css';

const App = () => {
    return(
        <Router>
        <div id="App">
        <Header />
        <Switch>
        <Route exact path='/index' component={ Index }/>
    <Route exact path='/create' component={ Create } />
    </Switch>
    <Footer />
    </div>
    </Router>
);
}
const Header = () => (
    <nav className="navbar navbar-expand-xl navbar-light bg-dark">
    <div className="container">
    <Link to="/index" className="navbar-brand text-white">投稿一覧</Link>
    <Link to="/create" className="navbar-brand text-white">新規投稿</Link>
    </div>
    </nav>
)
const Footer = () => (
    <footer className="footer footer-expand-xl bg-light">
    <div className="container">
    <p className="text-muted">Bulletin_board</p>
    </div>
    </footer>
)

export default App;