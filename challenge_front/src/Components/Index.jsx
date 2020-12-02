import React, { Component } from 'react';
import axios from 'axios'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/index')
            .then((results) => {
                this.setState({posts: results.data})
            })
            .catch((data) =>{
                console.log(data)
            })
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                {posts.map((post) => {
                    return <li key={post.name}> { post.title }{ post.content }</li>
                })}
            </div>
        );
    }
}
export default Index;