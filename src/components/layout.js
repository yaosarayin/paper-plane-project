import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import Navbar from "./navbar";

const Layout = ({ isHomePage, children }) => {
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
    <div className="global-wrapper px-16 py-8" data-is-root-path={isHomePage}>
      <Navbar />
      <header className="global-header py-8">
        {isHomePage ? (
          <h1 className="main-heading text-8xl font-display">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {/* {title} */}
          </Link>
        )}
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  );
};

export default Layout;
