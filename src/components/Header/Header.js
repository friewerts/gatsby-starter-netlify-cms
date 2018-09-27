import React from 'react'
import { Link } from 'gatsby'

import { Navigation } from '../../components'
import './Header.scss'
import logo from '../../assets/img/logo.svg'

const Header = () => (
  <div className="fr-m-header">
    <Link to="/">
      <img src={logo} alt="Logo FeWo Riewerts" className="fr-m-header__logo" />
    </Link>
    <Navigation />
  </div>
)

export default Header
