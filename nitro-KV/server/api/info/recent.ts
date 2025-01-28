import { getRecentUsers } from "../utils/users"

export default defineEventHandler(async (event) => {
  return getRecentUsers()
})