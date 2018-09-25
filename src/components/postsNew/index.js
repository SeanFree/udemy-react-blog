import _ from 'lodash';
import { Component } from 'react';
import { reduxForm } from 'redux-form';
import Template from './template';

class PostsNew extends Component {
    render() {
        return Template.call(this);
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);