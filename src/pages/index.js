import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import { Row, Col } from 'antd';
import BlogPreview from '../components/BlogPreview'
import HeroImage from '../../static/paperplane.png'
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Typewriter from 'typewriter-effect';


const pageQuery = graphql`
{
  gcms {
    posts {
      title
      slug
      date
      excerpt
      coverImage {
        handle
        width
        height
      }
      tags
    }
  }
}`

const Home = () => {
  const {gcms: {posts}} = useStaticQuery(pageQuery)

  return (
      <>
        <Navbar /> 
        <Hero>
        <Title>纸飞机计划</Title>
        <Typewriter
          options={{
            strings: ['关心青少年心理健康', '提供免费资源'],
            autoStart: true,
            loop: true,
          }}
        />
        </Hero>
      <Content>
        <Section>
            {/* <h2>关于我们</h2> */}
          </Section>
        <BlogPreview posts={posts}/>
      </Content>
      </>
  )
}
export default Home

const Hero = styled.div`
    //background-image: url(${HeroImage});
    background:linear-gradient(90deg, #dae2f8 0%,#d6a4a4 100% );
    width: 100%;
    height: 300px;
    background-size: 100%;
    display:flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.span`
    color: black;
    font-size: 40px;
`;

const ImageDisplay = styled.img`
    //background-image: url(${HeroImage});
    width: 100%;
    height: 300px;
    object-fit:contain;
`;

const Section = styled.div`
    display: flex;
    width: 100%;
`;