import React from 'react';

export default function(field) {
    return (
        <div className="form-group">
            <label>{field.label}</label>
            <input
                type={field.type}
                className="form-control"
                {...field.input}
            />
        </div>
    );
}