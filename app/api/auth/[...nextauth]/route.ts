import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import PostgresAdapter from '@auth/pg-adapter';
import { Pool } from 'pg';
import { GetSharedPool } from '@/app/pg';

export const authOptions: NextAuthOptions = {
	adapter: PostgresAdapter(GetSharedPool()),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
