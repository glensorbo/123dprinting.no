import { Table } from 'antd';

export const UsersTable = () => {
  const dataSource = [
    {
      key: Math.random() * 10000,
      name: 'Glen Sørbø',
      email: 'glen.sorbo@whatever.no',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};
