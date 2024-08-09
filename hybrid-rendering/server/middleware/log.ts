export default defineEventHandler((event) => {
  event.context.auth = { user: 123 }
  // console.log('fetch context ?', event.context)
})