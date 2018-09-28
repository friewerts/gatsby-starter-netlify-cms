import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { PageWrapper, HTMLContent } from "../../components";

import AboutPageTemplate from "./AboutPageTemplate";

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <PageWrapper>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </PageWrapper>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
