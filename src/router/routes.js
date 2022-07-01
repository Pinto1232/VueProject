
import generatedRoutes from './auto-routing/generated-routes'

const routes = [
  {
    path: '',
    component: () => import('layouts/default.vue'),
    children: [
      { path: '/login', componet: () => import('pages/LoginPage.vue')}
    ]
  },

  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
