import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

import { Project } from '@/app/project';

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/login', 'push');
	}
	
	return (
		<div className="h-screen flex justify-center items-center bg-gray-900 bg-gradient-to-b from-gray-950 to-gray-900">
			<div className="self-start">
				<Project />
			</div>
			<div className="text-sm self-end mb-4">
				<span>Signed in as {session.user && session.user.email} - </span>
				<a href="/api/auth/signout" className="underline">Sign out</a>
			</div>
		</div>
	);
}
