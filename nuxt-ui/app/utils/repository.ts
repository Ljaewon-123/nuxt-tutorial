import type { NitroFetchRequest, $Fetch } from 'nitropack'
type User = {
  
}

export const repository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(): Promise<User[]>{
    return fetch<User[]>('/users')
  }
})