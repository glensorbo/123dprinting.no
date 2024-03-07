import { Layout, Menu, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { UserOutlined, HomeOutlined } from '@ant-design/icons';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';

const { Header, Sider } = Layout;

type Props = {
  collapsed: boolean;
};

export const Sidebar: React.FC<Props> = (props) => {
  const windowDimensions = useWindowDimensions();

  const navigate = useNavigate();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      collapsedWidth={windowDimensions.width < 1024 ? 0 : 80}
    >
      <Layout>
        <Header
          style={{
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <Link
            to={'/'}
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography.Title
              style={{
                fontSize: props.collapsed ? '1rem' : '1.4rem',
                padding: '0.5rem',
                margin: 0,
                backgroundColor: '#EF7C3B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
                color: 'whitesmoke',
                borderRadius: '4px',
                opacity: props.collapsed ? 0 : 100,
                transition: 'font-size 0.2s ease-in-out',
              }}
            >
              123Dprinting.no
            </Typography.Title>
          </Link> */}
        </Header>
      </Layout>
      <Menu
        theme='dark'
        mode='inline'
        style={{ paddingTop: 24, border: 0 }}
        items={[
          {
            label: 'Home',
            key: 'Home',
            icon: <HomeOutlined />,
            onClick: () => navigate('/'),
          },
          {
            label: 'Users',
            key: 'Users',
            icon: <UserOutlined />,
            onClick: () => navigate('/admin/users'),
          },
          {
            label: 'Login',
            key: 'Login',
            icon: <UserOutlined />,
            onClick: () => navigate('/login'),
          },
        ]}
      />
    </Sider>
  );
};
