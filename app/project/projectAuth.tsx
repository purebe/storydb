import { redirect } from 'next/navigation';
import { GetSharedPool } from '@/app/pg';
import { getUserId } from '@/app/getUserId';

export async function ProjectAuth(id) {
  const userId = await getUserId();

  const pool = await GetSharedPool();
  const res = await pool.query('SELECT id FROM Project WHERE id = $1 AND user_id = $2', [id, userId]);
  if (res.rows.length === 0) {
    redirect('/', 'push');
    return false;
  }
  return true;
}
