import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const apiUrl = process.env.API_URL;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }) {
      const provider = account?.provider
      const uid = user?.id
      const name = user?.name
      const email = user?.email
      try {
        const response = await fetch(`${apiUrl}/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            provider,
            uid,
            name,
            email,
          }),
        })
        if (response.status === 200) {
          return true
        } else {
          return false
        }
      } catch (error) {
        return false
      }
    },
  },
});

export { handler as GET, handler as POST };
