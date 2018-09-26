import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PostFormField from '../postFormField';

export default function() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
                name="title"
                label="Title"
                type="text"
                component={PostFormField}
            />
            <Field
                name="categories"
                label="Categories"
                type="text"
                component={PostFormField}
            />
            <Field
                name="content"
                label="Post Content"
                type="textarea"
                component={PostFormField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
    );
}