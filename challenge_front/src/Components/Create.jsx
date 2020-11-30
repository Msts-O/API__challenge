import React, { Component } from 'react';
import axios from 'axios'

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            neko_style: ''
        };
    }

    handleInputValue = (event) => {
        this.setState({
            // setStateメソッドで更新するstateと新しいstateの値を指定する
            [event.target.name]: event.target.value
            // フォームのname="neko_type"のnameを参照
            // this.setState({title: event.target.value})と同じ書き方となる
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method : "POST",
            url : "http://localhost:3001/api/v1/posts",
            data : { name: this.state.name, content: this.state.content }
        })
            .then((response)=> {
                console.log(this.props)
                this.props.history.push('/api/v1/posts');
            })
            .catch((error)=> {
                console.error(error);
            });
    }

    render() {
        const { name,content } = this.state;
        return (
            <div>
                <p>新規投稿</p>
                <div>
                    <label>名前 : </label>
                    <input type="text" name="name" value={ name } onChange={ this.handleInputValue } />
                    <label>猫種 : </label>
                    <input type='text' name="content" value={ content } onChange={ this.handleInputValue } />
                    <input type="button" onClick={this.handleSubmit} value="Submit" />
                </div>
            </div>
        );
    }
}


export default Create;