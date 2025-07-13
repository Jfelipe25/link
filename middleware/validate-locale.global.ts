export default defineNuxtRouteMiddleware((to, from) => {
  const route = useRoute()
  const locale = route.params?.locale
  if (!locale) {
    console.warn('[middleware] No se detectó locale, usando "default"')
  } else {
    console.log('[middleware] locale detectado:', locale)
  }
})
