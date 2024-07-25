export default defineNuxtRouteMiddleware(
  (to, from) => {
    // console.log(from)
    // console.log(to)
    // console.log('this code will run before navigating to the end route')
    console.log('File Middlware Router')
  }
)