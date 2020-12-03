import React from 'react';
import Index from './Components/Index';
import Create from './Components/Create';
import './App.css';
import { Link } from 'react-router-dom';

// const App = () => {
//     return(
//         <Router>
//         <div id="App">
//         <Header />
//         <Switch>
//         <Route exact path='/index' Components={ Index }/>
//     <Route exact path='/create' Components={ Create } />
//     </Switch>
//     </div>
//     </Router>
// );
// }

class App extends React . Component{
  render(){
        return(
     <div>
    <Link to="/index" >投稿一覧</Link>
    <Link to="/create" >新規投稿</Link>
    </div>
  )
 }
}
export default App;