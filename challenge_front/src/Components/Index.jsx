import React, { Component } from 'react';
import axios from 'axios'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/posts')
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
                    return <li key={post.content}> { post.name }{ post.title }</li>
                    // postsに格納されているdataをmapメソッドを使い１つ１つ取り出し表示させる
                })}
            </div>
        );
    }
}
export default Index;