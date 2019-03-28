import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const MenuTemplate = ({ title, slug, items, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <nav className="{{slug}}">
      <p>
        {title} - {slug}
      </p>
      <ul>
        {items.map(i => (
          <li>{console.log(i)}</li>
        ))}
      </ul>
      <PageContent />
    </nav>
  );
};

MenuTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const Menu = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <MenuTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

Menu.propTypes = {
  data: PropTypes.object.isRequired
};

export default Menu;

export const aboutPageQuery = graphql`
  query Menu($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
