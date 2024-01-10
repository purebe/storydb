import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import PostgresAdapter from '@auth/pg-adapter';
import { Pool } from 'pg';

const pool = new Pool({
	host: process.env.PG_HOST as string,
	user: process.env.PG_USER as string,
	port: process.env.PG_PORT as number,
	password: process.env.PG_PASSWORD as string,
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMilllis: 2000
});

export const authOptions: NextAuthOptions = {
	adapter: PostgresAdapter(pool),
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
