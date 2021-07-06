import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import Navbar from "./navbar";

const Layout = ({ header, isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Navbar />
      <header className="global-header">
        {isHomePage ? (
          <div>
            <h1 className="chinese-h1">
              {/* <Link to="/">{parse(title)}</Link> */}
              <Link to="/">纸飞机计划</Link> 
            </h1>
            <h2 className="english-h1">The Paper Plane Project</h2>
          </div>
          
        ) : (
          // <Link className="header-link-home" to="/">
          //   {/* {title} */}
          // </Link>
          <div className="post-chinese-heading">{header}</div>
        )}
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, 纸飞机计划, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  );
};

export default Layout;
