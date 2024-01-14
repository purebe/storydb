import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

import { GetSharedPool } from '@/app/pg';
import { QuillEditor } from '@/app/quill';
import { Project } from '@/app/projects';
import { Toolbar } from '@/app/toolbar';

import { NewProject } from '@/app/project/[id]/newProject';

async function RenderProject(pid, session) {
  const pool = await GetSharedPool();
  const res = await pool.query('SELECT * FROM Project where id = $1', [pid]);
  const [ row ] = res.rows;
  const { id, name, description, created_at, updated_at } = row;
  
  return (
    <div className="h-screen flex flex-col justify-center text-center bg-gray-900 text-slate-50 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="self-start">
        <Toolbar title={name} id={id}>
        </Toolbar>
      </div>
      <div className="self-start h-3/5 px-4 flex flex-col w-full">
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
      </div>
    </div>
  );
}

export default async function Home({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login', 'push');
  }
  let { id } = params;
  if (id === '-1') {
    return (
      <div className="h-screen flex flex-col justify-center text-center bg-gray-900 text-slate-50 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="self-start">
        </div>
        <div className="self-start h-3/5 px-4 flex flex-col">
        </div>
        <NewProject />
        <div className="flex flex-col grow justify-end text-sm mb-4">
        </div>
      </div>
    );
  }
  return RenderProject(id, session);
}
