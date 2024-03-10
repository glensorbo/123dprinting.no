import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input, Layout, Typography } from 'antd';
import { useLoginMutation } from '../state/api/auth-api';

const Content = Layout;

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = (values: {
    username: string;
    password: string;
    remember: boolean;
  }) => {
    console.table(values);
  };

  return (
    <Content style={{ height: '100vh', width: '100vw' }}>
      <Flex align='center' justify='center' style={{ height: '100%' }}>
        <Form
          name='login'
          onFinish={submitHandler}
          validateTrigger={['onBlur', 'onChange']}
          style={{ minWidth: '400px', width: '800px', padding: '1rem' }}
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
            <Form.Item>
              <Flex justify='space-between'>
                <Form.Item name='remember' valuePropName='checked'>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Button
                  size='large'
                  type='primary'
                  htmlType='submit'
                  loading={isLoading}
                  className='login-form-button'
                >
                  Log in
                </Button>
              </Flex>
            </Form.Item>
          </Flex>
        </Form>
      </Flex>
    </Content>
  );
};
