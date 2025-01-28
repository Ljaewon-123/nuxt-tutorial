import { addsRecentUser, getUser } from "../utils/users"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if(!id){
    throw createError({
      statusCode: 400,
      message: 'No id provided'
    })
  }

  const user = await getUser(event, id)
  // TODO: make sure the user is added "as recent"
  await addsRecentUser(user)

  return user
})