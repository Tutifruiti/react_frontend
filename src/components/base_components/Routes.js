import React from 'react';

import Content1 from '../Page/Content1'
import Content2 from '../Page/Content2'

// Declare all routes with attribute
// Routes are composed of:
// path
// name
// comp
// icon
// exact boolean
const routes = [
    {
        path: "/",
        name: "home",
        render: () => <Content1 />,
        exact: true,
    },
    {
      path: "/inbox",
      name: "inbox",
      render: () => <Content2 />,
      exact: true,
    },
    {
      path: "/about",
      name: "about",
      render: () => <Content2 />,
      exact: true,
    }
]

export default routes;