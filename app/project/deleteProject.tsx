'use server';

import { GetSharedPool } from '@/app/pg';
import { getUserId } from '@/app/getUserId';

export async function deleteProject(id) {
  const userId = await getUserId();

  const pool = await GetSharedPool();
  await pool.query('DELETE FROM Project WHERE id = $1 AND user_id = $2', [id, userId]);
}
