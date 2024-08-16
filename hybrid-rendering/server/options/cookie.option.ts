export const refreshCookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' as const,  // or 'Lax' depending on your needs
  path: '/',
  maxAge: 60 * 60 * 24 * 7 // 1 week
}


export const accessCookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' as const,  // or 'Lax' depending on your needs
  path: '/',
  maxAge: 60 * 60 * 24 * 3 // 3일 
}
