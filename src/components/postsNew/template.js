import React from 'react';
import { Field } from 'redux-form';
import PostFormField from '../postFormField';

export default function() {
    return (
        <form>
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
                label="Post Context"
                type="textarea"
                component={PostFormField}
            />
        </form>
    );
}