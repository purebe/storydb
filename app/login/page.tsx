import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

import { SignIn } from '@/app/login/signin';

export default async function LoginPage() {
	const session = await getServerSession(authOptions);

	if (session && session.user) {
		redirect('/', 'push');
	}

	return (
		<div className="h-screen flex justify-center items-center bg-gray-900 bg-gradient-to-b from-gray-950 to-gray-900">
			<section className="login text-center bg-slate-100 w-64 h-96 rounded shadow-xl py-6 flex flex-col justify-around">
				<h1 className="font-light mb-12 text-slate-900 text-2xl pb-2 drop-shadow-xl">Sign in With</h1>
				<SignIn />
			</section>
		</div>
	);
}
