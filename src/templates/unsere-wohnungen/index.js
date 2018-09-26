import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

import UnsereWohnungenTemplate from './UnsereWohnungenTemplate'

const UnsereWohnungen = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <UnsereWohnungenTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

UnsereWohnungen.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UnsereWohnungen

export const aboutPageQuery = graphql`
  query UnsereWohnungen($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
