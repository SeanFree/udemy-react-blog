import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
            <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                    Add a Post
                </Link>
            </div>
            <h3>Posts</h3>
            <ul className="list-group">
                {this.renderPosts()}
            </ul>
        </div>
    );
}