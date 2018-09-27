import React from 'react'

import NavigationItem from './NavigationItem'
import './Navigation.scss'

const Navigation = () => (
  <nav className="fr-m-navigation">
    <NavigationItem label="About" to="/about" />
    <NavigationItem label="Products" to="/products" />
    <NavigationItem label="Wohnungen" to="/unsere-wohnungen" />
  </nav>
)

export default Navigation
