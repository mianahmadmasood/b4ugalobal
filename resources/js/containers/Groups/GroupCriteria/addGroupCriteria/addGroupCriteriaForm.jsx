import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space, Select, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import RadioItems from "../../groupComponents/radioItems";
import MutliSeletItems from "../../groupComponents/multiSelectItems";
import DateRangeItems from "../../groupComponents/dateItems";
import { useSelector } from 'react-redux'

const { Option } = Select;

const DATA_TYPES = [
    { label: "SINGLE OPTION", value: "BOOLEAN" },
    { label: "MULTI DROPDOWN", value: "enum" },
];

const GroupForm = ({ groupHandler, reset, }) => {
    const [form] = Form.useForm();
    const formRef = React.createRef();






    const [fieldType, setFieldType] = useState(DATA_TYPES[0].value);
    const [fieldTypes, setFieldTypes] = useState([]);
    const loadingGroupCriteriaAddButton = useSelector(state => state.groupCriteriaReducer.loadingGroupCriteriaAddButton)


    useEffect(() => {
        onReset()
        console.log('Reset :>> ');
        setFieldType(DATA_TYPES[0].value)
        setFieldTypes([])
    }, [reset])


    const onReset = () => {
        formRef.current.resetFields();


    };


    // useEffect(() => {

    //     setFieldType([DATA_TYPES[0].value])


    // }, [])

    const onFinish = (values) => {
        let itemsArray = values.group.map((item, i) => ({
            ...item,
            type: fieldTypes[i],
        }));
        const group = { group: [...itemsArray] };
        console.log('group :>> ', group);
        setFieldTypes([])

        groupHandler(group);
        // let itemsObject = values.items.reduce(
        //     (obj, item, i) => ({
        //         ...obj,
        //         [item.key.replace(/\s/g, "")]: item.value,
        //     }),
        //     {
        //         name: values.groupName,
        //         createdAt: new Date(Date.now()).toLocaleString(),
        //     }
        // );

        // itemsArray = itemsArray.map(({ key, value }) => ({ [key]: value }));
        // itemsArray = [{ groupName: values.groupName }, ...itemsArray];
        //console.log("itemArray", itemsArray);
    };

    const handleChange = (e) => {
        setFieldType(e);
        // form.setFieldsValue({ radioValues: [] });
    };

    const onAdd = (addFunc) => {
        const types = [...fieldTypes, fieldType];
        setFieldTypes([...types]);
        addFunc();
    };
    const onRemove = (name, index, removeFunc) => {
        const types = fieldTypes.filter((type, i) => i !== index);
        console.log("filtered types", types);
        setFieldTypes([...types]);
        removeFunc(name);
    };

    return (
        <div>
            <Form
                initialValues={{
                    ["dataType"]: DATA_TYPES[0].value,
                }}
                form={form}
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                autoComplete="off"
                ref={formRef}
            >

                <Form.Item
                    name="dataType"
                    label="Select Type to Add Field"
                    rules={[
                        {
                            required: true,
                            message: "Missing Data Type",
                        },
                    ]}
                >
                    <Select options={DATA_TYPES} onChange={handleChange} />
                </Form.Item>
                <Form.List name="group">
                    {(fields, { add, remove }) => (
                        <>
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    style={{ background: "lightgray" }}
                                    onClick={() => onAdd(add)}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add
                                </Button>
                            </Form.Item>
                            <Divider />
                            {fields.map((field, i) => {
                                console.log('fieldTypes[i] :>> ', fieldTypes[i]);
                                if (fieldTypes[i] === "BOOLEAN")
                                    return (
                                        <RadioItems key={i} field={field}>
                                            <MinusCircleOutlined
                                                onClick={() =>
                                                    onRemove(
                                                        field.name,
                                                        i,
                                                        remove
                                                    )
                                                }
                                            />
                                        </RadioItems>
                                    );
                                else if (fieldTypes[i] === "enum")
                                    return (
                                        <MutliSeletItems key={i} field={field}>
                                            <MinusCircleOutlined
                                                onClick={() =>
                                                    onRemove(
                                                        field.name,
                                                        i,
                                                        remove
                                                    )
                                                }
                                            />
                                        </MutliSeletItems>
                                    );
                                else if (fieldTypes[i] === "dateRange")
                                    return (
                                        <DateRangeItems key={i} field={field}>
                                            <MinusCircleOutlined
                                                onClick={() =>
                                                    onRemove(
                                                        field.name,
                                                        i,
                                                        remove
                                                    )
                                                }
                                            />
                                        </DateRangeItems>
                                    );
                            })}
                        </>
                    )}
                </Form.List>
                <Form.Item style={{ marginTop: 20, textAlign: "right" }}>
                    <Button loading={loadingGroupCriteriaAddButton} disabled={loadingGroupCriteriaAddButton} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default GroupForm;
