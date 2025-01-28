export default defineCachedEventHandler(async event => {
  await new Promise((r) => setTimeout(r, 3000))
  return {
    date: new Date()
  }
},{
  maxAge: 10,
  // swr: false, // # true시 만료여부와 떠나서 요청시 캐시 업데이트를 한다 만료시에도 부드럽게 업데이트됨 
  /**
   * staleMaxAge는 주로 성능 최적화를 위해 사용됩니다. 
   * 예를 들어, 서버가 일시적으로 다운되거나 데이터베이스에 문제가 생길 때, 
   * staleMaxAge를 사용하면 캐시된 데이터가 유효하지 않아도 계속 사용할 수 있어요. 이렇게 하면 사용자에게 일시적인 데이터 오류가 생기더라도 원활한 서비스 제공이 가능하죠.
   * 또한, 캐시 재검증 요청이 많을 때 
   * 서버에 부하를 줄이기 위해 staleMaxAge를 사용하면 트래픽을 분산시키는 데도 도움이 됩니다. 
   * 요컨대, staleMaxAge는 유효하지 않은 데이터를 일정 시간 동안 더 활용함으로써 서비스의 안정성과 성능을 향상시키는 데 기여합니다.
   */
  staleMaxAge: 30,  // 업데이트동안 오래된 캐시주는 기능? 이거 효용을 잘 모르겠는데 
  getKey: () => 'test-cache',
  // base: 'cache-important'
})
