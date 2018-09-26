import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Template from './template';
import { fetchPosts } from '../../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            const {
                id,
                title,
                categories,
                content
            } = post;

            const href = `/posts/${id}`;

            return (
                <li key={post.id} className="list-group-item">
                    <Link to={href}>
                        <h4>{title}</h4>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return Template.call(this);
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);