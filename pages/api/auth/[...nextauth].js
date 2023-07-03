```javascript
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { supabaseClient } from '../../../lib/supabase'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: {  label: "Password", type: "password" }
      },
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
      }
    })
  ],
  callbacks: {
    session: async (session, user) => {
      session.user.id = user.id
      return Promise.resolve(session)
    },
    jwt: async (token, user) => {
      if (user) token.id = user.id
      return Promise.resolve(token)
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', 
    verifyRequest: '/auth/verify-request', 
    newUser: null 
  }
})
```