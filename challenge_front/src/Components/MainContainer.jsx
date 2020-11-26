
import React from 'react'
import axios from 'axios'
import PostsContainer from './PostsContainer'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import FormContainer from './FormContainer'
import update from 'react-addons-update'

class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:3001/posts')
            .then((results) => {
                console.log(results)
                this.setState({posts: results.data})
            })
            .catch((data) =>{
                console.log(data)
            })
    }

    createPost = (post) => {
        axios.post('http://localhost:3001/posts',{post: post} )
            .then((response) => {
                const newData = update(this.state.posts, {$push:[response.data]})
                this.setState({posts: newData})
            })
            .catch((data) =>{
                console.log(data)
            })
    }

    deletePost = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`)
            .then((response) => {
                const postIndex = this.state.post.findIndex(x => x.id === id)
                const deletedPost = update(this.state.posts, {$splice: [[postIndex, 1]]})
                this.setState({posts: deletedPost})
                console.log('set')
            })
            .catch((data) =>{
                console.log(data)
            })
     }

    updatePost = (id, post) => {
        axios.patch(`http://localhost:3001/posts/${id}`,{post: post})
            .then((response) => {
                const postIndex = this.state.posts.findIndex(x => x.id === id)
                const posts = update(this.state.posts, {[postIndex]: {$set: response.data}})
                this.setState({posts: posts})
            })
            .catch((data) =>{
                console.log(data)
            })
    }
    render() {
        return (
            <div className='app-main'>
                <FormContainer hendleAdd={this.hendleAdd} createPost={this.createPost}/>
                <PostsContainer postData={this.state.posts} deleatePost={this.deleatePost} updatePost={this.updatePost}/>
            </div>
        );
    }
}

export default MainContainer