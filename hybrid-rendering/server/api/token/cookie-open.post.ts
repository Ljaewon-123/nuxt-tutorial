import { accessCookieOptions } from "~~/server/options/cookie.option"
import jwt from 'jsonwebtoken'

export default defineEventHandler( async event => {

  const config = useRuntimeConfig(event)
  const atToken = getCookie(event, 'atToken' )

  // console.log(jwt.verify(atToken,'at-secret'))

  await useStorage().setItem('test:foo', { hello: 'world' })
  const test = await useStorage().getItem('test:foo')
  const test2 = await useStorage().getItem('test')
  console.log(test, test2)

  if (atToken) {
    try {
      // JWT 디코딩 및 유효성 검증
      // 다만 이런식으로 하면 딱 access토큰만큼만 한화면에서 추가 요청 안하고 가만히 있다가 
      // 다른 페이지 가면 로그인으로 이동한다 -> 불합리함 
      // default를 놓고 특수한 페이지 이동시에만 잡아햐함 
      // 어느간한 요청은 immediate:true일때 잡힐텐데 
      // 특수페이지 요청은 lazy옵션을 사용하지 않는다. or -> 다른서버에서 잡는다 혹은......
      // 만료된 토큰은 catch임 
      
      // 결국 세션이랑 비슷하게 흘러가는데 
      // 세션 redis보다? 나은점은 redis접근까지는 안한다는점?? 흠;;; 
      // db조회자체를 안해서 부담이 낮아지나??;

      // 조회만 안하면 되잖아??? 디코딩을 하는게 아니라 발급한 서버에 보내버리면??
      // refresh까지 같이되고 좋은거 같은데 

      const jwtVerify = jwt.verify(atToken, config.atSecret);
      console.log(jwtVerify, 'jwtVerify')
      return true
    } 
    catch (err) {
      console.error('Invalid token:');
      return 
    }
  } 

  return 
})