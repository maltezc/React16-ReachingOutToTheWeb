import React, { Component }from 'react';
import axios from "../../../axios";

import Post from '../../../components/Post/Post'
import './Posts.css'



class Posts extends Component {
       state = {
            posts: [],

            }

    componentDidMount() {
    axios.get('/posts') // cant put this in a const variable because it is constantly getting data from server
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts});
            // console.log(response);
        })
        .catch(error => {
            console.log(error)
            // this.setState({error: true})
        })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

        render () {
                    let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
               posts = this.state.posts.map(post =>{
                    return <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
        })
    }
            return (
                <section className="Posts">
                    {posts} {/*pulls array of posts from post constant*/}
                </section>

            )
        }
}

export default Posts;