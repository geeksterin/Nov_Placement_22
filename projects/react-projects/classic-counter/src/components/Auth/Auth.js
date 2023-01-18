import React from "react";
import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { setUserData } from "../../store/actions/user.action";
import { setAuth } from "../../store/actions/auth.action";
import { setCartData } from "../../store/actions/cart.action";



const Auth = (props) => {
  const dispatch = useDispatch()

  const fetchProfileData = async (token) => {
    try {
      if(!token) {
        toast.error("Please login!")
        return;
      }
      const response = await fetch("http://localhost:4500/profile", {
        method: "GET",
        headers: {
          "authorization": token
        }
      })
      if(response.status === 200) {
        const data = await response.json()
        dispatch(setUserData(data.profile))
        fetchCartData(data.profile.name)
      }

    } catch(e) {
      console.log(e)
    }
  }

  const fetchCartData = async (name) => {
    try {
      if(!name) {
        toast.error("Please login!")
        return;
      }
      const response = await fetch("http://localhost:4500/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user": name
        }

      })
      if(response.status === 200) {
        const data = await response.json()
        dispatch(setCartData(data.cart))
      }
    }
    catch(e) {
      console.log(e)
    }
  }

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
      const data = await response.json();
      if (response.status === 200) {
        fetchProfileData(data.token)
        dispatch(setAuth(data.token))
        props.history.push("/");
        toast.success("Login Success");
        return;
        // console.log(props)
      }

      toast(data.message);

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
