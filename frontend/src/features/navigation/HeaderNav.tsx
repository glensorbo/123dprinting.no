import { Layout, Button, Menu } from 'antd';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SunOutlined,
  MoonOutlined,
} from '@ant-design/icons';

import { useStateDispatch, useStateSelector } from '../../hooks/useState';
import { getTheme, setTheme } from '../../state/slice/theme';

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

export const HeaderNav: React.FC<Props> = (props) => {
  const theme = useStateSelector(getTheme);

  const dispatch = useStateDispatch();

  const themeToggleHandler = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Header
      style={{
        padding: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button
        type='text'
        icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => props.setCollapsed(!props.collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
          color: 'white',
        }}
      />
      <Menu
        theme='dark'
        style={{ width: '100%' }}
        mode='horizontal'
        selectedKeys={['Label_1']}
        items={[
          {
            label: 'Label 1',
            key: 'Label_1',
          },
          {
            label: 'Label 2',
            key: 'Label_2',
          },
        ]}
      />
      <Button
        type='text'
        icon={theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
        style={{
          fontSize: '16px',
          marginRight: '40px',
          color: 'white',
        }}
        onClick={themeToggleHandler}
      />
    </Header>
  );
};
