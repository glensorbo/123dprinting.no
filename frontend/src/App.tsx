import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'antd';

import { HeaderNav, Sidebar } from './features/navigation';

import { useWindowDimensions } from './hooks/useWindowDimensions';

import { useStateSelector } from './hooks/useState';
import { getTheme } from './state/slice/theme';

const { Content } = Layout;

export const App: React.FC = () => {
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
