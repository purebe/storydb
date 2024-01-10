import { PgConnect } from '@/app/pg';
import { GetSessionUserId } from '@/app/user';

export async function Project() {
  const client = await PgConnect();
  let markup;
  try {
    const userId = await GetSessionUserId();
    const res = await client.query('SELECT * FROM Project where user_id = $1', [userId]);
    markup = (
      <>
        {res.rows.map(row => (
          <div className="bg-slate-100 w-48 h-52 rounded shadow-xl mt-8 pb-2 flex flex-col justify-around text-center font-light text-slate-900 text-base drop-shadow-xl cursor-pointer">
            <p className="font-bold drop-shadow-xl">{row.name}</p>
            <p className="text-sm w-48 h-32 text-ellipsis overflow-hidden">{row.description}</p>
            <span className="text-xs font-medium">Last updated at {row.updated_at.toLocaleDateString()}</span>
          </div>
        ))}
      </>
    );
  } catch (err) {
    console.log(err);
    client.release();
  }
  return markup;
}