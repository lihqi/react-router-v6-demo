import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Space, Table } from "antd";

const columns = [
  {
    title: "分类名称",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "操作",
    key: "action",
    width: 200,
    render: (text: string, record: any) => (
      <Space size="middle">
        <a className="text-green-500">修改分类</a>
        <a className="text-green-500">查看子分类</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
  },
  {
    key: "2",
    name: "Jim Green",
  },
  {
    key: "3",
    name: "Joe Black",
  },
];

const Details = () => {
  const parentID = true;
  const title = parentID ? (
    "一级分类"
  ) : (
    <span>
      <a>一级分类列表</a>
      <ArrowRightOutlined />
      <span>二级分类列表</span>
    </span>
  );
  return (
    <div className="h-full bg-white rounded-lg p-5 shadow-sm">
      <Card className="w-full" title={title} extra={<AddButton />}>
        <Table
          rowKey={({ key }) => key}
          columns={columns}
          dataSource={data}
          bordered
          pagination={{ defaultCurrent: 1, pageSize: 1, showQuickJumper: true }}
        />
      </Card>
    </div>
  );
};

const AddButton = () => {
  return (
    <Button className="flex items-center" type="primary">
      <PlusOutlined />
      添加
    </Button>
  );
};

export default Details;
