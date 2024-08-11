import db from "@/db/db";
import { getUserRole } from "@/lib/getCookie";
import { userRoles } from "@/types/shared";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface GoogleProfile {
  email: string;
  name: string;
  picture: string;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],
  callbacks: {
    //callbacks called after signin

    async signIn({ account, profile }) {
      const userRole = await getUserRole();

      //todo handle picture in diff cases
      if (!profile || !profile.email || !profile.name || !profile.picture)
        throw new Error("important fields missing in profile");
      const { email, name, picture } = profile as GoogleProfile;

      if (userRole === userRoles.user) {
        await db.user.upsert({
          where: {
            email: profile.email,
          },
          create: {
            email,
            name,
            pic: picture,
            phoneNumber: "",
          },
          update: {
            name: profile.name,
          },
        });
        return true;
      } else if (userRole === userRoles.seller) {
        await db.seller.upsert({
          where: {
            email: profile.email,
          },
          create: {
            email,
            name,
            pic: picture,
            phoneNumber: "",
            description: "",
          },
          update: {
            name: profile.name,
          },
        });
        return true;
      }

      return false;
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role as "USER" | "SELLER";
        session.user.image = token.picture;
      }
      console.log({ session, token });
      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email as string,
        },
        select: {
          id: true,
          name: true,
          pic: true,
          email: true,
        },
      });

      if (dbUser) {
        const data = {
          ...dbUser,
          role: userRoles.user,
          picture: dbUser.pic,
          pic: undefined,
        };
        return data;
      }

      const dbseller = await db.seller.findFirst({
        where: {
          email: token.email as string,
        },
        select: {
          id: true,
          name: true,
          pic: true,
          email: true,
        },
      });
      if (dbseller) {
        const data = {
          ...dbseller,
          role: userRoles.seller,
          picture: dbseller.pic,
          pic: undefined,
        };
        return data;
      }

      token.id = user!.id;
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
