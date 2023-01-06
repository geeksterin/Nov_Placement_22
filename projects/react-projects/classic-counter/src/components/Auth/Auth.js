import React from "react";
import { Button, Form, Input } from "antd";
import {  toast } from 'react-toastify';


const Auth = (props) => {

  const onLogin = async (values) => {
    console.log("Success:", values);
    try {
      const response = await fetch("http://localhost:4500/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json()
      if(response.status === 200) {
        localStorage.setItem("authorization", data.token)
        props.history.push("/")
        toast("Login Success")
        return;
        // console.log(props)
      }

      toast(data.message)

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onLogin}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
      {/* <ToastContainer /> */}
    </Form>
  );
};

export default Auth;
