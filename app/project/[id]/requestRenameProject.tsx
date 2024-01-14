'use server';
import { Auth } from '@/app/auth';
import { ProjectAuth } from '@/app/project/projectAuth';

import { GetSharedPool } from '@/app/pg';

export async function requestRenameProject(id, newTitle) {
  if (!await Auth()) return;
  if (!await ProjectAuth(id)) return;

  const pool = await GetSharedPool();
  await pool.query('UPDATE Project SET name = $2 where id = $1', [id, newTitle]);
}
