import { GetSharedPool } from '@/app/pg';
import { getUserId } from '@/app/getUserId';
import dynamic from 'next/dynamic';

import { ProjectLoading } from '@/app/projectLoading';
import { NewProject } from '@/app/newProject';

// Load Project dynamically to disable server side rendering
// Otherwise the client locale date string may mismatch between server/client and throw an error
const Project = dynamic(() =>
  import('@/app/project'),
  {
    ssr: false,
    loading: () => <ProjectLoading />
  }
);

export async function Projects() {
  const pool = await GetSharedPool();
  let markup;
  try {
    const userId = await getUserId();
    const res = await pool.query('SELECT * FROM Project where user_id = $1', [userId]);
    markup = (
      <div className="flex mx-6">
        {res.rows.map(row => (
          <Project id={row.id} name={row.name} description={row.description} updatedAt={row.updated_at} />
        ))}
        <NewProject />
      </div>
    );
  } catch (err) {
    console.log(err);
  }
  return markup;
}
