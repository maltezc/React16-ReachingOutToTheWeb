import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost'
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});


class Blog extends Component {
    state = {
        auth: true,
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                {/*<Route path="/"  render={() => <h1>Home 2</h1>}/>*/}
                <Switch> {/*allows react to only render the first one it matches*/}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} />: null}
                    <Route path="/posts" component={Posts}/>
                    <Route render ={() => <h1>Not Found</h1>}/> {/*This is a catch all for all unknown routes. Should always be at end of list. cant work with redirect / */}
                    {/*<Redirect from='/' to='/posts' />*/}
                    {/*<Route path="/" component={Posts}/>*/}

                </Switch>

            </div>
        );
    }
}

export default Blog;