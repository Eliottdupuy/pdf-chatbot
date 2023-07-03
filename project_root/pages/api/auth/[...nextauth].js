```javascript
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { supabaseClient } from '../../lib/supabase'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        const { user, error } = await supabaseClient.auth.signIn({
          email: credentials.email,
          password: credentials.password,
        })

        if (error) {
          throw new Error(error.message)
        } else {
          return { email: user.email }
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    },
  },
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/auth/error', 
    verifyRequest: '/auth/verify-request', 
    newUser: null 
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
})
```