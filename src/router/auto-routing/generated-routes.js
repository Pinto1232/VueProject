/* eslint-disable */
function ErrorNotFound() {
  return import(
    /* webpackChunkName: "ErrorNotFound" */ 'pages/ErrorNotFound.vue'
  )
}
function IndexPage() {
  return import(/* webpackChunkName: "IndexPage" */ 'pages/IndexPage.vue')
}
function LoginPage() {
  return import(/* webpackChunkName: "LoginPage" */ 'pages/LoginPage.vue')
}

export default [
  {
    name: 'ErrorNotFound',
    path: 'ErrorNotFound',
    component: ErrorNotFound,
  },
  {
    name: 'IndexPage',
    path: 'IndexPage',
    component: IndexPage,
  },
  {
    name: 'LoginPage',
    path: 'LoginPage',
    component: LoginPage,
  },
]
