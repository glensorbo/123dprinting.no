import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Carousel, Flex, Form, Input, Layout, Typography } from 'antd';

import { useLoginMutation } from '../state/api/auth-api';

import type { LoginRequest } from '../types/api/login-request';

const Content = Layout;

import image1 from '../assets/01.jfif';
import image2 from '../assets/02.jfif';
import image3 from '../assets/03.jfif';
import image4 from '../assets/04.jpg';

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = (values: LoginRequest) => {
    console.table(values);
  };

  const imageStyle: React.CSSProperties = {
    width: '50vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <Layout>
      <Content style={{ height: '100vh', width: '100vw' }}>
        <Flex align='center' style={{ height: '100%', width: '100%' }}>
          <Form
            name='login'
            onFinish={submitHandler}
            validateTrigger={['onBlur', 'onChange']}
            style={{ width: '50%', padding: '0 7rem' }}
          >
            <Typography.Title style={{ marginBottom: '2rem' }}>
              Login
            </Typography.Title>
            <Flex vertical gap={5}>
              <Form.Item
                name='username'
                rules={[{ required: true, message: 'Username is required!' }]}
              >
                <Input
                  required
                  size='large'
                  name='username'
                  placeholder='Username'
                  prefix={<UserOutlined className='site-form-item-icon' />}
                />
              </Form.Item>
              <Form.Item
                name='password'
                style={{ width: '100%' }}
                rules={[{ required: true, message: 'Password is required!' }]}
              >
                <Input.Password
                  required
                  size='large'
                  placeholder='Password'
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </Form.Item>
              <Form.Item
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <Button
                  size='large'
                  type='primary'
                  htmlType='submit'
                  loading={isLoading}
                >
                  Log in
                </Button>
              </Form.Item>
            </Flex>
          </Form>
          <Content style={{ height: '100%', width: '50%' }}>
            <Carousel autoplay autoplaySpeed={5000}>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${image1})`,
                    ...imageStyle,
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${image2})`,
                    ...imageStyle,
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${image3})`,
                    ...imageStyle,
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${image4})`,
                    ...imageStyle,
                  }}
                />
              </div>
            </Carousel>
          </Content>
        </Flex>
      </Content>
    </Layout>
  );
};
