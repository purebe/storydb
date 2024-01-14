'use server';
import { Auth } from '@/app/auth';
import { ProjectAuth } from '@/app/project/projectAuth';

import { GetSharedPool } from '@/app/pg';
import { getUserId } from '@/app/getUserId';
import { redirect } from 'next/navigation';

export async function createNewProject(title, desc) {
  if (!await Auth()) return;

  const id = await getUserId();

  const pool = await GetSharedPool();
  const res = await pool.query('INSERT INTO Project (name, description, user_id) VALUES ($1, $2, $3) RETURNING ID', [title, desc, id]);
  const [ row ] = res.rows;
  const { id: pid } = row;
  redirect(`/project/${pid}`, 'push');
}

