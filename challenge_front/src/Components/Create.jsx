import React, { Component } from 'react';
import axios from 'axios'

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: '',
            title: '',
            content: ''
        };
    }

    handleInputValue = (event) => {
        /*  eslint-disable-next-line */
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        axios({
            method : "POST",
            url : "http://localhost:3000/create",
            data : { post: this.state.post, title: this.state.title,content: this.state.content }
        })
            .then((response)=> {
                console.log(this.props)
                this.props.history.push('/');
            })
            .catch((error)=> {
                console.error(error);
            });
    }

    render() {
        const { name,title, content } = this.state;
        return (
            <div>
                <p>新規投稿</p>
                <div>
                        <label>投稿内容 : </label>
                        <input type="text" name="post" value={ name } onChange={ this.handleInputValue } />
                        <label>タイトル:</label>
                        <input type="text" name="title" value={ title } onChange={this.handleInputValue} />
                        <label>内容: </label>
                        <textarea name="content" value={ content } onChange={ this.handleInputValue } />
                        <input type="submit" value="Submit" />
                </div>
            </div>
        );
    }
}


export default Create;