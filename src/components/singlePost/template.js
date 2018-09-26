import React from 'react';

export default function() {
    const { post } = this.props;
    return (
        <article>
            <h3>{post.title}</h3>
            <h6>{post.categories}</h6>
            <p>{post.content}</p>
        </article>
    );
}
