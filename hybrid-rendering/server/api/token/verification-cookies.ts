export default defineEventHandler( event => {

  const atToken = getCookie(event, 'atToken')
  const rtToken = getCookie(event, 'rtToken')

  if(atToken && rtToken){
    return true
  }

  return
})