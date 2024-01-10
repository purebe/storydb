'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

export function SignIn() {
	return (
		<button
			onClick={() => signIn('google', { callbackUri: '/'})}
			className="rounded-full bg-slate-200 text-slate-900 drop-shadow-md font-medium shadow-md flex items-center mx-4"
		>
			<Image
				src="/google-logo.png"
				alt="Google Logo"
				width={48}
				height={48}
				className="rounded-full"
			/>
			<span className="pl-2">Google</span>
		</button>
	);
};
