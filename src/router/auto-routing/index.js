/* eslint-disable */
import { createRouterLayout } from 'vue-router-layout'
import generatedRoutes from './generated-routes'

const RouterLayout = createRouterLayout(layout => {
  return import('D:\FullView\src\layouts/' + layout + '.vue')
})

export default [
  {
    path: '',
    component: RouterLayout,
    children: generatedRoutes
  }
]
