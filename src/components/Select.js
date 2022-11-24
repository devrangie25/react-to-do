import React from 'react';
import Form from 'react-bootstrap/Form';

const Select = ({ options, setCategory }) => {
    return (
        <div>
            <Form.Select aria-label="Default select example" onChange={(event) => {
                setCategory(event.target.value)
            }}>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.name} >{option.name}</option>
                    ))
                }
            </Form.Select>
        </div>
    );
};

export default Select;