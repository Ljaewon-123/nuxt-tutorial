export const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' as const,  // or 'Lax' depending on your needs
  path: '/',
  maxAge: 60 * 60 * 24 * 7 // 1 week
}
