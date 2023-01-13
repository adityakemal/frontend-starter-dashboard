import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../auth.api';

import { handleRegister } from '../auth.reducer';


const Register = () => {
    const { loading, isRegister } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <Form
                name="basic"
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
                disabled={loading}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input type='email' />
                </Form.Item>
                <Form.Item
                    label="Nama"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Silahkan masukan Nama anda!',
                        },
                    ]}
                >
                    <Input type='email' />
                </Form.Item>

                <Form.Item
                    label="Sandi"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Silahkan masukan Sandi anda!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Konfirmasi Sandi"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Silahkan masukan Konfirmasi sandi anda!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size='large' className='w-100' loading={loading}>
                        Daftar
                    </Button>
                </Form.Item>
            </Form>
            {/* <p className="text-center text-primary pointer" onClick={() => dispatch(handleRegister())}>
                {isRegister ? 'Masuk Disini!' : 'Daftar Disini!'}
            </p> */}
        </>
    );
};
export default Register;