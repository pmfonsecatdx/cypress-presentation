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

  const onButtonSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
      setShowWarning(false);
      setTimeout(() => {
        setShowSuccess(true);
    }, 1000);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      setShowSuccess(false);
      setTimeout(() => {
        setShowWarning(true);
    }, 1000);
    }

    
  };

    return (<>
        <PageHeader
            className="site-page-header"
            title="Contacts"
            subTitle="This is the contacts page"
        />
        <Form
            {...formItemLayout}
            layout="horizontal"
            form={form}
        >
            <Form.Item {...formItemLayout}
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
            <Form.Item label="Job title">
                <Input />
            </Form.Item>
            <Form.Item label="Phone number">
                <Input />
            </Form.Item>
            <Form.Item 
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
            <Form.Item {...buttonItemLayout}>
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
                    message="Please fix the form errors before submitting"
                    description="Thanks for reaching out. We'll get back to you as soon as we can."
                    type="warning"
                    closable
                    onClose={()=>setShowWarning(false)}
                    />
            }
        </Form>
    </>);
}