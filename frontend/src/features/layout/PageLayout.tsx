import { Layout } from 'antd';
import { ToastContainer } from 'react-toastify';
import { useStateSelector } from '../../hooks/useState';
import { useState } from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { getTheme } from '../../state/slice/theme';
import { HeaderNav, Sidebar } from '../navigation';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

export const PageLayout = () => {
  const windowDimensions = useWindowDimensions();

  const [collapsed, setCollapsed] = useState(
    windowDimensions.width < 1024 ? true : false
  );

  const chosenTheme = useStateSelector(getTheme);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <ToastContainer
        theme={chosenTheme}
        position='top-center'
        newestOnTop
        stacked
      />
      <Sidebar collapsed={collapsed} />
      <Layout>
        <HeaderNav collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
