import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex from './postsIndex';
import PostsNew from './postsNew';
import SinglePost from './singlePost';

export default function() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/posts/:id" component={SinglePost} />
                <Route path="/" component={PostsIndex} />
            </Switch>
        </BrowserRouter>
    );
}