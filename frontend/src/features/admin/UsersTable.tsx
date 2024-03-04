import { Button, Flex, Table, TableProps, Tag, Typography } from 'antd';
import { useGetUsersQuery } from '../../state/api/user-api';
import { User } from '../../types/user';

export const UsersTable = () => {
  const { data, isLoading } = useGetUsersQuery();

  const columns: TableProps<User>['columns'] = [
    {
      key: 'name',
      title: 'Name',
      render: (_, r) => (
        <Typography style={{ textTransform: 'capitalize' }}>
          {r.firstName}{' '}
          <span style={{ textTransform: 'capitalize' }}>{r.lastName}</span>
        </Typography>
      ),
      defaultSortOrder: 'ascend',
      sorter: (a, b) => (a.firstName < b.firstName ? -1 : 1),
    },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      width: 200,
      render: (_, r) => (
        <Tag color={r.role === 'admin' ? 'gold' : 'cyan'}>{r.role}</Tag>
      ),
      defaultSortOrder: 'ascend',
      sorter: (a, b) => (a.role < b.role ? -1 : 1),
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => (a.email < b.email ? -1 : 1),
    },
    {
      key: 'action',
      title: 'Actions',
      render: () => (
        <Flex gap={10}>
          <Button type='primary' size='small'>
            View
          </Button>
          <Button danger size='small'>
            Delete
          </Button>
        </Flex>
      ),
    },
  ];
  return (
    <Table
      rowKey='_id'
      size='large'
      pagination={{ pageSize: 13 }}
      loading={isLoading}
      dataSource={data}
      columns={columns}
    />
  );
};
