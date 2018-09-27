import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { PageWrapper, HTMLContent } from '../../components'

import UnsereWohnungenTemplate from './UnsereWohnungenTemplate'

const UnsereWohnungen = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PageWrapper>
      <UnsereWohnungenTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        images={post.frontmatter.images}
      />
    </PageWrapper>
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
        images {
          image {
            alt
            image
          }
          description
        }
      }
    }
  }
`
