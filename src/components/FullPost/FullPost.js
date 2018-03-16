import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    
    state = {
        loadedPost: null 

    }

    componentDidUpdate () {
        if (this.props.id ) {
            if ( !this.state.loadedPost ||  (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) { //make request if we dont have a post and if we do, make sure it is not the one already loaded  
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id) //getting a specific post by id 
                .then(response => {
                    this.setState({loadedPost: response.data});
                    // console.log(response); 
                });
            
            }   
        }

    }
    
    
    
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;

if (this.props.id) { //inserted to have somethign to display while request is completed  
    post = <p style={{textAlign:'center'}}>Loading!</p>
}

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }

        return post;
    }
}

export default FullPost;