'use server';
import { getUserId } from '@/app/getUserId';

import { GetSharedPool } from '@/app/pg';

export async function requestEditDescription(id, newDesc) {
  const userId = await getUserId();

  const pool = await GetSharedPool();
  await pool.query('UPDATE Project SET description = $2 where id = $1 AND user_id = $3', [id, newDesc, userId]);
}
