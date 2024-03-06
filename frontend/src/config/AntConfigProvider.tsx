import { ConfigProvider } from 'antd';

import { useThemeConfig } from '../hooks/useThemeConfig';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const theme = useThemeConfig();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme,
        token: {
          colorPrimary: '#ef7c3b',
          colorInfo: '#ef7c3b',
          borderRadius: 4,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
