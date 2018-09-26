import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../Navbar'
import './PageWrapper.scss'

const PageWrapper = ({ children }) => (
  <div className="fr-page-wrapper">
    <Helmet title="Home | FeWo Riewerts und Flor" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default PageWrapper
