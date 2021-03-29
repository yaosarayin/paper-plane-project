import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

export const pageQuery = graphql`
  query AllUsers {
    allWpUser {
      nodes {
        avatar {
          foundAvatar
          height
          size
          url
          width
        }
        firstName
        lastName
        email
        description
      }
    }
  }
`;

const List = styled.div`
  display: flex;
`;

const Card = styled.div`
  min-height: 100%;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  margin: 10px;
  flex-direction: column;
  text-decoration: none;
  color: #444;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
  padding: 20px;

  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }

  .avatar {
    background-size: cover;
    background-position: center center;
    margin-right: 30px;
  }

  p {
    flex: 1; /* make p grow to fill available space*/
    line-height: 1.4;
    margin: 0;
  }

  /* typography */
  h2 {
    margin: 0px;
    font-size: 30px;
    color: #333;
  }
`;

const About = ({ data }) => {
  const authors = data.allWpUser.nodes;
  const { Meta } = Card;
  const gridStyle = {
    width: "100%",
    textAlign: "center",
  };

  return (
    <Layout>
      <h1>关于我们</h1>
      <p>
        “纸飞机计划“是一个通过哈佛创新实验室（Harvard Innovation
        Labs）、由青少年发起，并针对青少年和学生心理健康的非盈利组织。纸飞机希望能够打破社会中对许多心理健康问题闭口不谈的现象，广泛普及心理健康知识，为任何年龄段的学生提供免费资源，并提高家属与学校老师对学生、孩子的身心健康的关注度。
      </p>
      <List>
        {authors.map((author) => {
          if (author.avatar.foundAvatar) {
            return (
              <Card>
                <div
                  className="name-avatar"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="avatar"
                    style={{
                      backgroundImage: `url(${author.avatar.url})`,
                      width: `${author.avatar.size}px`,
                      height: `${author.avatar.size}px`,
                      borderRadius: `${author.avatar.size / 2}px`,
                    }}
                  ></div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h2>
                      {author.firstName} {author.lastName}
                    </h2>
                    <p>{author.email}</p>
                  </div>
                </div>
                <p>{author.description}</p>
              </Card>
            );
          }
          return (
            <Card>
              <h2>
                {author.firstName} {author.lastName}
              </h2>
              <p>{author.description}</p>
            </Card>
          );
        })}
      </List>
    </Layout>
  );
};
export default About;
