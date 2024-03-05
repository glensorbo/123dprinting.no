import { Layout, Button } from 'antd';

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
  const chosenTheme = useStateSelector(getTheme);

  const dispatch = useStateDispatch();

  const themeToggleHandler = () => {
    dispatch(setTheme(chosenTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Header
      style={{
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'GrayText',
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
      <Button
        type='text'
        icon={chosenTheme === 'light' ? <MoonOutlined /> : <SunOutlined />}
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
