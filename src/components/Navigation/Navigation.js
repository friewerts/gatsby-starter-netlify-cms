import React from 'react'
import { Link } from 'gatsby'

import './Navigation.scss'

const Navigation = () => (
  <nav className="fr-m-navigation">
    <Link className="fr-m-navigation__item" to="/about">
      About
    </Link>
    <Link className="fr-m-navigation__item" to="/products">
      Products
    </Link>
    <Link className="fr-m-navigation__item" to="/unsere-wohnungen">
      Wohnungen
    </Link>
  </nav>
)

export default Navigation
