import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import GraphImg from "graphcms-image"

import { Row, Col } from 'antd';
import Layout from '../components/Layout'
import { List, Avatar, Space, Card } from 'antd';


const pageQuery = graphql`
{
gcms {
    authors {
        biography
        id
        name
        picture {
        handle
        height
        width
        }
        title
    }
    }
}`

const About = () => {
  const {gcms: {authors}} = useStaticQuery(pageQuery)
  const { Meta } = Card;
  const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <Layout>
      <h1>关于我们</h1>
      <p>“纸飞机计划“是一个通过哈佛创新实验室（Harvard Innovation Labs）、由青少年发起，并针对青少年和学生心理健康的非盈利组织。纸飞机希望能够打破社会中对许多心理健康问题闭口不谈的现象，广泛普及心理健康知识，为任何年龄段的学生提供免费资源，并提高家属与学校老师对学生、孩子的身心健康的关注度。</p>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={authors}
        renderItem={author => (
          <List.Item>
            <Card
              hoverable
              style={gridStyle}
              cover={<GraphImg image={author.picture} maxWidth={300}/>}
            >
              <Meta title={author.name} description={author.biography} />
            </Card>
          </List.Item>
        )}
      />
    </Layout>
  )
}
export default About
