import React from 'react'
import Helmet from 'react-helmet'

import { Navbar } from '../'
import './PageWrapper.scss'

const PageWrapper = ({ children }) => (
  <div className="fr-page-wrapper">
    <Helmet title="Home | FeWo Riewerts" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default PageWrapper
