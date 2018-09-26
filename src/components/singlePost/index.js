import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';
import Template from './template';


class SinglePost extends Component {
    componentDidMount() {
        const { match: { params: { id } }, fetchPost } = this.props;
        fetchPost(id);
    }

    render() {
        return Template.call(this);
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(SinglePost);