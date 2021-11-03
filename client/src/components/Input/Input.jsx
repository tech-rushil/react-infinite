import React from "react";
import { Form, Input, Select } from "antd";
import { isArray } from "lodash";

const { Option } = Select;
const { TextArea } = Input;

const InputText = ({
    label,
    name,
    required,
    placeholder,
    style,
    msgText,
    initialValue,
    validateStatus,
    help,
    onChange,
    suffix,
}) => {
    let props = {};
    let inputProps = {};

    // Form.Item props
    if (label) props = { ...props, label };
    if (name) props = { ...props, name };
    if (style) props = { ...props, style };
    if (initialValue) props = { ...props, initialValue };
    if (validateStatus) props = { ...props, validateStatus };
    if (help) props = { ...props, help };
    if (required === undefined) required = true;

    // Input Props
    if (onChange) inputProps = { ...inputProps, onChange };
    if (suffix) inputProps = { ...inputProps, suffix };

    return (
        <Form.Item
            {...props}
            rules={[
                {
                    required: required,
                    message: `Please input your ${msgText} !`,
                },
            ]}
        >
            <Input placeholder={placeholder} {...inputProps} />
        </Form.Item>
    );
};

const InputMail = ({ label, name, required, placeholder, style, msgText, initialValue }) => {
    let props = {};
    if (label) props = { ...props, label };
    if (name) props = { ...props, name };
    if (style) props = { ...props, style };
    if (initialValue) props = { ...props, initialValue };

    return (
        <Form.Item
            {...props}
            rules={[
                {
                    type: "email",
                    message: "The input is not valid E-mail!",
                },
                {
                    required: { required },
                    message: `Please input your ${msgText} !`,
                },
            ]}
        >
            <Input placeholder={placeholder} />
        </Form.Item>
    );
};

const InputSelect = ({
    label,
    name,
    required,
    placeholder,
    style,
    msgText,
    initialValue,
    options,
    onChange,
    values,
    suffix,
}) => {
    let props = {};
    let inputProps = {};
    if (label) props = { ...props, label };
    if (name) props = { ...props, name };
    if (style) props = { ...props, style };
    if (initialValue) props = { ...props, initialValue };

    // Input Props
    if (onChange) inputProps = { ...inputProps, onChange };
    if (suffix) inputProps = { ...inputProps, suffixIcon: suffix };

    let options_jsx = [];

    if (isArray(options)) {
        options_jsx = options.map((ele) => (
            <Option value={ele.toString()} key={ele}>
                {ele}
            </Option>
        ));
    } else {
        for (const [key, value] of Object.entries(options)) {
            let jsx = (
                <Option value={value} key={key}>
                    {key}
                </Option>
            );
            options_jsx.push(jsx);
        }
    }

    return (
        <Form.Item
            {...props}
            rules={[
                {
                    required: { required },
                    message: `Please input your ${msgText} !`,
                },
            ]}
        >
            <Select placeholder={placeholder} {...inputProps}>
                {options_jsx}
            </Select>
        </Form.Item>
    );
};

const InputPassword = ({
    label,
    name,
    required,
    placeholder,
    style,
    msgText,
    initialValue,
    onChange,
    validateStatus,
    help,
}) => {
    let props = {};
    let inputProps = {};
    if (label) props = { ...props, label };
    if (name) props = { ...props, name };
    if (style) props = { ...props, style };
    if (initialValue) props = { ...props, initialValue };

    if (validateStatus) props = { ...props, validateStatus };
    if (help) props = { ...props, help };

    // Input Props
    if (onChange) inputProps = { ...inputProps, onChange };
    return (
        <Form.Item
            className={`custom-${name}`}
            {...props}
            rules={[
                {
                    required: { required },
                    message: `Please input your ${msgText} !`,
                },
            ]}
        >
            <Input.Password placeholder={placeholder} autoComplete="none" {...inputProps} />
        </Form.Item>
    );
};

const InputTextArea = ({
    label,
    name,
    required,
    placeholder,
    style,
    msgText,
    initialValue,
    validateStatus,
    help,
    onChange,
    rows,
}) => {
    let props = {};
    let inputProps = {};

    // Form.Item props
    if (label) props = { ...props, label };
    if (name) props = { ...props, name };
    if (style) props = { ...props, style };
    if (initialValue) props = { ...props, initialValue };
    if (validateStatus) props = { ...props, validateStatus };
    if (help) props = { ...props, help };
    if (required === undefined) required = true;

    // Input Props
    if (onChange) inputProps = { ...inputProps, onChange };
    if (rows) inputProps = { ...inputProps, rows };
    return (
        <Form.Item
            {...props}
            rules={[
                {
                    required: required,
                    message: `Please input your ${msgText} !`,
                },
            ]}
        >
            <TextArea placeholder={placeholder} {...inputProps} />
        </Form.Item>
    );
};

export { InputText, InputMail, InputSelect, InputPassword, InputTextArea };
