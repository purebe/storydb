import { GetSharedPool } from '@/app/pg';
import { GetSessionUserId } from '@/app/user';

import { Project } from '@/app/project';

export async function Projects() {
  const pool = await GetSharedPool();
  let markup;
  try {
    const userId = await GetSessionUserId();
    const res = await pool.query('SELECT * FROM Project where user_id = $1', [userId]);
    markup = (
      <>
        {res.rows.map(row => (
          <Project id={row.id} name={row.name} description={row.description} updatedAt={row.updated_at} />
        ))}
      </>
    );
  } catch (err) {
    console.log(err);
  }
  return markup;
}
