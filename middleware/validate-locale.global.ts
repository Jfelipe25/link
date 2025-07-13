export default defineNuxtRouteMiddleware((to, from) => {
  const route = useRoute()
  const locale = route.params?.locale || 'default'
  console.log('[Middleware] locale detectado:', locale)
})
