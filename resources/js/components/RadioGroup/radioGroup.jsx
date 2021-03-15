import React from "react";
import { Radio } from "antd";

const RadioGroup = ({ options, onChange, value }) => {
    return (
        <div>
            <Radio.Group options={options} onChange={onChange} value={value} />
        </div>
    );
};

export default RadioGroup;
