import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts') // cant put this in a const variable because it is constantly getting data from server
            .then(response => {
                this.setState({posts: response.data});
                // console.log(response);
            })
    }
    render () {
        const posts = this.state.posts.map(post =>{
            return <Post key={post.id} title={<post className="title"></post>}/>
        })
        return (
            <div>
                <section className="Posts">
                    {posts} /*pulls array of posts from post constant*/
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;