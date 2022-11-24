import React from 'react';
import { Form } from "react-bootstrap"

const CheckBox = ({ setSelectAll }) => {
    return (
        <div className="select-all-check-box">
            <Form>
                <Form.Check>
                    <Form.Check.Input
                        type="checkbox"
                        onChange={(e) => {
                            setSelectAll(e.target.checked)
                        }}
                    />
                    <Form.Check.Label>
                        <div>
                            Select All
                        </div>
                    </Form.Check.Label>
                </Form.Check>
            </Form>
        </div>
    );
};

export default CheckBox;