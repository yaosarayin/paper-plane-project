/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
          size
        }
      }
    }
  `);

  const avatarUrl = author?.avatar?.url;

  return (
    <div
      className="bio"
    >
      {avatarUrl && (
        <img
          alt={author?.firstName || ``}
          src={avatarUrl}
          style={{
            maxWidth: `${author.avatar.size}px`,
            maxHeight: `${author.avatar.size}px`,
            borderRadius: "100%",
            marginRight: "30px",
          }}
        />
      )}
      {author?.firstName && (
        <p>
          Written by <strong>{author.firstName}</strong>
          {`.  `}
          {author?.description || null}
          {` `}
          {author?.twitter && (
            <a href={`https://twitter.com/${author?.twitter || ``}`} className="text-purple-400">
              Follow them on Twitter
            </a>
          )}
        </p>
      )}
    </div>
  );
};

export default Bio;
