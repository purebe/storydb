'use server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { GetSharedPool } from '@/app/pg';
import { getUserId } from '@/app/getUserId';
import { redirect } from 'next/navigation';

export async function createNewProject(title, desc) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return;
  }

  const id = await getUserId();

  const pool = await GetSharedPool();
  const res = await pool.query('INSERT INTO Project (name, description, user_id) VALUES ($1, $2, $3) RETURNING ID', [title, desc, id]);
  const [ row ] = res.rows;
  const { id: pid } = row;
  redirect(`/project/${pid}`, 'push');
}

