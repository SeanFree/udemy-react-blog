import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Template from './template';
import { fetchPosts } from '../../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return Template.call(this);
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);