import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import { GetSharedPool } from '@/app/pg';

export async function GetSessionUserId() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
          redirect('/login', 'push');
  }

  const pool = await GetSharedPool();
  try {
    const res = await pool.query('SELECT id FROM Users where email = $1', [session.user.email]);
    return res.rows[0].id;
  } catch (err) {
    console.log(err);
  }
}
