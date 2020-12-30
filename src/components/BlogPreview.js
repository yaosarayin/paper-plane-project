import React from "react"
import GraphImg from "graphcms-image"
import {Link} from 'gatsby'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import '../styles/theme.css';

export default function BlogPreview({posts}) {
  return (
    <div>
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 5,
    }}
    dataSource={posts}
    // footer={
    //   <div>
    //     <b>ant design</b> footer part
    //   </div>
    // }
    renderItem={item => (
      <Link to={"/blog/".concat(item.slug)}>
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="" key="list-vertical-message" />,
        ]}
        extra={
          <GraphImg image={item.coverImage} maxWidth={400}/>
        }
      >
        <List.Item.Meta
          //avatar={<Avatar src={item.coverImage} />}
          title={item.title}
          description={item.excerpt}
        />
        {item.content}
        </List.Item>
      </Link>
    )}
  />
    </div>
  )
}
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);