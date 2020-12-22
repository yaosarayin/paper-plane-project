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
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <GraphImg image={item.coverImage} maxWidth={400}/>
        }
      >
        
        <List.Item.Meta
          //avatar={<Avatar src={item.coverImage} />}
          title={<a href={"/blog/".concat(item.slug)}>{item.title}</a>}
          description={item.excerpt}
        />
        {item.content}
      </List.Item>
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