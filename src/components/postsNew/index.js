import _ from 'lodash';

import { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../../actions';


import Template from './template';

class PostsNew extends Component {
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        return Template.call(this);
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (values.title && values.title.length < 3) {
        errors.title = "Title must be at least 3 characters!";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }

    if (!values.content) {
        errors.content = "Enter some content!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);