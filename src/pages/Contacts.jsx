/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { PageHeader, Form, Input, Button, Alert } from 'antd';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};
const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
};

export default () => {
  const [form] = Form.useForm();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showError, setShowError] = useState(false);

  const onButtonSubmit = async () => {
    try {
        const values = await form.validateFields();
        setShowError(false);
        setShowSuccess(false);
        setShowWarning(true);
        setTimeout(() => {
            setShowSuccess(true);
            setShowWarning(false);
        }, 1000);
    } catch (errorInfo) {
        console.log('Failed:', errorInfo);
        setShowSuccess(false);
        setShowWarning(false);
        setShowError(true);
    }
  };

    return (<>
        <PageHeader
            id="header"
            className="header"
            title="Contacts"
            subTitle="This is the contacts page"
        />
        <Form
            {...formItemLayout}
            layout="horizontal"
            form={form}
        >
            <Form.Item className="usernameItem" {...formItemLayout}
                name="username"
                label="Name"
                rules={[
                {
                    required: true,
                    message: 'Please input your name',
                    type:"string"
                },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item name="jobTitle" label="Job title">
                <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone number">
                <Input />
            </Form.Item>
            <Form.Item
                className="emailItem"
                name="email"
                label="Email"
                rules={[
                {
                    required: true,
                    message: 'Please input a valid email address',
                    type:"email"
                }]}>
                <Input />
            </Form.Item>
            <Form.Item className="messageItem" {...formItemLayout}
                name="message"
                label="Message"
                rules={[
                {
                    required: true,
                    message: 'An empty message is not a good contact',
                    type:"string"
                },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item name="submit" {...buttonItemLayout}>
                <Button type="primary" onClick={onButtonSubmit}>Submit</Button>
            </Form.Item>
            {showSuccess && 
                <Alert
                    message="We got your message"
                    description="Thanks for reaching out. We'll get back to you as soon as we can."
                    type="success"
                    closable
                    onClose={()=>setShowSuccess(false)}
                    />
            }
            {showWarning && !showSuccess &&
                <Alert
                    message="Sending message"
                    description="Thanks for reaching out. We'll get back to you as soon as we can."
                    type="warning"
                    closable
                    />
            }
            {showError && !showSuccess &&
                <Alert
                    message="Please fix the form errors before submitting"
                    description="Thanks for reaching out. We'll get back to you as soon as we can."
                    type="error"
                    closable
                    onClose={()=>setShowError(false)}
                    />
            }
        </Form>
    </>);
}