import React, { Component } from 'react';
import axios from  'axios';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get ("https://localhost:3001/api/v1/posts")
            .then(res => res.json())
            .then(json => {
                console.log(json.rates);
                this.setState({
                    isLoaded: true,
                    items: json.rates
                });
            });
    }

    render() {
        const {posts} = this.state
        return (
            <div className='app-main'>
                {posts.map((post) => {
                    return <li key={post.name}> { post.title }{ post.content }</li>
                })}
            </div>
        );
    }
}
export default Index;