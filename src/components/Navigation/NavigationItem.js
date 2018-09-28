import React from "react";
import { Link } from "gatsby";

const NavigationItem = ({ to, label }) => (
  <Link
    className="fr-m-navigation__item"
    activeClassName="fr-m-navigation__item--active"
    to={to}
  >
    {label}
  </Link>
);

export default NavigationItem;
