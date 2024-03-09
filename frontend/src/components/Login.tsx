import { Flex, Form, Layout } from 'antd';

const Content = Layout;

export const Login = () => {
  return (
    <Layout style={{ height: '100vh', width: '100vw', backgroundColor: 'red' }}>
      <Content>
        <Flex>
          <Form></Form>
        </Flex>
      </Content>
    </Layout>
  );
};
