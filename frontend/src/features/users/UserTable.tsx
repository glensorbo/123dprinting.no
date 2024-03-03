import { Table, TableProps } from 'antd';

import { useGetUsersQuery } from '../../state/api/user-api';
import { User } from '../../types/user';

export const UserTable = () => {
  const { data, isLoading } = useGetUsersQuery();

  console.log(data);
  const columns: TableProps<User>['columns'] = [
    {
      title: 'Name',
      key: 'name',
      render: (_, rec) => (
        <a>
          `${rec.firstName} ${rec.lastName}`
        </a>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return <Table columns={columns} dataSource={data} loading={isLoading} />;
};
