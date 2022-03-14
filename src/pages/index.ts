import React from 'react'

const Home = React.lazy(() => import('./home/Home'))
const Cart = React.lazy(() => import('./cart/Cart'))

export interface IRoute {
  path: string
  element: React.ComponentType
}

export enum RouteNames {
  HOME = '/',
  CART = '/cart',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    element: Home,
  },
  {
    path: RouteNames.CART,
    element: Cart,
  },
]
