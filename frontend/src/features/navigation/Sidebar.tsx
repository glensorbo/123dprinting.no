import { Layout, Menu } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';

// import logo from '../../assets/logo.svg';

const { Header, Sider } = Layout;

type Props = {
  collapsed: boolean;
};

export const Sidebar: React.FC<Props> = (props) => {
  const windowDimensions = useWindowDimensions();

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
          {/* <img src={logo} alt='123dprint.no' style={{ width: '80%' }} /> */}
        </Header>
      </Layout>
      <Menu
        theme='dark'
        mode='inline'
        style={{ paddingTop: 24, border: 0 }}
        items={[
          {
            label: 'Users',
            key: 'Users',
            icon: <UserOutlined />,
          },
        ]}
      />
    </Sider>
  );
};
