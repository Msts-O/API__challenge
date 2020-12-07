import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount(){
         axios.get("http://localhost:3001/api/v1/posts")
              .then(response =>{
              console.log(response)
              this.setState({posts: response.data})
             })
              .catch(error =>{
              console.log(error)
             })
      }
    render() {
       const { posts } = this.state
       return(
         <div>
           List of posts
        {
          posts&&posts.map(post => <div key={post.id}>{post.title},{post.content}</div>)
        }
         </div>
       )
    }
}

    export default App;