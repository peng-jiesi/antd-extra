import {Table} from 'antd';
import React from "react";
import {TableResponsive} from "../../src";
import {connect} from "dva";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Address2',
    dataIndex: 'address',
  },
  {
    title: 'Address3',
    dataIndex: 'address',
  },
  {
    title: 'Address4',
    dataIndex: 'address',
  },
  {
    title: 'Address5',
    dataIndex: 'address',
  },
  {
    title: 'Address6',
    dataIndex: 'address',
  },
  {
    title: 'Address7',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

@connect()
export default class TableExt extends React.Component {
  render() {
    return (
      <div style={{ padding: '24px' }}>
        <TableResponsive>
          <Table size="small"
                 bordered
                 tableLayout={'fixed'}
                 columns={columns}
                 dataSource={[]}  />
        </TableResponsive>
      </div>
    )
  }
}

