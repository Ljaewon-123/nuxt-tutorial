import type { H3Event } from 'h3'

type User = {
  id: string,
  name: string,
  username: string,
  email: string
}

export const getUser = defineCachedFunction(async (_event: H3Event, id: string) => {
  const result = await $fetch<Record<string, any>>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )

  // 각 서로 다른 id별로 3초를 기다린다 중복은 되지않는다.
  //  ex) 1이면 1만 캐시 2면 2만 캐시 다른 매개변수를 다르게 인식하는거같다.
  // await new Promise((r) => setTimeout(r, 3000))

  return {
    id: result.id,
    name: result.name,
    username: result.username,
    email: result.email
  } as User
}, {
  swr: false,
  maxAge: 1000
})

const KEY = 'recent-users'
export async function getRecentUsers(): Promise<User[]>{
  const users = await useStorage().getItem<User[]>(KEY) ?? []
  return users
}

const RECENT_USER_LIMIT = 3
export async function addsRecentUser(user: User){
  const currentUsers = await getRecentUsers()
  currentUsers.unshift(user)
  if(currentUsers.length > RECENT_USER_LIMIT){
    currentUsers.pop()
  }
  
  // Save the users
  await useStorage().setItem(KEY, currentUsers)

  return currentUsers
}