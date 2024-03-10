import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Carousel, Flex, Form, Input, Layout, Typography } from 'antd';

import { useStateDispatch, useStateSelector } from '../hooks/useState';
import { setCredentials } from '../state/slice/auth';
import { useLoginMutation } from '../state/api/auth-api';

import type { LoginRequest } from '../types/api/login-request';

const Content = Layout;

import image1 from '../assets/01.jfif';
import image2 from '../assets/02.jfif';
import image3 from '../assets/03.jfif';
import image4 from '../assets/04.jpg';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { isAuthenticated } = useStateSelector((state) => state.auth);

  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useStateDispatch();

  const submitHandler = (values: LoginRequest) => {
    login(values)
      .unwrap()
      .then((data) => dispatch(setCredentials(data)))
      .catch(() => toast.error('Username or password are not correct.'));
  };

  const imageStyle: React.CSSProperties = {
    width: '50vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

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
                name='email'
                rules={[{ required: true, message: 'Email is required!' }]}
              >
                <Input
                  required
                  size='large'
                  name='email'
                  placeholder='Email'
                  prefix={<MailOutlined className='site-form-item-icon' />}
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
