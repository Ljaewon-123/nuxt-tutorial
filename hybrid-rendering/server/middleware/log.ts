export default defineEventHandler((event) => {
  event.context.auth = { user: 123 }
  console.log('새로운 라우터에 발동되는가? 안됨 새로운 api요청에만됨 ')
  // console.log('fetch context ?', event.context)
})