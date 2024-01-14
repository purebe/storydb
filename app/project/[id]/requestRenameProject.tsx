'use server';
import { GetSharedPool } from '@/app/pg';
import { getUserId } from '@/app/getUserId';

export async function requestRenameProject(id, newTitle) {
  const userId = await getUserId();

  const pool = await GetSharedPool();
  await pool.query('UPDATE Project SET name = $2 where id = $1 AND user_id = $3', [id, newTitle, userId]);
}
