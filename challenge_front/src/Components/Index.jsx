import React, { Component } from 'react';
import axios from  'axios';

const Index = () =>{
          return(componentDidMount() {
                axios.get ("http://localhost:3001/api/v1/posts")
                    .then(res => res.json())
                    .then(json => {
                        console.log(json.rates);
                        this.setState({
                            isLoaded: true,
                            items: json.rates
                        });
                    });
            }
export default Index;