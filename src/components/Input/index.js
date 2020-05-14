import React from 'react';

function Input({ onChange, value }) {
    return (
        <input type="text" onChange={ onChange } value={ value } />
    );
}

export default Input;