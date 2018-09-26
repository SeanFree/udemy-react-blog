import React from 'react';

const RenderInput = ({ type, input }) => {
    let InputEl;

    if (type === "textarea") {
        InputEl =
            <textarea
                className="form-control"
                {...input}
            ></textarea>;
    } else {
        InputEl =
            <input
                type={type}
                className="form-control"
                {...input}
            />;
    }

    return InputEl;
};

export default function(field) {
    const  { label, meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
        <div className={className}>
            <label>{label}</label>
            <RenderInput {...field}/>
            <p className="text-help">
                {touched && error}
            </p>
        </div>
    );
}