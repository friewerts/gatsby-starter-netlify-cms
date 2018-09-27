import React from 'react'
import Helmet from 'react-helmet'

import { Header } from '../'
import '../../styles/_typography.scss'
import './PageWrapper.scss'

const PageWrapper = ({ children }) => (
  <div className="fr-page-wrapper">
    <Helmet title="Home | FeWo Riewerts" />
    <Header />
    <div>{children}</div>
  </div>
)

export default PageWrapper
