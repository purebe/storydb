import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

import { GetSharedPool } from '@/app/pg';
import { QuillEditor } from '@/app/quill';
import { Project } from '@/app/projects';
import { Toolbar } from '@/app/toolbar';

export default async function Home({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login', 'push');
  }
  const pool = await GetSharedPool();
  const res = await pool.query('SELECT * FROM Project where id = $1', [params.id]);
  const [ row ] = res.rows;
  const { id, name, description, created_at, updated_at } = row;

  return (
    <div className="h-screen flex flex-col justify-center text-center bg-gray-900 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="self-start">
        <Toolbar projectTitle={name} />
      </div>
      <div className="self-start h-3/5 px-4 flex flex-col">
        <span>project id: {id}</span>
        <span>project name: {name}</span>
        <span>project description: {description}</span>
        <span>project created_at: {created_at.toString()}</span>
        <span>project updated_at: {updated_at.toString()}</span>
      </div>
      <div className="mx-4 rounded shadow-lg bg-slate-50 ql-h-32">
        <QuillEditor />
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
