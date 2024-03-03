import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { ConfigProvider, Layout } from 'antd';

import { HeaderNav, Sidebar } from './features/navigation';

import { useWindowDimensions } from './hooks/useWindowDimensions';

import { useStateSelector } from './hooks/useState';
import { getTheme } from './state/slice/theme';
import { useThemeConfig } from './hooks/useThemeConfig';

const { Content } = Layout;

export const App: React.FC = () => {
  const windowDimensions = useWindowDimensions();

  const [collapsed, setCollapsed] = useState(
    windowDimensions.width < 1024 ? true : false
  );

  const chosenTheme = useStateSelector(getTheme);
  const theme = useThemeConfig();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme,
      }}
    >
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
          ></Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
