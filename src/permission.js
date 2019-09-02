import router from './router'
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('user-token')
  if (to.path.startsWith('/home')) {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
