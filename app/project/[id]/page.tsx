import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

import { Project } from '@/app/projects';

export default async function Home({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login', 'push');
  }
    return (
      <div className="h-screen flex flex-col justify-center text-center bg-gray-900 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="self-start h-3/5 px-4">
          <span>project id: {params.id}</span>
        </div>
        <div className="flex flex-col grow justify-end text-sm mb-4">
          <div>
            <span>Signed in as {session.user && session.user.email} - </span>
            <a href="/api/auth/signout" className="underline">Sign out</a>
          </div>
        </div>
      </div>
    );
}
